using System.Web.Http;
using System.Threading.Tasks;
using Models;
using Helper.T;
using BLL;
using Helper;
using Newtonsoft.Json;
using Web.Controllers.WebApi;

namespace Web.Controllers.WebApi
{
    [FormAuth]
    [RoutePrefix("api/cutomer/role")]
    public class CustomerRoleController : ApiController
    {
        // GET api/<controller>
        [Route("gets")]
        [HttpPost]
        [HttpGet]
        public async Task<object> GetRoles()
        {
            string[] cids = new string[] { };
            var data = await T_Customer_BLL.GetCustomers(cids);
            return Ok(new
            {
                statusCode = 200,
                data = data
            });
        }

        [Route("get")]
        [HttpPost]
        public async Task<object> GetRole(long cid)
        {
            object o = new { };
            //if (model.Input0 != null)
            //{
            string s = string.Empty;
            //s = POSTJson.ResolveTJSON(model);
            //customer = JsonConvert.DeserializeObject<T_Customer>(s);
            o = await T_Customer_BLL.GetCustomer(cid);
            //}
            return Ok(new
            {
                statusCode = 200,
                customer = o
            });
        }

        [Route("check")]
        [HttpPost]
        public async Task<object> CheckCustomer(string userName)
        {
            var o = await T_Customer_BLL.CheckUserName(userName);
            return Ok(new
            {
                statusCode = 200,
                role = o
            });
        }

        [Route("submit")]
        [HttpPost]
        public async Task<object> Submit(T_JSON model)
        {
            T_Customer_Role role = new T_Customer_Role();
            object effects = 0;
            if (model.Input0 != null)
            {
                string s = string.Empty;
                s = POSTJson.ResolveTJSON(model);
                role = JsonConvert.DeserializeObject<T_Customer_Role>(s);
                effects = await T_Customer_BLL.SaveCustomerRole(role);
            }
            return Ok(new
            {
                statusCode = 200,
                effects = effects
            });
        }

        [Route("remove")]
        [HttpPost]
        public async Task<object> Register(long cid)
        {
            int effects = await T_Customer_BLL.RemoveCustomerRole(cid);
            return Ok(new
            {
                statusCode = 200,
                effects = effects
            });
        }
    }
}
