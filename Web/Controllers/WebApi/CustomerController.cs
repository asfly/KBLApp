using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Helper.T;
using Models;
using Helper;
using Newtonsoft.Json;

namespace Web.Controllers.WebApi
{
    [RoutePrefix("api/customer")]
    public class CustomerController : ApiController
    {
        // GET api/<controller>
        [Route("gets")]
        [HttpPost]
        [HttpGet]
        public async Task<object> GetCustomers()
        {
            var data = await T_Customer_BLL.GetCustomers("");
            return Ok(new
            {
                statusCode = 200,
                data = data
            });
        }

        [Route("get")]
        [HttpPost]
        [HttpGet]
        public async Task<object> GetCustomer(T_Customer model)
        {
            //T_Customer customer = new T_Customer();
            object o = new { };
            //if (model.Input0 != null)
            {
                string s = string.Empty;
                //s = POSTJson.ResolveTJSON(model);
                //customer = JsonConvert.DeserializeObject<T_Customer>(s);
                o = await T_Customer_BLL.GetCustomer(model.CID);                
            }
            return Ok(new
            {
                statusCode = 200,
                customer = o
            });
        }

        [Route("register")]
        [HttpGet]
        [HttpPost]
        [HttpPut]        
        public async Task<object> Register(T_JSON model)
        {
            T_Customer customer = new T_Customer();
            object effects = 0;
            if (model.Input0 != null)
            {
                string s = string.Empty;
                s = POSTJson.ResolveTJSON(model);
                customer = JsonConvert.DeserializeObject<T_Customer>(s);
                effects = await T_Customer_BLL.SaveOrEdit(customer);
            }
            return Ok(new
            {
                statusCode = 200,
                effects = effects
            });
        }
    }
}