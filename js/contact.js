$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "The name is required.",
                    minlength: "your name must consist of at least 2 characters."
                },
                subject: {
                    required: "The subject is required.",
                    minlength: "your subject must consist of at least 4 characters."
                },
                number: {
                    required: "The number is required.",
                    minlength: "your Number must consist of at least 5 characters."
                },
                email: {
                    required: "The email is required."
                },
                message: {
                    required: "The messqge is required.",
                    minlength: "Your email is short."
                }
            },
            submitHandler: function(form) {
                console.log('dfdfsdfdfdsfs');
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })


      $('#contactForm').on('submit',function(){
        console.log('kljfdskjdfsjkldsf')
      });
    })
        
 })(jQuery)
})