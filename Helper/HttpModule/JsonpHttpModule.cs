using System;
using System.IO;
using System.Text;
using System.Web;
using System.Linq;
using System.Xml;
using System.Xml.Linq;


namespace Helper.HttpModule
{
    /// <summary>
    /// 解决ajax跨域调用web service返回结果需要修改
    /// web service不认jsonp的格式 会自动返回xml 使客户端 如jquery等解析出错
    /// </summary>
    public class JsonpHttpModule : IHttpModule
    {
        private const string JSON_CONTENT_TYPE = "application/json; charset=utf-8";

        #region IHttpModule Members
        public void Dispose()
        {

        }

        public void Init(HttpApplication app)
        {
            app.BeginRequest += OnBeginRequest;
            app.ReleaseRequestState += OnReleaseRequestState;
            app.EndRequest += OnEndRequestState;
        }
        #endregion
        bool _Apply(HttpContext context)
        {
            if ("jsonp" != context.Request.Params["format"]) return false;
            return true;
        }

        public void OnBeginRequest(object sender, EventArgs e)
        {
            //HttpApplication app = (HttpApplication)sender;

            //if (!_Apply(app.Context.Request)) return;

            //// correct content type of request
            //if (string.IsNullOrEmpty(app.Context.Request.ContentType))
            //{
            //    app.Context.Request.ContentType = JSON_CONTENT_TYPE;
            //}

        }
        public void OnReleaseRequestState(object sender, EventArgs e)
        {
            HttpApplication app = (HttpApplication)sender;
            string _charset = HttpContext.Current.Request.Params["charset"];
            if (!_Apply(app.Context)) return;
            // apply response filter to conform to JSONP
            //由于使用Http Get 默认的解析方法 在返回内容是会使用xml格式 这里把他的xml外衣脱掉
            if (_charset != null) { if (_charset.ToLower() != "utf-8") { return; } }
            app.Context.Response.Filter = new JsonResponseFilter(app.Context.Response.Filter, app.Context);
        }

        public void OnEndRequestState(object sender, EventArgs e)
        {
        }
    }

    public class JsonResponseFilter : Stream
    {
        private readonly Stream _responseStream;
        private long _position;
        private string _string = string.Empty;
        private HttpContext _context;

        public JsonResponseFilter(Stream responseStream, HttpContext context)
        {
            _responseStream = responseStream;
            _context = context;
        }

        public override bool CanRead { get { return true; } }

        public override bool CanSeek { get { return true; } }

        public override bool CanWrite { get { return true; } }

        public override long Length { get { return 0; } }

        public override long Position { get { return _position; } set { _position = value; } }

        public override void Write(byte[] buffer, int offset, int count)
        {
            string strBuffer = Encoding.UTF8.GetString(buffer, offset, count);
            _string += strBuffer;
            if (_string.StartsWith("<?xml version") && _string.EndsWith("</string>"))
            {
                strBuffer = AppendJsonpCallback(_string, _context);
                byte[] data = Encoding.UTF8.GetBytes(strBuffer);
                _responseStream.Write(data, 0, data.Length);
            }
        }

        private string AppendJsonpCallback(string strBuffer, HttpContext request)
        {
            XDocument x = new XDocument();
            try
            {
                x = XDocument.Parse(strBuffer, LoadOptions.SetLineInfo);
                return _context.Request.Params["callback"] + "(" + x.Descendants().FirstOrDefault().Value + ");";
            }
            catch (Exception ex)
            {
                string str = System.Text.RegularExpressions.Regex.Replace(strBuffer, @"<.*>", "");
                return _context.Request.Params["callback"] + "(" + str + ");" + ex.Message;
            }
        }

        public override void Close()
        {
            _responseStream.Close();
        }

        public override void Flush()
        {
            _responseStream.Flush();
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            return _responseStream.Seek(offset, origin);
        }

        public override void SetLength(long length)
        {
            _responseStream.SetLength(length);
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            return _responseStream.Read(buffer, offset, count);
        }
    }
}