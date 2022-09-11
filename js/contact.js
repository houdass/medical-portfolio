$(document).ready(function () {
    (function ($) {
        'use strict';

        jQuery.validator.addMethod(
            'answercheck',
            function (value, element) {
                return this.optional(element) || /^\bcat\b$/.test(value);
            },
            'type the correct answer -_-',
        );

        $('form.contact-form').on('submit', function (e) {
            e.preventDefault();
        });

        // validate contactForm form
        $(function () {
            $('form.contact-form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    subject: {
                        required: true,
                        minlength: 4,
                    },
                    number: {
                        required: true,
                        minlength: 5,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    message: {
                        required: true,
                        minlength: 20,
                    },
                },
                messages: {
                    name: {
                        // required: "The name is required.",
                        // minlength: 'Your name must consist of at least 2 characters.',
                    },
                    subject: {
                        // required: 'The subject is required.',
                        // minlength: 'Your subject must consist of at least 4 characters.',
                    },
                    email: {
                        // required: 'Your email is required.',
                    },
                    message: {
                        // required: 'The message is required.',
                        // minlength: 'Your message must consist of at least 20 characters.',
                    },
                },
                submitHandler: function (form, event) {
                    event.preventDefault();
                    var formobj = $('form.contact-form').serializeArray();


                    emailjs
                        .send('service_o3h6bd8', 'template_6bjqk28', {
                            name: formobj.find((obj) => obj.name === 'name').value,
                            subject: formobj.find((obj) => obj.name === 'subject').value,
                            email: formobj.find((obj) => obj.name === 'email').value,
                            message: formobj.find((obj) => obj.name === 'message').value,
                        })
                        .then(function (res) {
                            $('form.contact-form').hide();
                            $('#email-sent-message').show();
                        });
                },
            });
        });
    })(jQuery);
});
