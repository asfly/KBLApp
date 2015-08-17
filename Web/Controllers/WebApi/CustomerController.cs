using BLL;
using System.Threading.Tasks;
using System.Web.Http;
using Helper.T;
using Models;
using Helper;
using Newtonsoft.Json;
using Web.Controllers.WebApi;
using System.Web;

namespace Web.Controllers.WebApi
{
    [FormAuth]
    [RoutePrefix("api")]
    public class CustomerController : ApiController
    {
        public T_Customer_Role Role
        {
            get
            {
                if (HttpContext.Current.Session["User"] == null)
                {
                    return null;
                }
                return (T_Customer_Role)HttpContext.Current.Session["User"];
            }
        }
        // GET api/<controller>
        [Route("customer/gets")]
        [HttpPost]
        [HttpGet]
        public async Task<object> GetCustomers()
        {
            string[] str = new string[] { };

            var data = await T_Customer_BLL.GetCustomers(str);
            return Ok(new
            {
                statusCode = 200,
                data = data
            });
        }

        [Route("customer/get")]
        [HttpPost]
        [HttpGet]
        public async Task<object> GetCustomer(T_Customer model)
        {
            object o = await T_Customer_BLL.GetCustomer(model.Cid);
            return Ok(new
            {
                statusCode = 200,
                customer = o
            });
        }

        [Route("customer/register")]
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
                effects = await T_Customer_BLL.SaveCustomer(customer);
            }
            return Ok(new
            {
                statusCode = 200,
                effects = effects
            });
        }
    }
}