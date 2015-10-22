using BLL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Web.Controllers.WebApi
{
    [FormAuth]
    [RoutePrefix("api/product")]
    public class ProductController : ApiController
    {
        [Route("")]
        [HttpGet]
        public async Task<object> GetProducts()
        {
            object data = await T_Customer_BLL.GetProducts();
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }

        [Route("save")]
        [HttpPost]
        public async Task<object> SaveProduct(T_Product model)
        {
            object data = await T_Customer_BLL.SaveProduct(model);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }

        [Route("remove")]
        [HttpPost]
        public async Task<object> RemoveProduct(dynamic pid)
        {
            object data = await T_Customer_BLL.RemoveCustomerProduct(pid);
            return Ok(new
            {
                statusCode = 200,
                result = data
            });
        }
    }
}
