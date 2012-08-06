// SELECTING NODES BY NAME **************************
function Exercise1() {
    // Counts page images
    var imgs = $('img');
    alert("Exercise 1: number of images on page =" + imgs.length);
}

function Exercise2() {
    // Counts page divs
    var divs = $('div');
    alert("Exercise 2: number of div's on page =" + divs.length);
}

function Exercise3() {
    // Changes divs style
    $('div').css('background-color', 'Green');
}

function Exercise4() {
    // Shows the html inside of the div's
    $('div').each(function () {
        alert($(this).html());
    });
}

function Exercise5() {
    // Counts Multiple elements
    var coll = $('div,span')
    alert("Exercise 5: count by Multiple elements =" + coll.length);
}

function WireEvents() {
    


    //            // SELECTING NODES BY ID **************************

    //            // Selects div by id and shows the html of the particular item
    //                        alert("Exercise 6: Selects div by id and shows the html of the particular item");
    //                        alert($('#TestDiv').html());

    //            // Selects form by id and shows its html
    //                        alert("Exercise 7: Selects form by id and shows its html");
    //                        alert($('#form1').html());


    //            // SELECTING NODES BY CLASS NAME **************************
    //            // Changes all the BlueDiv style
    //                        alert("Exercise 8: Changes all the BlueDiv style");
    //                        $('.BlueDiv').css('border', '2px solid red');

    //            // Changes only divs with BlueDiv class
    //                        alert("Exercise 9: Changes only divs with BlueDiv class");
    //                        $('div.BlueDiv').css('border', '2px solid red');

    //            // Changes only spans with BlueDiv class
    //                        alert("Exercise 10: Changes only spans with BlueDiv class");
    //                        $('span.BlueDiv').css('border', '2px solid red');

    //            // Changes multiple class names
    //                        alert("Exercise 11: Changes multiple class names");
    //                        $('.BlueDiv, .RedDiv').css('border', '2px solid green');

    //            // Changes multiple class names, only focusing on divs
    //                        alert("Exercise 12: Changes multiple class names, only focusing on divs");
    //                        $('div.BlueDiv, div.RedDiv').css('border', '2px solid green');


    //            // SELECTING NODES BY ATTRIBUTE VALUE **************************
    //            // Counts all divs that have a title attribute 
    //                        alert("Exercise 13: Counts all divs that have a title attribute");
    //                        alert($('div[title]').length);

    //            // Counts all divs that have a "Div title" title attribute value 
    //                        alert('Exercise 14: Counts all divs that have a "Div title" title attribute value');
    //                        alert($('div[title="Div title"]').length);

    // Counts all divs that have a "div title" title attribute value, showing that 
    // selecting node by attribute value is case-sensitive 
    //            alert($('div[title="div title"]').length);

    // Finds any input tag where type is "text"
    //            alert($('input[type="text"]').length);

    // Changes style of any input tag where type is "text"
    //            var inputs = $('input[type="text"]');
    //            inputs.css('background-color', 'yellow');


    // SELECTING INPUT NODES **************************
    // Prints the value of the first input, using jQuery wrapper 
    //            var inputs = $(':input');
    //            alert($(inputs[0]).val());

    // Prints all input values
    //            $(':input').each(function(){
    //                var elem = $(this); //This is wrapped in a jQuery Wrapper
    //                alert(elem.val());
    //            });

    // Changes all input values
    //            $(':input').each(function () {
    //                var elem = $(this); //This is wrapped in a jQuery Wrapper
    //                elem.val('Foo');
    //            });

    // Prints all input values, only within forms (selecting input nodes, also by tag name)
    //            $('form :input').each(function(){
    //                 var elem = $(this); //This is wrapped in a jQuery Wrapper
    //                 alert(elem.val());
    //            });

    // Prints all input values, only within form1 (selecting input nodes, also by id)
    //            $('#form1 :input').each(function () {
    //                  var elem = $(this); //This is wrapped in a jQuery Wrapper
    //                  alert(elem.val());
    //            });

    // USING ADDITIONAL FEATURES **************************
    // Finds any div that contain the word "my div"
    //                        alert($('div:contains("my div")').html());

    // Changes the style of tr odd elements
    //            $('tr:odd').css('background-color', 'green');

    // Changes the style of first-child tr elements
    //            $('tr:even').css('background-color', 'green');

    // Changes the style of tr even elements
    //            $('tr:first-child').css('background-color', 'green');

    // Changes the style of tr odd elements, only in DataTable table (by id)
    //            $('#DataTable tr:odd').css('background-color', 'green');

    // Changes the style of any div where title attribute ends with "sdfs"
    //            $('div[title$="sdfs"]').css('background-color', 'green');

    // Changes the style of any div where title attribute starts with "Div"
    //            $('div[title^="Div"]').css('background-color', 'green');

    // Changes the style of any div where title attribute contains "title"
    //            $('div[title*="title"]').css('background-color', 'green');

    // Updates any div where title attribute contains "title"
    //            $('div[title*="title"]').html('Updated Div value due to Title');

}