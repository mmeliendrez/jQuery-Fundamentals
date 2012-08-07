function WireEvents() {

    /////////////// Using load() ///////////////
    
    //Exercise 1: Load HTML from HelpDetails.html (load all the HTML)
    $('#ButtonExercise1').click(function () {
        $('#OutputDivExercise1').load('../HelpDetails.html');
    });

    //Exercise 2: Load just a part of HTML from HelpDetails.html (using load() with a Selector)
    $('#ButtonExercise2').click(function () {
        $('#OutputDivExercise2').load('../HelpDetails.html #SubTOC');
    });

    /////////////// Using load() with a Callback ///////////////

    //Exercise 3: Show message if page is not found
    $('#ButtonExercise3').click(function () {
        $('#OutputDivExercise3').load('NotFound.html',
            function (response, status, xhr) {
                if (status == "error") {
                    alert('Error ' + xhr.statusText)
                }
            });
        });

    /////////////// Using load() with Data ///////////////

    //Exercise 4: Show a list of customers
    $('#ButtonExercise4').click(function () {
        $('#OutputDivExercise4').load('../GetCustomers.aspx',
                            { PageSize: 10 });
    });


    /////////////// Using get() ///////////////

    //Exercise 5: Load HTML from HelpDetails.html 
    $('#ButtonExercise5').click(function () {
        $.get('../HelpDetails.html', function (data) {
            $('#OutputDivExercise5').html(data);
        });
    });

    //Exercise 6: send ID and get an specific Customer, using get() and JSON
    $('#ButtonExercise6').click(function () {
        $.get('../CustomerJson.aspx', { id: 5 }, function (data) {
            alert(data.FirstName + ' ' + data.LastName + ' - Id: ' + data.Id);

        }, 'json');
    });

    /////////////// Using getJSON() ///////////////

    //Exercise 7: send ID and get an specific Customer, using getJSON()
    $('#ButtonExercise7').click(function () {
        $.getJSON('../CustomerJson.aspx', { id: 5 }, 
            function (data) {
                alert(data.FirstName + ' ' + data.LastName + ' - Id: ' + data.Id);
            });
    });

    /////////////// Using post() ///////////////

    //Exercise 8: uses post() to get customer
    $('#ButtonExercise8').click(function () {
        $.post('../GetCustomers.aspx', { PageSize: 10 }, 
            function (data) {
                $('#OutputDivExercise8').html(data);
            });
    });

    //Exercise 9: uses post() to call a service
    $('#ButtonExercise9').click(function () {
        $.post('../CustomerService.svc/GetCustomers', null,
            function (data) {
                var cust = data.d[0]; // Because it is a WCF Service, it allow to wrap in a JSON object the first customer
                $('#OutputDivExercise9').html(cust.FirstName);
            }, 'json');
    });

    /////////////// Using ajax() ///////////////

    //Exercise 10: uses ajax()
    $('#ButtonExercise10').click(function () {
        // Creates a JSON object and converts it into string, and passes it up to the server
        var customer = 'cust=' +
        JSON.stringify(                           // Converts javascipt JSON object into string using json2.js
        {
        FirstName: $('#FirstNameTB').val(),
        LastName: $('#LastNameTB').val()
    });

    $.ajax({
        url: '../CustomerService.svc/InsertCustomer',
        data: customer,
        datatype: 'json',
        success: function (data, status, xhr) {
            $('#OutputDivExercise10').html('Insert status: ' +
                                data.d.Status + ' <br />' +
                                data.d.Message);
        },
        error: function (xhr, status, error) {
            alert('Error ocurred: ' + status);
        }
    });
});
}

