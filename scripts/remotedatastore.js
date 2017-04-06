(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }
    //add orders
    RemoteDataStore.prototype.add = function(key, val) {
        //changes to use local json db
        val['id'] = val['emailAddress'];
        //pass it a callback fn /anonymous fn as a third argument that expects a response in "serverResponse"
        return $.post(this.serverUrl, val, function(serverResponse) {
            console.log(serverResponse);
        });
    };
    //get all orders Usage: remoteDS.getAll(function (data) { console.log(data); });
    RemoteDataStore.prototype.getAll = function(cb) {
        return $.get(this.serverUrl, function(serverResponse) {
            if (cb) {
                console.log(serverResponse);
                //get response is passed to cb method
                cb(serverResponse);
            }
        });
    };
    //get single order
    RemoteDataStore.prototype.get = function(key, cb) {
        return $.get(this.serverUrl + '/' + key, function(serverResponse) {
            if (cb) {
                console.log(serverResponse);
                cb(serverResponse);
            }
        });
    };
    //delete a record
    RemoteDataStore.prototype.remove = function(key) {
        return $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };

    //validate
    //RemoteDataStore.prototype.validate = function(key) {
        //remoteDS.get('a@b.com', function () {});
    //};
    //export the RemoteDataStore to the App namespace
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
