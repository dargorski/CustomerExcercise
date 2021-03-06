﻿var ViewModel = function () {
    var self = this;
    self.customers = ko.observableArray(); //hold the list of customers
    self.error = ko.observable(); //contains an error message if an AJAX call fails
    self.detail = ko.observable();
    self.newCustomer = {
        Name: ko.observable(),
        Surname: ko.observable(),
        Number: ko.observable(),
        Address: ko.observable()
    }
    self.newDataForCustomer = {
        Id: ko.observable(),
        Name: ko.observable(),
        Surname: ko.observable(),
        Number: ko.observable(),
        Address: ko.observable()
    }

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
    
    self.addCustomer = function (formElement) {
        var customer = {
            Name: self.newCustomer.Name(),
            Surname: self.newCustomer.Surname(),
            Number: self.newCustomer.Number(),
            Address: self.newCustomer.Address()
        };

        ajaxHelper(customersUri, 'POST', customer).done(function (item) {
            self.customers.push(item);
        });
    }
    self.deleteCustomer = function (item) {
        ajaxHelper(customersUri + item.Id, 'DELETE').done();
        console.log(item.Id);
        getAllCustomers();
    }


    self.getCustomerDetail = function (item) {
        ajaxHelper(customersUri + item.Id, 'GET').done(function (data) {
            self.detail(data)
        });
    }
    //call to get the list of customers, than push result into the customers array
    function getAllCustomers() {
        ajaxHelper(customersUri, 'GET').done(function (data) {
            self.customers(data);
        });
    }

    getAllCustomers();

    self.updateCustomer = function (formElement, id) {
        var customer = {
            Id: self.newDataForCustomer.Id(),
            Name: self.newDataForCustomer.Name(),
            Surname: self.newDataForCustomer.Surname(),
            Number: self.newDataForCustomer.Number(),
            Address: self.newDataForCustomer.Address()
        };
        ajaxHelper(customersUri + customer.Id, 'PUT', customer).done(function (item) {
            console.log(customer.Name);
            self.customers.push(item);
        });
    }
}


ko.applyBindings(new ViewModel()); //takes the view model as a parameter and sets up the data binding