// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).on('page:change', function() {
    
    $('#new_email').submit(function(e) {
        e.preventDefault();
        
        var emailName = $('#email_name').val();
        var emailEmail = $('#email_email').val();
        
        $.ajax({
            url: 'emails',
            type: 'POST',
            data: {email: {name: emailName, email: emailEmail}},
            complete: function(data) {
                $('#new_email').html("<h2>Thanks for signing up! I'll reach out to you soon.</h2>");
            }
        });
        
    });
    
});