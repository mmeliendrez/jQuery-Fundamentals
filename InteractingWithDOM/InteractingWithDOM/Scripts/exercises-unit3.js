//alert("Exercise 1: number of images on page = " + imgs.length);

// USING .each **************************
function Exercise1() {
    // Updates OutputDiv text inside BlueDiv and RedDiv
    var outputDiv = $('#OutputDivExercise1');
    $('div.BlueDiv, div.RedDiv').each(function (index) {
        outputDiv.html(outputDiv.html() + "<br />" + index + $(this).text());
    });
}

function Exercise2() {
    // Updates OutputDiv text inside BlueDiv and RedDiv, in a more optimal way
    var html = [];
    $('div.BlueDiv, div.RedDiv').each(function (index) {
        html.push("<br />" + index + $(this).text());
    });
    var outputDiv = $('#OutputDivExercise2');
    outputDiv.html(html.join(''))
}

// MODIFYING PROPERTIES AND ATTRIBUTES **************************

function Exercise3() {
    // Changes the title of BlueDiv and RedDiv
    $('div.BlueDiv, div.RedDiv').each(function (index) {
        // raw DOM object
        this.title = "Title changed on Exercise 3";
    });
}

function Exercise4() {
    // Changes the title of BlueDiv and RedDiv with .attr()
    $('div.BlueDiv, div.RedDiv').each(function (index) {
        $(this).attr('title', 'Title changed on Exercise 4');
    });
}

function Exercise5() {
    // Updates the style the divs, using css property
    $('div.BlueDiv, div.RedDiv').css('font-size', '20pt');
}

function Exercise6() {
    // Updates several properties, using .attr() and JSON object
    $('div.BlueDiv, div.RedDiv').attr(
        {
            title: 'Title changed on Exercise 6',
            style: 'font-size: 14pt; background-color: green'
        }
    );
}

function Exercise7() {
    // Updates several properties, chaining
    $('div.BlueDiv, div.RedDiv')
        .attr(
            {
                title: 'Title changed on Exercise 7',
            }
        )
        .css('font-size', '20pt')
        .css('background-color', 'yellow');
}

// MODIFYING THE DOM **************************

function Exercise8() {
    // Inserts new nodes in DataTable with .append(), .appendTo(), .prepend() and .prependTo()
    var tcd = $('#TableConatinerDivExercise8');

    tcd.append('<span style="background-color:green">Appended child 1</span>');
    tcd.prepend('<br /><span style="background-color:green">Prepended child 1</span>');

    $('<br /><span style="background-color:purple">Appended child 2</span>').appendTo(tcd);
    $('<span style="background-color:purple">Prepended child 2</span>').prependTo(tcd);
}


function ReloadPage() {
    location.reload();
}

function Exercise9() {
    // Wraps span elements with "Foo" class within a div
    $('span.Foo').wrap('<div class="RedDiv ParentWrapper" />');
}

function Exercise10() {
    // Removes elements with "ParentWrapper" class
    $('span.Foo').wrap('<div class="RedDiv ParentWrapper" />');
    $('.ParentWrapper').remove();
}

function Exercise11() {
    // Modifies style using .css() property an by passing a JSON object (modifying multiple styles)
    $('div.BlueDiv, div.RedDiv')
                    .css({
                        'font-size': '20pt',
                        'color': 'blue',
                        'background-color': 'orange'
                    });
}

// MODIFYING CLASSES **************************

function Exercise12() {
    // Adds a CSS class
    $('input[type="text"]').addClass('Highlight');
}

function Exercise13() {
    // Removes the added CSS class
    $('input[type="text"]').addClass('Highlight');
    $('#InputTextExercise13').removeClass('Highlight');
}
