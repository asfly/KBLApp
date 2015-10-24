/**
 * Created by daniel.zuo on 6/16/2015.
 */
'use strict';
    // dynamically add base tag as well as css and javascript files.
    // we can't add css/js the usual way, because some browsers (FF) eagerly prefetch resources
    // before the base attribute is added, causing 404 and terribly slow loading of the docs app.
(function() {
    var indexFile = (location.pathname.match(/\/(index[^\.]*\.html)/) || ['', ''])[1],
        rUrl = /(#!\/|index[^\.]*\.html).*$/,
        origin = location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '')),
        baseUrl = origin + location.href.substr(origin.length).replace(rUrl, indexFile),
        headEl = document.getElementsByTagName('head')[0],
        sync = true,debug = false;

        /*customize css*/
        addTag('link', {rel: '/public/libs/bootstrap/3.3.4/css/bootstrap.min.css', type: 'text/css'});
        addTag('link', {rel: '/public/libs/font-awesome/4.2.0/css/font-awesome.min.css', type: 'text/css'});
        addTag('link', {rel: '/public/libs/angularjs/xeditable/0.1.8/css/xeditable.css', type: 'text/css'});
        addTag('link', {rel: '/public/libs/angular-datepicker/styles/datePicker.css', type: 'text/css'});
        addTag('link', {rel: '/Content/Site.css', type: 'text/css'});

        addTag('base', {href: baseUrl});
        addTag('link', {
            rel: 'stylesheet',
            href: '/public/libs/bootstrap/3.3.4/css/bootstrap.min.css',
            type: 'text/css'
        });
        addTag('link', {
            rel: 'stylesheet',
            href: '/public/libs/font-awesome/4.3.0/css/font-awesome.min.css',
            type: 'text/css'
        });
        addTag('link', {rel: 'stylesheet', href: '/web/styles/animations.css', type: 'text/css'});
        addTag('link', {rel: 'stylesheet', href: '/web/styles/animate.css', type: 'text/css'});
        addTag('link', {
            rel: 'stylesheet',
            href: '/public/templates/datepicker/styles/datePicker.css',
            type: 'text/css'
        });
        addTag('link', {
            rel: 'stylesheet',
            href: '/public/libs/angular-bootstrap-lightbox/angular-bootstrap-lightbox.css',
            type: 'text/css'
        });
        addTag('link', {
            rel: 'stylesheet',
            href: '/public/libs/isteven-multi-select/isteven-multi-select.css',
            type: 'text/css'
        });
        addTag('link', {rel: 'stylesheet', href: '/web/directives/loading-bar/loading-bar.css', type: 'text/css'});
        addTag('link', {rel: 'stylesheet', href: '/web/directives/uiSlider/jquery-ui.min.css', type: 'text/css'});
        addTag('link', { rel: 'stylesheet', href: '/web/styles/docs.css', type: 'text/css' });

    if(debug) {
        addTag('script', { src: '/public/libs/jquery/1.11.1/js/jquery.min.js' }, sync);
        addTag('script', { src: '/public/libs/angularjs/1.2.28/js/angular.min.js' }, sync);
        addTag('script', { src: '/public/libs/angularjs/ui-router/0.2.15/angular-ui-router.min.js' }, sync);
        addTag('script', { src: '/public/libs/angularjs/ui/0.12.0/js/ui-bootstrap-tpls.min.js' }, sync);

        addTag('script', { src: '/public/libs/angular-datepicker/scripts/datePicker.js' }, sync);
        addTag('script', { src: '/public/libs/angular-datepicker/scripts/datePickerUtils.js' }, sync);
        addTag('script', { src: '/public/libs/angular-datepicker/scripts/dateRange.js' }, sync);
        addTag('script', { src: '/public/libs/angular-datepicker/scripts/input.js' }, sync);

        addTag('script', { src: '/Scripts/app.js' }, sync);
        addTag('script', { src: '/Scripts/services/ApiService.js' }, sync);
        addTag('script', { src: '/Scripts/services/CommService.js' }, sync);
        addTag('script', { src: '/Scripts/services/CustomerService.js' }, sync);
        addTag('script', { src: '/Scripts/services/CustomerTrackService.js' }, sync);
        addTag('script', { src: '/Scripts/services/UserService.js' }, sync);


        addTag('script', { src: '/Templates/users/register/RegisterController.js' }, sync);
        addTag('script', { src: '/Templates/users/signin/SignInController.js' }, sync);

        addTag('script', { src: '/Templates/customer/create/customer.createController.js' }, sync);
        addTag('script', { src: '/Templates/customer/edit/customer.editController.js' }, sync);
        addTag('script', { src: '/Templates/customer/list/customer.listController.js' }, sync);
        addTag('script', { src: '/Templates/customer/Main/customerController.js' }, sync);


        addTag('script', { src: '/Templates/track/product/create/customer.product.saveController.js' }, sync);
        addTag('script', { src: '/Templates/track/product/list/customer.product.listController.js' }, sync);

        addTag('script', { src: '/Templates/track/task/main/customer.trackController.js' }, sync);
        addTag('script', { src: '/Templates/track/task/create/customer.track.task.createController.js' }, sync);
        addTag('script', { src: '/Templates/track/task/edit/customer.track.task.editController.js' }, sync);
        addTag('script', { src: '/Templates/track/task/list/customer.track.task.listController.js' }, sync);


        addTag('script', { src: '/Scripts/directive/doFinished.js' }, sync);
        addTag('script', { src: '/Scripts/directive/loadingPanel.js' }, sync);
        addTag('script', { src: '/Scripts/routing.js.js' }, sync);
    }else{
    	addTag('script', {src: '/web/all.min.js' }, sync);
    }
    
    
//    addTag('script', {src: '//connect.facebook.net/en_US/sdk.js' }, sync);
//    addTag('script', {src: 'bower_components/angular-facebook-utils/src/facebookUtils.min.js' }, sync);
//    addTag('script', {src: '//connect.facebook.net/en_US/all.js' }, sync);
//    addTag('script', {src: '/web/scripts/facebook/app.js' }, sync);
//    addTag('script', {src: '/web/scripts/facebook/facebookUtils.min.js' }, sync);
    
    function addTag(name, attributes, sync) {
        var el = document.createElement(name),
            attrName;
        for (attrName in attributes) {
            el.setAttribute(attrName, attributes[attrName]);
        }
        sync ? document.write(outerHTML(el)) : headEl.appendChild(el);
    }

    function outerHTML(node){
        // if IE, Chrome take the internal method otherwise build one
        return node.outerHTML || (
            function(n){
                var div = document.createElement('div'), h;
                div.appendChild(n);
                h = div.innerHTML;
                div = null;
                return h;
            })(node);
    }    
})();
