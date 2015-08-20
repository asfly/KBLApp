using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Security;

namespace Web.Controllers.WebApi
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        [Route("signin")]
        [HttpPost]
        [HttpGet]
        public async Task<object> SignIn(LoginModel model)
        {
            var userRole = await BLL.T_Customer_BLL.CheckUserName(model.UserName, model.Password);
            if (userRole != null)
            {
                HttpContext.Current.Session["User"] = userRole;
                FormsAuthentication.SetAuthCookie(userRole.UserName, false);
                return Ok(new
                {
                    statusCode = HttpStatusCode.OK,
                    result = "登录成功"
                });
            }
            else
            {
                return Ok(new
                {
                    statusCose = HttpStatusCode.NotFound,
                    result = "错误的用户名或密码."
                });
            }
        }

        [Route("unauthorized")]
        [HttpPost]
        public object unauthorized()
        {
            HttpContext.Current.Session.Clear();
            return Ok(new
            {
                statusCode = 417,
                user = new { }
            });
        }

        [Route("cname")]
        [HttpPost]
        public async Task<object> GetCNames(string cname)
        {
            var users = await BLL.T_Customer_BLL.CheckCustomerCName(cname);
            return Ok(new {
                statusCode = 200,
                result = users
            });
        }

        [Route("username")]
        [HttpPost]
        public async Task<object> GetUserName(string username)
        {
            var users = await BLL.T_Customer_BLL.CheckCustomerCName(username);
            return Ok(new
            {
                statusCode = 200,
                result = users
            });
        }
    }
}