$(document).ready(function () {
	$('#post_form').submit(function () {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "http://codeit.pro/frontTestTask/user/registration",
			data: $(this).serialize(),
			success: function (data) {
				let $userCreated = 'User created';
				let $notValidEmail = 'Email is not valid';
				let $genderRequired = 'Field \'gender\' is required';
				let $secondnameContain = 'Field \'secondname\' should contain from 3 to 60 letters';
				let $emailExists = 'Creating user error. Email already exists.';
				let $wrongRoute = 'Wrong route';


				if (data.message === $notValidEmail) {
					$('#post_form').append('<p class="ma-response__text-error">Email is not valid, enter correct email, please</p>');
					$('#submit-btn').on("click", function () {
						$('.ma-response__text-error').remove();
					});
				} else if (data.message === $genderRequired) {
					$('#post_form').append('<p class="ma-response__text-error">Field gender is required, choose your answer, please</p>');
					$('#submit-btn').on("click", function () {
						$('.ma-response__text-error').remove();
					});
				} else if (data.message === $secondnameContain) {
					$('#post_form').append('<p class="ma-response__text-error">Field secondname should contain from 3 to 60 letters</p>');
					$('#submit-btn').on("click", function () {
						$('.ma-response__text-error').remove();
					});
				} else if (data.message === $emailExists) {
					$('#post_form').append('<p class="ma-response__text-error">Email already exists, enter another email, please</p>');
					$('#submit-btn').on("click", function () {
						$('.ma-response__text-error').remove();
					});
				} else if (data.message === $wrongRoute) {
					$('#post_form').append('<p class="ma-response__text-error">Something is wrong, please try it, please</p>');
					$('#submit-btn').on("click", function () {
						$('.ma-response__text-error').remove();
					});
				} else if (data.message === $userCreated) {
					$('#post_form').append('<p class="ma-response__text-ok">Thank you for registration</p>');
					$(location).attr('href', 'companies.html');
				}
			}
		});
		return false;
	});
});



