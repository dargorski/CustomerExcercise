var ViewModel = function () {
    var self = this;
    self.customers = ko.observableArray(); //hold the list of customers
    self.error = ko.observable(); //contains an error message if an AJAX call fails

    var customersUri = '/api/customers/';

    function ajaxHelper(uri, method, data) {
        self.error('');
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });

    }

    //call to get the list of customers, than push result into the customers array
    function getAllCustomers() {
        ajaxHelper(customersUri, 'GET').done(function (data) {
            self.customers(data);
        });
    }

    getAllCustomers();
}

ko.applyBindings(new ViewModel()); //takes the view model as a parameter and sets up the data binding