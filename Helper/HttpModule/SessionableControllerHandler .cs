﻿using System.Web.Http.WebHost;
using System.Web.Routing;
using System.Web.SessionState;

namespace Helper.HttpModule
{
    public class SessionableControllerHandler : HttpControllerHandler, IRequiresSessionState
    {
        public SessionableControllerHandler(RouteData routeData)
            : base(routeData)
        { }
    } 
}