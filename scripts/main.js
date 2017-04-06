(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    //var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var SERVER_URL = 'http://localhost:3002/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    //var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;

    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var myTruck = new Truck('ncc-1701', remoteDS);
    //get the email value from form and validate by calling .get
    //    remoteDS.get($('#emailInput').val(), function (data) {

    //    });

    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    //Deferred has two options : resolve and reject that are handled within two fns as below
    formHandler.addSubmitHandler(function(data) {
        return myTruck.createOrder.call(myTruck, data)
            .then(function() {
                checkList.addRow.call(checkList, data);
            },
                function() {
                    alert('Server unreachable. Try again later.');
                }
            );
    });
    //formHandler.addEmailHandler(Validation.emailExist);
    formHandler.addInputHandler(Validation.isCompanyEmail);
    formHandler.addInput(Validation.isDecaf);

    myTruck.printOrders(checkList.addRow.bind(checkList));
    //formHandler.addIn(Validation2.isDecaf);

})(window);
