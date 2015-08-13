using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;

namespace Web.Controllers.WebApi
{
    public class UsersController : ApiController
    {
        public string Get()
        {

            var cookie = Request.Headers.GetCookies();
            FormsAuthenticationTicket ticket = null;

            foreach (var perCookie in cookie[0].Cookies)
            {
                if (perCookie.Name == FormsAuthentication.FormsCookieName)
                {
                    ticket = FormsAuthentication.Decrypt(perCookie.Value);
                    break;
                }
            }
            if (ticket == null)
            {
                return null;
            }
            return ticket.Name;
        }
    }
}
