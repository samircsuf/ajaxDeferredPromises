(function(window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    function DataStore() {
        //console.log('running the DataStore function');
        this.data = {};
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function(resolve) {
            resolve(value);
        });
        return promise;
    }
    //stores or adds data to datastore that can be used by anybody who has access
    DataStore.prototype.add = function() {
        //this.data[key] = val;
        //var promise = new Promise(function(resolve, reject) {
        //this.data[key] = val;
        //resolve(null);
        //}.bind(this));
        //return promise;

        return promiseResolvedWith(null);
    };
    //gets value for a given key and can be used by anybody who has access
    DataStore.prototype.get = function(key) {
        //return this.data[key];
        return promiseResolvedWith(this.data[key]);
    };
    //gets all of stored data and can be used by anybody who has access
    DataStore.prototype.getAll = function() {
        //return this.data;
        return promiseResolvedWith(this.data);
    };
    //deletes data for a given key and used by anybody who has access
    DataStore.prototype.remove = function(key) {
        delete this.data[key];
        return promiseResolvedWith(null);
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
