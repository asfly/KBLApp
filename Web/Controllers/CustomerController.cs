using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    [RoutePrefix("Customer")]
    public class CustomerController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            ViewBag.Message = "客户资料";
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }
    }
}
