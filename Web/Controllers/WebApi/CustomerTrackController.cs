using System.Threading.Tasks;
using System.Web.Http;
using BLL;
using Helper;
using Helper.T;
using Models;
using Newtonsoft.Json;
using Web.Controllers.WebApi;

namespace Web.Controllers.WebApi
{
    [FormAuth]
    [RoutePrefix("api/customer")]
    public class CustomerTrackController : ApiController
    {
        // post api/<controller>
        [Route("{cid:long}/task/list")]
        [HttpPost]
        [HttpGet]
        public async Task<object> List(long cid)
        {
            var data = await T_Customer_BLL.GetCustomerTasks(cid);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }

        // post api/<controller>
        [Route("{cid:long}/task/{taskId:long}/get")]
        [HttpPost]
        [HttpGet]
        public async Task<object> Find(long taskId)
        {
            var data = await T_Customer_BLL.GetCustomerTask(taskId);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }

        // post api/<controller>
        [Route("{cid:long}/task/save")]
        [HttpPost]
        [HttpGet]
        public async Task<object> Save(T_JSON model)
        {
            object effects = 0;
            T_Customer_Task task = new T_Customer_Task();
            if (model.Input0 != null)
            {
                string s = string.Empty;
                s = POSTJson.ResolveTJSON(model);
                task = JsonConvert.DeserializeObject<T_Customer_Task>(s);
                effects = await T_Customer_BLL.SaveCustomerTask(task);
            }
            return Ok(new
            {
                statusCode = 200,
                result = effects
            });
        }

        [Route("{cid:long}/task/{taskId:long}/remove")]
        [HttpPost]
        [HttpGet]
        public async Task<object> Remove(long taskId)
        {
            string s = string.Empty;
            object effects = await T_Customer_BLL.RemoveCustomerTask(taskId);
            return Ok(new
            {
                statusCode = 200,
                result = effects
            });
        }

        // post api/<controller>
        [Route("{cid:long}/product/get/{pid:long}")]
        [HttpGet]
        public async Task<object> GetProduct(long pid)
        {
            var data = await T_Customer_BLL.GetCustomerProduct(pid);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }

        [Route("{cid:long}/product/list")]
        [HttpGet]
        public async Task<object> ProductList(long cid)
        {
            object data = await T_Customer_BLL.GetCustomerProducts(cid);
            return Ok(new {
                statusCode = 200,
                result = data
            });
        }

        [Route("{cid:long}/product/save")]
        [HttpPost]
        public async Task<object> ProductSave(T_Customer_Product model)
        {
            object data = await T_Customer_BLL.SaveCustomerProduct(model);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }

        [Route("{cid:long}/product/remove")]
        [HttpPost]
        public async Task<object> ProductRemove(long pId)
        {
            object data = await T_Customer_BLL.RemoveCustomerProduct(pId);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }
    }
}
