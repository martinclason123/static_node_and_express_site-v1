$('#errorstack').hide();
$('#seestack').css('cursor', 'pointer');
$('#seestack').click(() =>{
    $('#404img').hide();
    $('#errorstack').show();
    $('#seestack').hide();
})
