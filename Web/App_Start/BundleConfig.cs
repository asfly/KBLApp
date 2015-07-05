using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/public/libs/jquery/1.11.1/js").Include(
                        "~/public/libs/jquery/1.11.1/js/jquery.min.js"));

            bundles.Add(new ScriptBundle("~/public/libs/angularjs/").Include(
                        "~/public/libs/angularjs/1.2.28/js/angular.min.js"));

            bundles.Add(new ScriptBundle("~/public/libs/bootstrap/").Include(
                        "~/public/libs/bootstrap/3.3.1/js/bootstrap.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/styles/css").Include("~/Content/site.css"));
            bundles.Add(new StyleBundle("~/public/libs/bootstrap/3.3.1/css/").Include("~/public/libs/bootstrap/3.3.1/css/bootstrap.min.css"));
            bundles.Add(new StyleBundle("~/public/libs/font-awesome/").Include("~/public/libs/font-awesome/4.2.0/css/font-awesome.min.css"));
            //bundles.Add(new StyleBundle("~/styles/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}