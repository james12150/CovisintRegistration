/* CHROME FIX */
$(document).ready(function(){

    var Chrome = false;

    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
	Chrome = true;
	$('body').addClass('chrome');
    }

});
/* PASSWORD */
$(document).ready(function() {	

$('input[type=password]').keyup(function() {
	// keyup code here
	// set password variable
var pswd = $(this).val();
//validate the length
if ( pswd.length < 8 ) {
	$('#length').removeClass('valid').addClass('invalid');
} else {
	$('#length').removeClass('invalid').addClass('valid');
}
//validate letter
if ( pswd.match(/[A-z]/) ) {
	$('#letter').removeClass('invalid').addClass('valid');
} else {
	$('#letter').removeClass('valid').addClass('invalid');
}

//validate capital letter
if ( pswd.match(/[A-Z]/) ) {
	$('#capital').removeClass('invalid').addClass('valid');
} else {
	$('#capital').removeClass('valid').addClass('invalid');
}

//validate number
if ( pswd.match(/[0-9]/) ) {
	$('#number').removeClass('invalid').addClass('valid');
} else {
	$('#number').removeClass('valid').addClass('invalid');
}

//special character
if ( pswd.match(/[\W_]/) ) {
	$('#special').removeClass('invalid').addClass('valid');
} else {
	$('#special').removeClass('valid').addClass('invalid');
}

//no spaces
if ( pswd.match(/[ X]/) ) {
	$('#spaces').removeClass('valid').addClass('invalid');
} else {
	$('#spaces').removeClass('invalid').addClass('valid');
}


}).focus(function() {
	$('#pswd_info').show();
}).blur(function() {
	$('#pswd_info').hide();
});

});