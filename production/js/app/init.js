
$(document).ready(function(){
	
	var iniRepTec,finRepTec;
		$.ajax({
		  method: "GET",
		  type: "GET",
		  dataType: 'json',
		  url: "https://fixmensintegration.azurewebsites.net/api/Tecnicos",
		  data: {
		  	fechaInicio: moment().subtract(1, 'years').format('YYYY-MM-DD'),
		  	fechaFin: moment().format('YYYY-MM-DD')
		   } 
		}).done(function( data ) {
			data.sort();
			$.each(data, function(val, text) {
			   $('#dropdown_tecnicos select').append('<option value='+text+'>'+text+'</option>');
			}); // there was also a ) missing here

			$.each(data, function(val, text) {
            $('.dropdown-tecnicos').next().append('<li><a>'+text+'</a></li>')
            }); // there was also a ) missing here
		}).fail( function(xhr, textStatus, errorThrown) {
			
			  
	  });

	init_daterangepicker()
	// var provider = new firebase.auth.GoogleAuthProvider();//Initialice porvider GoogleId
	// $(".jsLogin").click(function(){
	// 	firebase.auth().signInWithPopup(provider).then(function(result) {
	// 	  // This gives you a Google Access Token. You can use it to access the Google API.
	// 	  var token = result.credential.accessToken;
	// 	  // The signed-in user info.
	// 	  user = result.user;
	// 	  $(".jsLogin").text(user.displayName);
	// 	  // ...
	// 		}).catch(function(error) {
	// 	  // Handle Errors here.
	// 		  var errorCode = error.code;
	// 		  var errorMessage = error.message;
	// 		  // The email of the user's account used.
	// 		  var email = error.email;
	// 		  // The firebase.auth.AuthCredential type that was used.
	// 		  var credential = error.credential;
	// 	// ...
	// 	});
// 	})
	
// 	$("input, textarea").keyup(function(){
// 		$(this).val( $(this).val().toUpperCase() );
// 	});
	
// 	$(".action").click(function(){
		
// 		  firebase.database().ref('users/' + $("#rfc").val()).set({
// 			email: $("#email").val(),
// 			rfc: $("#rfc").val(),
// 			calleynumero : $("#calleynumero").val(),
// 			colonia : $("#colonia").val(),
// 			cp : $("#cp").val(),
// 			municipio : $("#municipio").val(),
// 			estado : $("#estado").val(),
// 			telefono : $("#telefono").val(),
// 			nombreFiscal : $("#name").val()
			
// 		  });
		  
		  
// 		  Materialize.toast('Cliente guardado/Actualizado exitosamente', 3000, 'rounded')
// 		  // similar behavior as an HTTP redirect
			
// 			setTimeout(function(){ window.location.replace("http://www.fixmens.com.mx/facturar.html"); }, 1000);
		
// 	})
	
// 	$(".facturar").click(function(){
// 		var rfc = $("#rfc").val() ? $("#rfc").val() : "&/%&/!/";
// 		if ($("#ticket").val() == null || $("#ticket").val() == "" || $("#ticket").val() == undefined){
// 			Materialize.toast('Ingrese No Ticket/Orden', 3000, 'rounded');
// 			return false;
// 		}

// 		if (user==""){
// 			Materialize.toast('Favor de iniciar sesion', 3000, 'rounded');
// 			return false;
// 		}



// 		  window.data = {};
// 			var commentsRef = firebase.database().ref('users/' + rfc);
			
// 			commentsRef.once('value', function(snap){
// 				data = snap.val();
				
// 				if(data == null){
// 						Materialize.toast('Cliente no '+$("#rfc").val()+' existe ', 3000, 'rounded')
// 					}
// 					else{
// 						data.ticket = $("#ticket").val()
						
// 						  var a = JSON.stringify(data, null, 2);
// 						  console.log(a);
// 						  $("#data").html(a);
// 						$('#md1').modal();
// 						 $('#md1').modal('open');
// 						  // similar behavior as an HTTP redirect
// 					}
// 				});
			
// 			//setTimeout(function(){ window.location.replace("http://www.fixmens.com.mx/facturar.html"); }, 1000);
		
// 	})
	
// 	$("#md1_YesBtn").click(function(){
		
		
// 	});
	
	
// })

//     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
//     $('.modal').modal();
	
	
//   $(document).ajaxStart(function () {
//     $(".progress").show();
//    $(".modal-footer > a").attr('disabled', 'disabled');
// });

// $(document).ajaxComplete(function () {
//     $(".progress").hide();
//     $(".modal-footer > a").removeAttr('disabled');
// });
       

   // end of document ready
}); // end of jQuery name space

