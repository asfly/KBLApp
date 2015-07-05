using System.Web.Http.WebHost;
using System.Web.Routing;
using System.Web.SessionState;

namespace Helper.HttpModule
{
    public class WebApiSessionControllerHandler : HttpControllerHandler, IRequiresSessionState
    {
            public WebApiSessionControllerHandler(RouteData routeData) : base(routeData) { }
    }
}