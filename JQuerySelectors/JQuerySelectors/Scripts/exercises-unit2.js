// SELECTING NODES BY NAME **************************
function Exercise1() {
    // Counts page images
    var imgs = $('img');
    alert("Exercise 1: number of images on page = " + imgs.length);
}

function Exercise2() {
    // Counts page divs
    var divs = $('div');
    alert("Exercise 2: number of div's on page = " + divs.length);
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
    alert("Exercise 5: count by Multiple elements = " + coll.length);
}

// SELECTING NODES BY ID **************************

function Exercise6() {
    // Selects div by id and shows the html of the particular item
    alert($('#TestDivExercise6').html());
}

function Exercise7() {
    // Selects form by id and shows its html
    alert($('#formExercise7').html());
}

// SELECTING NODES BY CLASS NAME **************************

function Exercise8() {
    // Changes all the BlueDiv style
    $('.BlueDiv').css('border', '2px solid orange');
}

function Exercise9() {
    // Changes only divs with BlueDiv class
    $('div.BlueDiv').css('border', '4px solid yellow');
}

function Exercise10() {
    // Changes only spans with BlueDiv class
    $('span.BlueDiv').css('border', '4px solid green');
}

function Exercise11() {
    // Changes multiple class names
    $('.BlueDiv, .RedDiv').css('border', '4px solid #CC00FF');
}

function Exercise12() {
    // Changes multiple class names, only focusing on divs
    $('div.BlueDiv, div.RedDiv').css('border', '5px solid black');
}

// SELECTING NODES BY ATTRIBUTE VALUE **************************
function Exercise13() {
    // Counts all divs that have a title attribute 
    alert("Exercise 13: divs that have a title attribute (eg. TestDivExercise6) = " + $('div[title]').length);
}

function Exercise14() {
    // Counts all divs that have a "Div Title" title attribute value 
    alert('Exercise 14: divs that have "Div Title" title (eg. DivExercise14) = ' + $('div[title="Div Title"]').length);
}

function Exercise15() {
    // Counts all divs that have a "div title" title attribute value, showing that 
    // selecting node by attribute value is case-sensitive 
    alert('Exercise 15: divs that have "Div title" title = ' + $('div[title="div title"]').length);
}

function Exercise16() {
    // Finds any input tag where type is "text"
    alert('Exercise 16: inputs that have "text" type (eg. FirstNameTextBox7) = ' + $('input[type="text"]').length);
}

function Exercise17() {
    // Changes style of any input tag where type is "text"
    var inputs = $('input[type="text"]');
    inputs.css('background-color', 'yellow');
}

// SELECTING INPUT NODES **************************

function Exercise18() {
    // Prints the value of the first input, using jQuery wrapper 
    var inputs = $(':input');
    alert($(inputs[0]).val());
}

function Exercise19() {
    // Prints all input values
    $(':input').each(function(){
        var elem = $(this); //This is wrapped in a jQuery Wrapper
        alert(elem.val());
    });
}

function Exercise20() {
    // Changes all input values
    $(':input').each(function () {
        var elem = $(this); //This is wrapped in a jQuery Wrapper
        elem.val('Foo');
    });
}

function Exercise21() {
    // Prints all input values, only within forms (selecting input nodes, also by tag name)
    $('form :input').each(function(){
            var elem = $(this); //This is wrapped in a jQuery Wrapper
            alert(elem.val());
    });
}

function Exercise22() {
    // Prints all input values, only within formExercise22 (selecting input nodes, also by id)
    $('#formExercise22 :input').each(function () {
            var elem = $(this); //This is wrapped in a jQuery Wrapper
            alert(elem.val());
    });
}

// USING ADDITIONAL FEATURES **************************

function Exercise23() {
    // Finds any div that contain the word "my div"
    alert('Exercise 23: divs containing the word "my div" (eg. TestDivExercise6) = ' + $('div:contains("my div")').html());
}

function Exercise24() {
    // Changes the style of tr odd elements
    $('tr:odd').css('background-color', 'green');
}

function Exercise25() {
    // Changes the style of tr even elements
    $('tr:even').css('background-color', 'pink');
}

function Exercise26() {
    // Changes the style of first-child tr elements
    $('tr:first-child').css('background-color', 'orange');
}

function Exercise27() {
    // Changes the style of tr odd elements, only in DataTable table (by id)
    $('#DataTableExercise27 tr:even').css('background-color', '#33FF00');
}

function Exercise28() {
    // Changes the style of any div where title attribute ends with "sdfs"
    $('div[title$="sdfs"]').css('background-color', '#660000');
}

function Exercise29() {
    // Changes the style of any div where title attribute starts with "Div"
    $('div[title^="Div"]').css('background-color', '#66CCFF');
}

function Exercise30() {
    // Changes the style of any div where title attribute contains "title"
    $('div[title*="Title"]').css('background-color', '#0033FF');
}

function Exercise31() {
    // Updates any div where title attribute contains "title"
    $('div[title*="title"]').html('Updated Div value due to "title"');
}

function ReloadPage() {
    location.reload();
}