$(document).ready(function () {
	function getDataForListOfCompanies() {
		jQuery.ajax({
			type: "POST",
			url: "http://codeit.pro/frontTestTask/company/getList",
			dataType: 'json',
			beforeSend: function () {
				$('#loader-list').html('<img src="assets/img/Spin.svg" alt="loader">').show();
				$('.ma-companies__list-info').hide();
			},
			complete: function () {
				$('#loader-list').html('<img src="assets/img/Spin.svg" alt="loader">').hide();
				$('.ma-companies__list-info').show();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Ошибка: ' + textStatus + ' | ' + errorThrown);
			},
			success: function (data) {
				let companies = data.list;
				let companyList = "<ul>";
				//let partnersName = "<tr>";
				//let partnersValue = "<tr>";
				companies.forEach((company) => {
					companyList += "<li class=\"ma-companies__list-item\" onclick=\"getDataForListOfPartners()\">" + company.name + "</li>";
					//let partnersOfcompany = company.partners;
					//partnersOfcompany.forEach((partner) => {
					//	partnersName += "<td>" + partner.name + "</td>";
					//	partnersValue += "<td>" + partner.value + "</td>";
					//});
				});
				companyList += "</ul>";
				//partnersName += "</tr>";
				//partnersValue += "</tr>";


				$('.ma-companies__list-info').append(companyList);
				//$('.ma-companies__list-item').on('click', function () {
					//$('.ma-tbody').append(partnersName);
					//$('.ma-tbody').append(partnersValue);
				//})
			}
		});
		return false;
	}

	getDataForListOfCompanies();
});