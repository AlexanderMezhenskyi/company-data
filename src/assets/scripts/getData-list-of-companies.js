$(document).ready(function () {
	function getDataForListOfCompanies() {
		jQuery.ajax({
			type: "POST",
			url: "http://codeit.pro/frontTestTask/company/getList",
			dataType: 'json',
			beforeSend: function () {
				console.log('Запрос стартует');
				$('#loader-list').html('<img src="assets/img/Spin.svg" alt="loader">').show();
				$('.ma-companies__list-info').hide();
			},
			complete: function () {
				console.log('Запрос окончен');
				$('#loader-list').html('<img src="assets/img/Spin.svg" alt="loader">').hide();
				$('.ma-companies__list-info').show();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Ошибка: ' + textStatus + ' | ' + errorThrown);
			},
			success: function (data) {
				var companies = data.list;
				let companyList = "<ul>";
				companies.forEach((company) => {
					companyList += "<li class=\"ma-companies__list-item\">" + company.name + "</li>";
				});
				companyList += "</ul>";

				$('.ma-companies__list-info').append(companyList);




			}
		});
		return false;
	}

	getDataForListOfCompanies();
});