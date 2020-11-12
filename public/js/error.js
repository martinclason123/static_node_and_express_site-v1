// hides the errors stack on page load
$('#errorstack').hide();
// indicates that the text can be clicked on hover
$('#seestack').css('cursor', 'pointer');
// listener to display the stack and hide the error img 
$('#seestack').click(() =>{
    $('#404img').hide();
    $('#errorstack').show();
    $('#seestack').hide();
})
