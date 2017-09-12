$(document).ready(function () {
	function getDataForTotalOfCompanies() {
		jQuery.ajax({
			type: "POST",
			url: "http://codeit.pro/frontTestTask/company/getList",
			dataType: 'json',
			beforeSend: function () {
				$('#loader-total').html('<img src="assets/img/Spin.svg" alt="loader">').show();
				//$('#loader-list').html('<img src="assets/img/Spin.svg" alt="loader">').show();
				$('.ma-companies__total-info').hide();
				//$('.ma-companies__list-info').hide();
			},
			complete: function () {
				$('#loader-total').html('<img src="assets/img/Spin.svg" alt="loader">').hide();
				//$('#loader-list').html('<img src="assets/img/Spin.svg" alt="loader">').hide();
				$('.ma-companies__total-info').show();
				//$('.ma-companies__list-info').show();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Ошибка: ' + textStatus + ' | ' + errorThrown);
			},
			success: function (data) {

				let count = 0;
				for(let i=0; i <= data.list.length; i++){
					if (data.list[i]) {
						count++;
					}
				}
				$('.ma-companies__total-info').append(count);
				//$('.ma-companies__list-info').append(count);
			}
		});
		return false;
	}
	getDataForTotalOfCompanies();
});