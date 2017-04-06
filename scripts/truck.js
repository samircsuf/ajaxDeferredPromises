(function(window) {
    'use strict';
    var App = window.App || {};
    //each instance will have unique identifier and its own datastore
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }
/*
    function printConsole(str){
      console.log(str);
      return result;
    }*/
    //creates order and can be accessed by external modules
    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        return this.db.add(order.emailAddress, order); //truck module doesnt need to know about 'add' method', exposed by datastore.js
        //return createOrder;
    };
    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        return this.db.remove(customerId); //calls 'remove' prototype from datastore.js to remove order after delivering it
    };
    Truck.prototype.printOrders = function(printFn) {
        return this.db.getAll()
        .then(function (orders) {
        var customerIdArray = Object.keys(orders);//calls getAll method from datastore.js & stores into an array
        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function(id) {//iterates through the array and passes each key to get method in datastore.js
            console.log(orders[id]);//
        }.bind(this));
      }.bind(this));
        //console.log(printOrders);

        //return customerIdArray;
    };

    App.Truck = Truck;
    window.App = App;
})(window);
// Adding the return on create and deliver order makes Truck to return the Deferreds that RemoteDataStore produces
