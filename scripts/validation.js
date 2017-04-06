(function(window) {
    'use strict';
    var $ = window.jQuery;
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function(text, range) {
            //console.log(textinput === 'decaf');
            if (/decaf/.test(text) && range >= 20) {
                return false;
            } else {
                return true;
            }
        },
        emailExist: function(email) {
            //$.getJSON
            //http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders");
            var output = $.ajax({
                url: 'http://localhost:3002/coffeeorders' + '/' + email,
                success: function(output) {
                    console.log(output);
                }
            });

            console.log(output);
            if (output.responseText === null) {
                return false;
            } else {
                return true;
            }
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);
