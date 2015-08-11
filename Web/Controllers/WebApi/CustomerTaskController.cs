using System.Threading.Tasks;
using System.Web.Http;
using BLL;
using Helper;
using Helper.T;
using Models;
using Newtonsoft.Json;
using Web.Controllers.Auth;

namespace Web.Controllers.WebApi
{
    [RoutePrefix("api/customer")]
    public class CustomerTaskController : AuthApiController
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
    }
}
