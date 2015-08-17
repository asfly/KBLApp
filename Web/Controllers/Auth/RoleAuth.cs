using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Web.Controllers.Auth
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class FormAuth : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {

        }
    }
}
