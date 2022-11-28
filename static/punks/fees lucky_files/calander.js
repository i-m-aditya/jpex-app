$(function() { 
 
  $.datepicker.setDefaults({
   inline: true,
   showOn: 'button',
   buttonImageOnly: true,
   buttonImage: '/sbijava/sbcollect/images/calendar_icon.png',
   buttonText: 'Calendar',
  yearRange: "c-150:c+0"
   }); 
$("#dateOfBirth").datepicker({ 
dateFormat: "d/m/yy",
maxDate: -1
}).val()          
 var changeMonth = $("#dateOfBirth" ).datepicker( "option", "changeMonth" ); 
$("#dateOfBirth" ).datepicker( "option", "changeMonth", true ); 
var changeYear = $("#dateOfBirth" ).datepicker( "option", "changeYear" );
$("#dateOfBirth" ).datepicker( "option", "changeYear", true );
$( "#dateOfBirth" ).datepicker({ appendText: "(dd/mm/yy)" });

});

$(document).ready(function() 
{ 
 $("img[class='ui-datepicker-trigger']").each(function()
 { 
  $(this).attr('style', 'position:relative; top:-1px; left:7px;');
  
 });
 $(".ui-datepicker-trigger").mouseover(function() {
    $(this).css('cursor', 'pointer');
	});
}); 

$(function() { 
 
  $.datepicker.setDefaults({
   inline: true,
   showOn: 'button',
   buttonImageOnly: true,
   buttonImage: '/sbijava/sbcollect/images/calendar_icon.png',
   buttonText: 'Calendar'
   }); 
$("#fromDate").datepicker({ dateFormat: "d/m/yy" , maxDate: 0}).val()          
 var changeMonth = $("#fromDate" ).datepicker( "option", "changeMonth" ); 
$("#fromDate" ).datepicker( "option", "changeMonth", true ); 
var changeYear = $("#fromDate" ).datepicker( "option", "changeYear" );
$("#fromDate" ).datepicker( "option", "changeYear", true );
    
});

$(document).ready(function() 
{ 
 $("img[class='ui-datepicker-trigger']").each(function()
 { 
  $(this).attr('style', 'position:relative; top:-1px; left:7px;');
 });
  $(".ui-datepicker-trigger").mouseover(function() {
    $(this).css('cursor', 'pointer');
												});
}); 




$(function() { 
 
  $.datepicker.setDefaults({
   inline: true,
   showOn: 'button',
   buttonImageOnly: true,
   buttonImage: '/sbijava/sbcollect/images/calendar_icon.png',
   buttonText: 'Calendar'
   }); 
$("#toDate").datepicker({ dateFormat: "d/m/yy",maxDate: 0 }).val()          
 var changeMonth = $("#toDate" ).datepicker( "option", "changeMonth" ); 
$("#toDate" ).datepicker( "option", "changeMonth", true ); 
var changeYear = $("#toDate" ).datepicker( "option", "changeYear" );
$("#toDate" ).datepicker( "option", "changeYear", true );
 $("#toDate").datepicker('setDate', new Date());
});

$(document).ready(function() 
{ 
 $("img[class='ui-datepicker-trigger']").each(function()
 { 
  $(this).attr('style', 'position:relative; top:-1px; left:7px;');
 });
 
  $(".ui-datepicker-trigger").mouseover(function() {
    $(this).css('cursor', 'pointer');
												});
}); 




$(function() { 
 
  $.datepicker.setDefaults({
   inline: true,
   showOn: 'button',
   buttonImageOnly: true,
   buttonImage: '/sbijava/sbcollect/images/calendar_icon.png',
   buttonText: 'Calendar',
   yearRange: "c-150:c+0"
   }); 
$("#dob").datepicker({ dateFormat: "d/m/yy",maxDate: -1}).val()          
 var changeMonth = $("#dob" ).datepicker( "option", "changeMonth" ); 
$("#dob" ).datepicker( "option", "changeMonth", true ); 
var changeYear = $("#dob" ).datepicker( "option", "changeYear" );
$("#dob" ).datepicker( "option", "changeYear", true );
    
});

$(document).ready(function() 
{ 
 $("img[class='ui-datepicker-trigger']").each(function()
 { 
  $(this).attr('style', 'position:relative; top:-1px; left:7px;');
 });
 
  $(".ui-datepicker-trigger").mouseover(function() {
    $(this).css('cursor', 'pointer');
												});
}); 



$(function() { 
 
  $.datepicker.setDefaults({
   inline: true,
   showOn: 'button',
   buttonImageOnly: true,
   buttonImage: '/sbijava/sbcollect/images/calendar_icon.png',
   buttonText: 'Calendar'
   }); 
$("#paymentdob").datepicker({ dateFormat: "dd-mm-yy" }).val()          
 var changeMonth = $("#paymentdob" ).datepicker( "option", "changeMonth" ); 
$("#paymentdob" ).datepicker( "option", "changeMonth", true ); 
var changeYear = $("#paymentdob" ).datepicker( "option", "changeYear" );
$("#paymentdob" ).datepicker( "option", "changeYear", true );
    
});

$(document).ready(function() 
{ 
 $("img[class='ui-datepicker-trigger']").each(function()
 { 
  $(this).attr('style', 'position:relative; top:-1px; left:7px;');
 });
 
  $(".ui-datepicker-trigger").mouseover(function() {
    $(this).css('cursor', 'pointer');
												});
}); 



$(function() { 
 
  $.datepicker.setDefaults({
   inline: true,
   showOn: 'button',
   buttonImageOnly: true,
   buttonImage: '/sbijava/sbcollect/images/calendar_icon.png',
   buttonText: 'Calendar'
   }); 
$("#datepicker5").datepicker({ dateFormat: "dd-mm-yy" }).val()          
 var changeMonth = $("#datepicker5" ).datepicker( "option", "changeMonth" ); 
$("#datepicker5" ).datepicker( "option", "changeMonth", true ); 
var changeYear = $("#datepicker5" ).datepicker( "option", "changeYear" );
$("#datepicker5" ).datepicker( "option", "changeYear", true );
    
	
	
});


$(document).ready(function() 
{ 
 $("img[class='ui-datepicker-trigger']").each(function()
 { 
  $(this).attr('style', 'position:relative; top:-1px; left:7px;');
 });
  $(".ui-datepicker-trigger").mouseover(function() {
    $(this).css('cursor', 'pointer');
												});
}); 
