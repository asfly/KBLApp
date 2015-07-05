using System.Web;
using System.Web.Http.WebHost;
using System.Web.Routing;

namespace Helper.HttpModule
{
    public class WebApiSessionRouteHandler : HttpControllerRouteHandler
    {
        protected override IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            return new WebApiSessionControllerHandler(requestContext.RouteData);
        }  
    }
}