function drawGraphRep(data){
	var chart_plot_01_rep = {
		type: 'line',
          series: {
            lines: {
              show: true,
              fill: false
            },
            splines: {
              show: true,
              tension: 0.01,
              lineWidth: 2,
              fill: 0.4
            },
            points: {
              radius: 3,
              show: true
            },
						shadowSize: 2
          },
          grid: {
            verticalLines: true,
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#fff'
          },
          colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
          xaxis: {
            tickColor: "rgba(51, 51, 51, 0.06)",
            mode: "time",
            tickSize: [1, "day"],
            //tickLength: 10,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10
          },
          yaxis: {
            ticks: 8,
            tickColor: "rgba(51, 51, 51, 0.06)",
					}
				}
          
        
         var vectors=[];
        

	   //      var unique = data.filter(function(itm, i, a) {
		  //   return i == data.indexOf(itm.TECNICO);
				// });

	    $.each(data, function(item1, val1){
	    	var vector = [];
			$.each(val1, function(item, val) {
				//if(item.TECNICO == val1.TECNICO){
			        	var dateItem = moment(val.FECHATERMINADO, 'YYYY-MM-DD');

			        	var aux = [gd(dateItem.year(), dateItem.month()+1, dateItem.date()),val.CANTIDAD];

			        	 vector.push(aux);
			        	//}
						}); // there was also a ) missing here
			
			vectors.push(vector);
	    })
        


        if ($("#chart_tecnicos").length){
			console.log('Plot1');
			
			$.plot( $("#chart_tecnicos"), vectors,  chart_plot_01_rep );
		}
}

function drawSummary(data)
{
	$.each(data, function(item1, val1){
		var sum = 0;
		var count = 0;
		$.each(val1, function(item, val) {
			//if(item.TECNICO == val1.TECNICO){
							sum+= val.CANTIDAD;
							count +=1;							//}
					}); // there was also a ) missing here
		
		console.log(sum);
		var duration = moment.duration(moment(finRepTec).diff(moment(iniRepTec)));
		var diffDays = duration.asDays();
		$("#finalizados > div > p:eq(0)").text("Total finalizados: " + sum + " en " + diffDays +" dias");
		$("#diasContados > p:eq(0)").text("Promedio diario: " + (sum/diffDays).toFixed(2) + " y dias con 0 rep: "+(diffDays - count));
	});
}

function getReparacionesPorTecnico(){
	var names = '';
			$("#dropdown_tecnicos select option:selected").each(function () {
		   var $this = $(this);
		   if ($this.length) {
		    var selText = $this.text();
		    names += selText + ',';
		   }
		});
	//var userName = $('#dropdown_tecnicos').find("option:selected").text();
	var fechaInicio = iniRepTec;
	var fechaFin = finRepTec;
	var soloEntregado = false; //ToDo hacerlo variable

	$.ajax({
		  method: "GET",
		  type: "GET",
		  dataType: 'json',
		  url: "https://fixmensintegration.azurewebsites.net/api/ReparacionesSummary",
		   data:{
		   	userName: names,
		   	fechaInicio: fechaInicio,
		   	fechaFin:fechaFin,
		   	soloEntregado : soloEntregado
		  },
		  dataType: 'json'
		}).done(function( data ) {
			
			drawGraphRep(data);
			drawSummary(data);

			
		}).fail( function(xhr, textStatus, errorThrown) {
			
			  
	  });

}

	   function init_daterangepicker() {

			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker');
		
			var cb = function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			  $('#reportrange_rep span').html(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
			};

			var optionSet1 = {
			  startDate: moment().subtract(29, 'days'),
			  endDate: moment(),
			  // minDate: '01/01/2012',
			  // maxDate: '31/12/2018',
			  dateLimit: {
				days: 366
			  },
			  showDropdowns: true,
			  showWeekNumbers: true,
			  timePicker: false,
			  timePickerIncrement: 1,
			  timePicker12Hour: true,
			  ranges: {
				'Hoy': [moment(), moment()],
				'Ayer': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Ultimos 7 Dias': [moment().subtract(6, 'days'), moment()],
				'Ultimos 30 Dias': [moment().subtract(29, 'days'), moment()],
				'Este Mes': [moment().startOf('month'), moment().endOf('month')],
				'Mes Anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			  },
			  opens: 'left',
			  buttonClasses: ['btn btn-default'],
			  applyClass: 'btn-small btn-primary',
			  cancelClass: 'btn-small',
			  format: 'YYYY-MM-DD',
			  separator: ' a ',
			  locale: {
				applyLabel: 'Guardar',
					cancelLabel: 'Limpiar',
					fromLabel: 'Del',
					toLabel: 'Al',
					customRangeLabel: 'Custom',
					daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
					monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agusto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
					firstDay: 1
			  }
			};
			
			$('#reportrange_rep span').html(moment().subtract(29, 'days').format('YYYY-MM-DD') + ' - ' + moment().format('YYYY-MM-DD'));
			$('#reportrange_rep').daterangepicker(optionSet1, cb);
			$('#reportrange_rep').on('show.daterangepicker', function() {
			  console.log("show event fired");
			});
			$('#reportrange_rep').on('hide.daterangepicker', function() {
			  console.log("hide event fired");
			});
			$('#reportrange_rep').on('apply.daterangepicker', function(ev, picker) {
			  console.log("apply event fired, start/end dates are " + picker.startDate.format('YYYY-MM-DD') + " to " + picker.endDate.format('YYYY-MM-DD'));
			  iniRepTec = picker.startDate.format('YYYY-MM-DD');
			  finRepTec = picker.endDate.format('YYYY-MM-DD');
			  getReparacionesPorTecnico();
			});
			$('#reportrange_rep').on('cancel.daterangepicker', function(ev, picker) {
			  console.log("cancel event fired");
			});
			$('#options1').click(function() {
			  $('#reportrange_rep').data('daterangepicker').setOptions(optionSet1, cb);
			});
			$('#options2').click(function() {
			  $('#reportrange_rep').data('daterangepicker').setOptions(optionSet2, cb);
			});
			$('#destroy').click(function() {
			  $('#reportrange_rep').data('daterangepicker').remove();
			});
   
		}
