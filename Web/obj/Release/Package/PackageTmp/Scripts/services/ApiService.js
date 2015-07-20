/*
* Api统一调用入口
* create by daniel.zuo on 2015.4.19
*/
KBLApp.factory('ApiService', ["$location", "$q","$window", "$http", "CommService", function ($location, $q,$window, $http, CommService) {

    var service = {};

    //定义Api请求地址对象
    var restApiUrl = {

        //登录
        login: "/api/customer/login",

        // 注册
        register: "/api/customer/register",

        // 获取列表
        getCustomers: "/api/customer/gets",

        // 获取客户信息
        getCustomer: "/api/customer/get",

        // 任务新建
        createTask: "api/customer/{cid}/task/create",

        // 任务更新
        saveTask: "api/customer/{cid}/task/save",

        // 获取任务
        getTask: "api/customer/{cid}/task/{taskId}/get",

        // 任务列表
        getTaskList: "api/customer/{cid}/task/list",

        // 新建客户减肥计划
        createSchedule: "api/customer/{cid}/schedule/create",

        // 获取客户减肥计划
        getSchedule: "api/customer/{cid}/schedule/get",

        // 获取客户减肥计划列表
        getScheduleList: "api/customer/{cid}/schedule/list"
    };

    //调用Get方法
    service.get = function (apiKey, apiParams, success, error) {
        $http.get(makeApiUrl(apiKey, apiParams)).success(function (response, status) {
            //成功直接回调成功函数
            if (response.statusCode == 200) {
                if (success instanceof  Function) {
                    success(response);
                }
            } else {
                //统一错误处理
                if(response.statusCode==500||response.statusCode==404||response.statusCode==403){
                    //TODO:修改成统一的弹出提示信息
                    alert(response.message)
                }

                if (error instanceof  Function) {
                    error(response);
                }
            }
        }).error(function (response, status) {
            //调用API时出错,统一到错误页面
            $location.path('/error');
        });
    };

    // get 延迟
    service.get = function (apiKey, apiParams) {
        var deferred = $q.defer();
        $http.get(makeApiUrl(apiKey, apiParams)).success(function (response, status) {
            //成功直接回调成功函数
            if (response.statusCode == 200) {
                deferred.resolve(response);
            } else {
                //统一错误处理
                if (response.statusCode == 500 || response.statusCode == 404 || response.statusCode == 403) {
                    //TODO:修改成统一的弹出提示信息
                    deferred.resolve(response);
                }
            }
        }).error(function (response, status) {
            //调用API时出错,统一到错误页面
            //$location.path('/error');

            deferred.reject(response);
        });
        return deferred.promise;
    };

    //调用Post方法
    service.post = function (apiKey, apiParams, data, success, error) {
        $http.post(makeApiUrl(apiKey, apiParams), data).success(function (response, status) {
            //成功直接回调成功函数
            if (response.statusCode == 200) {
                if (success instanceof Function) {
                    success(response);
                }
            } else {

                //统一错误处理
                if(response.statusCode==500||response.statusCode==404||response.statusCode==403){
                    //TODO:修改成统一的弹出提示信息
                    alert(response.message)
                }
                
                if (error instanceof  Function) {
                    error(response);                    
                }
            }
        }).error(function (response, status) {
            //调用API时出错,统一到错误页面
            $location.path('/error');
        });
    };
    
    // post延迟
    service.post = function (apiKey, apiParams, data) {
        var deferred = $q.defer();
        $http.post(makeApiUrl(apiKey, apiParams), data).success(function (response, status) {
            //成功直接回调成功函数            
            if (response.statusCode == 200) {
                deferred.resolve(response);
            } else {

                //统一错误处理
                if (response.statusCode == 500 || response.statusCode == 404 || response.statusCode == 403) {
                    //TODO:修改成统一的弹出提示信息
                    alert(response.message)
                }
            }
        }).error(function (response, status) {
            //调用API时出错,统一到错误页面
            //$location.path('/error');
            deferred.reject(response);
        });
        return deferred.promise;
    };

    // post延迟
    service.post = function (apiKey, apiParams, data) {
        var deferred = $q.defer();
        $http.post(makeApiUrl(apiKey, apiParams), data).success(function (response, status) {
            //成功直接回调成功函数            
            if (response.statusCode == 200) {
                deferred.resolve(response);
            } else {

                //统一错误处理
                if (response.statusCode == 500 || response.statusCode == 404 || response.statusCode == 403) {
                    //TODO:修改成统一的弹出提示信息
                    alert(response.message)
                }
                deferred.resolve(response);
            }
        }).error(function (response, status) {
            //调用API时出错,统一到错误页面
            //$location.path('/error');
            deferred.reject(response);
        });
        return deferred.promise;
    };

    //调用Put方法
    service.put = function (apiKey, apiParams, data, success, error) {
        $http.put(makeApiUrl(apiKey, apiParams), data).success(function (response, status) {
            //成功直接回调成功函数
            if (response.statusCode == 200) {
                if (success instanceof  Function) {
                    success(response);
                }
            } else {

                //统一错误处理
                if(response.statusCode==500||response.statusCode==404||response.statusCode==403){
                    //TODO:修改成统一的弹出提示信息
                    alert(response.message)
                }
                
                if (error instanceof  Function) {
                    error(response);
                }
            }
        }).error(function (response, status) {
            //调用API时出错,统一到错误页面
            $location.path('/error');
        });
    };
    
    //调用删除方法
    service.remove = function (apiKey, apiParams, data, success, error) {
    	$http({url: makeApiUrl(apiKey, apiParams), method: 'DELETE'}, data).then(function(response, status) {
    		//成功直接回调成功函数
            if (response.data.statusCode == 200) {
                if (success instanceof  Function) {
                    success(response.data);
                }
            } else {
                //统一错误处理
                if(response.data.statusCode==500||response.data.statusCode==404||response.data.statusCode==403){
                    //TODO:修改成统一的弹出提示信息
                    alert(response.data.message)
                }

                if (error instanceof  Function) {
                    error(response.data);
                }
            }
        }, function(response, status) {
        	//调用API时出错,统一到错误页面
            $location.path('/error');
        });
    };

    //处理ApiUrl
    var makeApiUrl = function (apiUrl, apiParams) {
        var url = apiUrl;
        //替换ApiUrl中的参数
        for (var i in apiParams) {
            url = url.replace("{" + i + "}", apiParams[i]);
        }

        return url;
    };

    //获取ApiUrl
    service.getApiUrl = function () {
        return restApiUrl;
    };

    return service;
}]);