var fileReader = new FileReader();
console.log('upload-http.js');
fileReader.onload = function (e) {
    $timeout(function () {
        file.upload = $upload.http({
            url: '/api/upload/start' + $scope.getReqParams(),
            method: 'POST',
            //headers : {
            //	'Content-Type': file.type
            //},
            data: e.target.result
        });

        file.upload.then(function (response) {
            file.result = response.data;
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        });

        file.upload.progress(function (evt) {
            file.status = '上载 Loading.';
            var progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            file.progress = progress;
        });
        file.upload.success(function (data, status, headers, config) {
            // file is uploaded successfully
            //console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + JSON.stringify(data));
            file.status = '成功 Successfully.';
            file.result = data;
        });
        file.upload.error(function (data, status, headers, config) {
            file.status = '出现错误.' + data;
            file.result = data;
        });
        file.upload.xhr(function (xhr) {
            xhr.upload.addEventListener('abort', function () { file.status ='终止 Abort.'; }, false);
        });
    }, 2000);
}
fileReader.readAsArrayBuffer(file);
