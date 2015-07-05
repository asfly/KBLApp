using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Web.Script.Serialization;
using System.Web.Mvc;
using System.Reflection;
using Newtonsoft.Json;
using Helper.T;

namespace Helper
{
    public class JsonModelBinder : DefaultModelBinder
    {
        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            if (!IsJSONRequest(controllerContext))
            {
                return base.BindModel(controllerContext, bindingContext);
            }

            var contentType = controllerContext.HttpContext.Request.ContentType;

            if (!contentType.StartsWith("application/json", StringComparison.OrdinalIgnoreCase))
                return (null);

            // 从已经发送的post请求中获取json数据
            //var request = controllerContext.HttpContext.Request;
            //在一些设置有一些已经读取输入流内容类型 = 'application/json', 所以开始时寻求
            //request.InputStream.Seek(0, SeekOrigin.Begin);

            string jsonStringData;// = new StreamReader(request.InputStream).ReadToEnd();

            using (var stream = controllerContext.HttpContext.Request.InputStream)
            {
                stream.Seek(0, SeekOrigin.Begin);
                var reader = new StreamReader(stream);
                jsonStringData = reader.ReadToEnd();
            }

            if (string.IsNullOrEmpty(jsonStringData)) return (null);

            // 使用内置的串行器为我们做的工作
            return new JavaScriptSerializer()
                .Deserialize(jsonStringData, bindingContext.ModelMetadata.ModelType);
        }

        private static bool IsJSONRequest(ControllerContext controllerContext)
        {
            var contentType = controllerContext.HttpContext.Request.ContentType;
            return contentType.Contains("application/json");
        }
    }

    public static class JavaScriptSerializerExt
    {
        public static object Deserialize(this JavaScriptSerializer serializer, string input, Type objType)
        {
            var deserializerMethod = serializer.GetType().GetMethod("Deserialize", BindingFlags.NonPublic | BindingFlags.Static);

            // 为我们工作需要做的内部静态方法
            //Deserialize(this, input, null, this.RecursionLimit);

            return deserializerMethod.Invoke(serializer,
                new object[] { serializer, input, objType, serializer.RecursionLimit });
        }
    }

    public static class POSTJson
    {
        public static string ResolveTJSON(T_JSON model)
        {
            KeyValuePair<string, object> _flowKeyValue = model.Input0.First();
            string s = JsonConvert.SerializeObject(_flowKeyValue.Value);
            return s;
        }
    }
}