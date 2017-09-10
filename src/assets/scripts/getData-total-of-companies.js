$(document).ready(function () {
	function getDataForTotalOfCompanies() {
		jQuery.ajax({
			type: "POST",
			url: "http://codeit.pro/frontTestTask/company/getList",
			dataType: 'json',
			beforeSend: function () {
				console.log('Запрос стартует');
				$('#floatingCirclesG').show();
				$('.ma-companies__total-info').hide();


			},
			complete: function () {
				console.log('Запрос окончен');
				$('#floatingCirclesG').hide();
				$('.ma-companies__total-info').show();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Ошибка: ' + textStatus + ' | ' + errorThrown);
			},
			success: function (data) {
				$('.ma-companies__total-info').append(data.list.length);
				console.log('success', data.list.length);

			}
		});
		return false;
	}

	getDataForTotalOfCompanies();
});