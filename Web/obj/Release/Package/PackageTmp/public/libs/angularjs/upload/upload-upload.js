var data = $scope.formUpload ? {
    username: $scope.username
} : {};
file.data = {};
file.status = '等待上传';
file.css = 'warning';
file.success = false;
file.progressStyle = {};
file.upload = $upload.upload({
    url: BASE_URL + 'api/upload/start' + $scope.getReqParams(),
    method: 'POST',
    //headers: {
    //	'my-header' : 'my-header-value'
    //},
    data: data,
    file: file,
    fileFormDataName: 'myFile',
});

file.upload.then(function (response) {
    $timeout(function () {
        file.result = response.data;
    });
}, function (response) {
    if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
});

file.upload.progress(function (evt) {
    var progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    file.progressStyle = { 'width': +progress + '%' };
    file.status = progress < 100 ? '正在上传（' + progress + ' %)' : '正在保存数据';
    file.progress = progress;
    //console.log(Math.min(100, parseInt(100.0 * evt.loaded / evt.total)));
});

file.upload.error(function (data, status, headers, config) {
    file.data = data;
    file.status = '出现错误.';
    file.result = data;
});

file.upload.load = function(evt){
    //console.log('load', evt);
}

file.upload.success(function (data, status, headers, config) {
    // file is uploaded successfully
    //console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + JSON.stringify(data));
    file.data = data;
    file.success = true;
    file.css = 'success';
    file.status = '上传成功.';
    file.result = data;
    file.md5string = data.md5string;
});

file.upload.xhr(function (xhr) {
    xhr.upload.addEventListener('abort', function () { file.status = '上载已终止 Abort！'; }, false);
});