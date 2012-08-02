function WireEvents() {

            /////////////// Handle Click
            //Exercise 1:
            $('#SubmitButton3').click(function () {
                alert("Exercise 1: Clicked button - the jQuery way!!");
            });

            //Exercise 2:
            $('#SubmitButton4').click(function () {
                var firstName = $('#FirstNameTextBox1').val();
                var lastName = $('#LastNameTextBox1').val();
                $('#DivOutput').text(firstName + ' ' + lastName);
            });

            /////////////// Handle Mouse
            //Exercise 3:
            $('#Div1').mouseenter(function () {
                Toggle(this);
                $(this).css('cursor', 'pointer');
            })
            .mouseleave(function () {
                Toggle($(this));
            });

            //Exercise 4:
            $('#Div2').mousemove(function (e) {
                $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
            })
            .mouseup(function (e) {
                alert("Exercise 4: Element Id = " + $(e.target).attr('id'));
            });

            //Exercise 5: Handle Select
            $('#Select1').change(function () {
                alert("Exercise 5: Selected value = " + $(this).val());
            });

            //Exercise 6: Handle Multiple elements by class name
            $('.MultipleElements').change(function () {
                alert("Exercise 6: Selected value = " + $(this).val());
                $(this).addClass('Highlight');
            });

            /////////////// Using bind() and unbind()
            //Exercise 7:
            $('#Div3').bind('mouseenter mouseleave', function (e) {
                Toggle(this);
                $(this).css('cursor', 'pointer');
            });

            //Exercise 8:
            $('#Div4').bind('mouseenter mouseleave mouseup', function (e) {
                Toggle(this);
                $(this).css('cursor', 'pointer');
                if (e.type == 'mouseup')
                    $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
            });

            //Exercise 9:
            $('#SubmitButton5').click(function () {
                $('#Div5').unbind('mouseup');
            });

            $('#Div5').bind('mouseenter mouseleave mouseup', function (e) {
                Toggle(this);
                $(this).css('cursor', 'pointer');
                if (e.type == 'mouseup')
                    $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
            });

            //Exercise 10:
            $('#SubmitButton6').click(function () {
                $('#Div6').unbind();
            });

            $('#Div6').bind('mouseenter mouseleave mouseup', function (e) {
                Toggle(this);
                $(this).css('cursor', 'pointer');
                if (e.type == 'mouseup')
                    $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
            });

            //Exercise 11:
            var phonesDiv = $('#PhonesDiv');
                
            $('#AddPhone').click(function () {
                // Copy the structure of phones in a compact way
                var phoneSelectDiv = $('div:eq(0)', phonesDiv).clone();   //Go find a div that is the first one in the collection, relative to phonesDiv (the starting point), and copy it 
                var phoneTextBoxDiv = $('div:eq(1)', phonesDiv).clone();  //Go find a div that is the second one in the collection, relative to phonesDiv (the starting point), and copy it 

                $('select', phoneSelectDiv).val('');    //Clear select clone 
                $('input', phoneTextBoxDiv).val('');    //Clear input clone 

                // Add the clone to the button of the phonesDiv
                phonesDiv.append('<div style="clear:both"; />')
                         .append(phoneSelectDiv)
                         .append(phoneTextBoxDiv);

            });

            $('input', phonesDiv).live('keypress', function (e) {
                if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode != 45)) {  //Enable only to press numbers and dash
                    e.stopPropagation();
                    return false;
                }
            });

            //Exercise 12:
            var phonesDiv2 = $('#PhonesDiv2');

            $('#AddPhone2').click(function () {
                // Copy the structure of phones in a compact way
                var phoneSelectDiv2 = $('div:eq(0)', phonesDiv2).clone();   //Go find a div that is the first one in the collection, relative to phonesDiv (the starting point), and copy it 
                var phoneTextBoxDiv2 = $('div:eq(1)', phonesDiv2).clone();  //Go find a div that is the second one in the collection, relative to phonesDiv (the starting point), and copy it 

                $('select', phoneSelectDiv2).val('');    //Clear select clone 
                $('input', phoneTextBoxDiv2).val('');    //Clear input clone 

                // Add the clone to the button of the phonesDiv
                phonesDiv2.append('<div style="clear:both"; />')
                         .append(phoneSelectDiv2)
                         .append(phoneTextBoxDiv2);

            });

            phonesDiv2.delegate('input', 'keypress', function (e) {
                if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode != 45)) {  //Enable only to press numbers and dash
                    e.stopPropagation();
                    return false;
                }
            });

            //Using hover()
            //Exercise 13:
            $('#tableExercise13 tr').hover(
                function () {
                    //mouseenter
                    $(this).css('background-color', '#efefef')
                },
                 function () {
                     //mouseleave
                     $(this).css('background-color', '#fff')
                 }
            );

            //Exercise 14:
            $('#tableExercise14 tr').hover(function () {
                $(this).toggleClass('LightHighlight')
            });

            //Using toggle()
            //Exercise 15:
            $('#tableExercise15 tr').toggle(
                function () {
                    //mouseenter
                    $(this).css('background-color', 'green')
                },
                 function () {
                     //mouseleave
                     $(this).css('background-color', '#fff')
                 },
                 function () {
                     //mouseleave
                     $(this).css('background-color', 'yellow')
                 }
            );

}

function SubmitButton_Click() {
	alert("Exercise 1: Clicked button - the traditional way");
}

function Toggle(div) {
	$(div).toggleClass('Highlight');
}