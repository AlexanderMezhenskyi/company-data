function getDataForListOfPartners() {
	jQuery.ajax({
		type: "POST",
		url: "http://codeit.pro/frontTestTask/company/getList",
		dataType: 'json',
		complete: function () {
			$('.ma-companies__partners').show();
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('Ошибка: ' + textStatus + ' | ' + errorThrown);
		},
		success: function (data) {
			let companies = data.list;
			let partnersName = "<tr>";
			let partnersValue = "<tr>";

			let partnersResult;
			companies.forEach((company) => {
				let partnersOfCompany = company.partner;

				partnersName += "<td>" + partnersOfCompany + "</td>";
				partnersValue += "<td>" + partnersOfCompany + "</td>";

				 let partnersOfcompany = company.partners;
				 partnersOfcompany.forEach((partner) => {

				 });
			});
			partnersName += "</tr>";
			partnersValue += "</tr>";
			partnersResult = partnersName + partnersValue;



			$('.ma-tbody').html(partnersResult);
		}
	});
	return false;
}















