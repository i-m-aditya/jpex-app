function checkFileExtensions()
{
var strfile = document.getElementById("file").value;
if(strfile!='')
{
	var index = strfile.lastIndexOf(".");
	var fileExt = strfile.substr(parseInt(index)+1);
	if(fileExt == 'doc' || fileExt =='DOC'||fileExt == 'docx' || fileExt =='DOCX'||fileExt =='ppt'||fileExt =='PPT'||fileExt =='pdf'||fileExt =='PDF'){
		document.getElementById("filedetails").value=strfile;
		return true;
		}
	else{
		alert("Please upload file with extensions doc,docx,pdf or ppt");
		return false;			
		}
	}
	return true;
}

function datefromandgreaterthantoday(formgreqtoday,startgreqtoday)
{		
	if(document.getElementById("lastDate") !== null)
	{
		strstartgreqtoday= document.getElementById("lastDate").value;
		
        tempstartgreqtoday = strstartgreqtoday.split("/");
		
				
        var sygreqtoday = parseInt(tempstartgreqtoday[2]);
        var smgreqtoday = parseInt(tempstartgreqtoday[1]);
        var sdgreqtoday = parseInt(tempstartgreqtoday[0]);
		
		
		


		//strendgreqtoday = endgreqtoday;
		
		var mydates=new Date();
		var todyears=mydates.getYear()
		if (todyears < 1000)
		todyears+=1900
		var toddays=0;
		var todmonths=0;
		var toddayms=0;
		
		toddays=mydates.getDay();
		

		todmonths=mydates.getMonth();
		todmonths=todmonths+1;
		toddayms=mydates.getDate();


		
		if((todyears.length == 2) &&(parseInt(todyears) >=50) &&(parseInt(todyears) <=99))
			{
				todyears = '19' + todyears;
			}

		if((todyears.length == 2) &&(parseInt(todyears) < 50))
			{
				todyears = '20' + todyears;
			}
				
        var strendgreqtoday=toddayms+"/"+todmonths+"/"+todyears
			
        tempendgreqtoday = strendgreqtoday.split("/");
		
			
        var eygreqtoday = parseInt(tempendgreqtoday[2]);
        var emgreqtoday = parseInt(tempendgreqtoday[1]);
        var edgreqtoday = parseInt(tempendgreqtoday[0]);
		
	
        sjgreqtoday = julianDay(sygreqtoday,smgreqtoday,sdgreqtoday);//entered date
        ejgreqtoday = julianDay(eygreqtoday,emgreqtoday,edgreqtoday);//todays date
		
        if (ejgreqtoday>sjgreqtoday) {
                alert("Date entered must not be prior to today's date");
				document.getElementById("lastDate").focus();
                return false;
        }
     }
    return true;
        
}


function alphanumerikcheckwithspacechk(formname,alphanumtextwithspace,alpanumesgwithspace)
{
	var intStrLen = eval("document."+formname+"."+alphanumtextwithspace+".value.length");
	var strValue = eval("document."+formname+"."+alphanumtextwithspace+".value");
	if (intStrLen== 0 || strValue== "")
	{
		alert(" Enter "+alpanumesgwithspace);
		eval("document."+formname+"."+alphanumtextwithspace+".focus()");
		return false;
	}
	if(strValue!="")
	{
	   var checkOK6withspace = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ.,-_/()#\t\r\n\f ";
	   var checkStr6withspace = strValue;
	   var ckspclcharwithspace=0;
	   fsblnkwithspace=0;
	   fscharwithspace="";
	   fscharwithspace=checkStr6withspace.charAt(0);
	   if(fscharwithspace==" ")
		 {
			alert("First Character should not be a space in  "+alpanumesgwithspace);
			eval("document."+formname+"."+alphanumtextwithspace+".focus()");
			return (false);		
		 }
	  fscharwithspace="";
	  var allValid6withspace = true;
	  var cnt6withspace = 0;
	  var flag6withspace = 0;
	  var totalLen6withspace = intStrLen;
	  var spsalphawithspace=0;
	  var overallspacecheckalncheckwithspace="";
	  for(totsspacealphawithspace=0;totsspacealphawithspace<=totalLen6withspace;totsspacealphawithspace++)
		 {
			overallspacecheckalncheckwithspace=checkStr6withspace.charAt(totsspacealphawithspace);
				if(overallspacecheckalncheckwithspace==' ')
					{
						spsalphawithspace=spsalphawithspace+1;
					}
		}
		if(parseInt(totalLen6withspace)==parseInt(spsalphawithspace))
		{
			alert("Enter " +alpanumesgwithspace);
			eval("document."+formname+"."+alphanumtextwithspace+".focus()");
			return (false);
		}
		for (mabwithspace = 0;  mabwithspace < checkStr6withspace.length;  mabwithspace++)
			{
				chalphwithspace = checkStr6withspace.charAt(mabwithspace);
				for (nabwithspace = 0;  nabwithspace < checkOK6withspace.length;  nabwithspace++)
					if (chalphwithspace == checkOK6withspace.charAt(nabwithspace))
						break;
				if (nabwithspace == checkOK6withspace.length)
					{
						allValid6withspace = false;
						break;
					}
		
			}//end of for statement

		if (cnt6withspace > 1 || flag6withspace == 1 || !allValid6withspace )
			{
			  alert("Enter valid "+alpanumesgwithspace);
			  eval("document."+formname+"."+alphanumtextwithspace+".focus()");
			  return (false);
			}
 	}
 	return true;
}

function addStudentRow()
{
	num = document.dataForm.hidCount.value;
	var table = document.getElementById('tblstudent');
	var lastRow = table.rows.length-1;
	var totalrows = (table.rows.length-2);
	//alert("totalrows: "+totalrows);
	var row = table.insertRow(lastRow);
	//totStuCount = document.dataForm.totStuCount.value;
  	//totStuCount=parseInt(totStuCount)+1;
  	//alert("tot stu count: "+totStuCount);
  	numName=parseInt(num)+1;
  	//alert("numName: "+numName);
  	document.dataForm.hidCount.value=numName;
  	//document.dataForm.totStuCount.value=totStuCount;
	var cell1 = row.insertCell(0);  	
	cell1.className = 'accountsgrid';
  	cell1.innerHTML = "<INPUT TYPE='checkbox' name='selChkBox"+numName+"' id ='selChkBox"+numName+"'>";
  	var cell2 = row.insertCell(1);
  	cell2.className = 'accountsgrid';
  	cell2.innerHTML = "<INPUT  TYPE='text' name='inputName"+numName+"' id ='inputName"+numName+"' maxlength='30'>";
  	var cell3 = row.insertCell(2);
  	cell3.className = 'accountsgrid';
  	cell3.innerHTML = "<select  onChange='fnSelect("+numName+")' maxlength='20' name='inputType"+numName+"' id='inputType"+numName+"'><option>--Select--</option><option value='text'>Text</option><option value='options'>Options</option></select>";
  	var cell4 = row.insertCell(3);
  	cell4.className = 'accountsgrid';
  	cell4.innerHTML=  "<textarea disabled='disabled' name='optionTxt"+numName+"' id='optionTxt"+numName+"' cols='10' rows='2' maxlength='1000'  onkeyup='checkCharacterLength("+numName+")'/>"
  	var cell5 = row.insertCell(4);
  	cell5.className = 'accountsgrid';
  	cell5.innerHTML = "<select name='mandatory"+numName+"' id='mandatory"+numName+"'><option>Yes</option><option selected='selected'>No</option></select><input type='hidden' id='rowValue"+numName+"' name='rowValue"+numName+"' value=''>";  	
// 	var cell6 = row.insertCell(5);
//  	cell6.innerHTML = "<td><INPUT TYPE='hidden' name='"+row+"' id ='rowNum"+numName+"'></td>";  	
  	
}

function checkCharacterLength(id)
{
	var optionValue = document.getElementById("optionTxt"+id).value;
	if (optionValue.length > 1000)
	{
		document.getElementById("optionTxt"+id).value = optionValue.substring(0, 1000);
		alert("Only 1000 Characters allowed");
		return false;
	}
}

function delStudentRow(id)
{
	var table = document.getElementById('tblstudent');
	var totRows=parseInt(table.rows.length);
	var delArray=new Array();
	//alert("total Number of elements: "+totRows);
	var lastRowCount=document.dataForm.hidCount.value;
	//alert("lastRowCount stu: "+lastRowCount);
	var k=0;
	//var totStuCount=document.dataForm.totStuCount.value;
	var isChecked=false;
	if (totRows>3)
	{
	   for(var i=1; i < totRows-1; i++)
       {           
       //alert("for loop i: "+i);
       		var row = table.rows[i];
       		var chkBoxHtml = row.cells[0].innerHTML;
       		//alert(chkBoxHtml);
       		//alert("index: "+chkBoxHtml.search("CHECKED"));
       		if(chkBoxHtml.search("CHECKED") > 0)
       		{
       			isChecked=true;
       			//alert("KKKKKKKKKKKKK: "+k);
       			if(k==0)
       			{
	       			var confirmDel =confirm("Are you sure to delete the record");
	       			k = parseInt(k)+1;
	       			if (confirmDel==true)
					{
						//alert("table: "+table);
						//alert("row: "+row);
						table.deleteRow(i);
						//totStuCount = parseInt(totStuCount)-1
						//document.dataForm.totStuCount.value=totStuCount;
					}
					else
					{
						return;
					}
					i=0;
					//alert("new i IF: "+i);
					totRows=parseInt(table.rows.length);
					//alert("new totrows IF: "+totRows);
					//alert("k: "+k);
					if (totRows == 3)
					{
						var row = table.rows[1];
			       		var chkBoxHtml = row.cells[0].innerHTML;
			       		if(chkBoxHtml.search("CHECKED") > 0)
			       		{
							alert("Atleast one Parameter information is required");
							break;
						}
						/*else
						{
							alert("Please check the check box before clicking remove parameter");
							return;
						}*/
						
					}
	       		}
	       		else
	       		{	
	       			//alert("entering else");
		       		table.deleteRow(i);
					//totStuCount = parseInt(totStuCount)-1
					//document.dataForm.totStuCount.value=totStuCount;
					i=0;
					//alert("new i ELSE: "+i);
					totRows=parseInt(table.rows.length);
					//alert("new totrows ELSE: "+totRows);
					if (totRows == 3)
					{
						var row = table.rows[1];
			       		var chkBoxHtml = row.cells[0].innerHTML;
			       		if(chkBoxHtml.search("CHECKED") > 0)
			       		{
							alert("Atleast one Parameter information is required");
							return;
						}
						/*else
						{
							alert("Please check the check box before clicking remove parameter");
							return;
						}*/
					}
	       		}
       		}
     	}
     	if(isChecked==false)
       	{
	   		alert("Please check the check box before clicking remove parameter");
	   		return;
    	}
   }
	else if(totRows == 3 && !isChecked)
	{
			var row = table.rows[1];
       		var chkBoxHtml = row.cells[0].innerHTML;
       		if(chkBoxHtml.search("CHECKED") > 0)
       		{
				alert("Atleast one Parameter information is required");
				return;
			}
			else
			{
				alert("Please check the check box before clicking remove parameter");
				return;
			}
	}

}

function checkStudentAll()
{
	var totRows=document.dataForm.hidCount.value;
	for(var i=1; i <= totRows; i++)
     {           
     	var checkVal = document.getElementById("inputName"+i);
		if(checkVal!=null)
		{

			if(document.getElementById("checkboxStuAll").checked)
			{
				document.getElementById("selChkBox"+i).checked=true;
				document.getElementById("selChkBox"+i).disabled=true;
			}
			else
			{
				document.getElementById("selChkBox"+i).checked=false;
				document.getElementById("selChkBox"+i).disabled=false;
			}
		}
	}
}

function addFeeRow()
{
	numFee = document.dataForm.hidFeeCount.value;
	var table = document.getElementById('tblfee');
	var lastRow = table.rows.length-1;
	var totalrows = (table.rows.length-2);
	//alert("totalrows: "+totalrows);
	var row = table.insertRow(lastRow);
	//totFeeCount = document.dataForm.totFeeCount.value;
  	//totFeeCount=parseInt(totFeeCount)+1;
	//alert("tot Fee count: "+totFeeCount);
  	numFeeName=parseInt(numFee)+1;
  	//alert("numFeeName: "+numFeeName);
  	document.dataForm.hidFeeCount.value=numFeeName;
  	//document.dataForm.totFeeCount.value=totFeeCount;
	var cell1 = row.insertCell(0);  
	cell1.className = 'accountsgrid';	
  	cell1.innerHTML = "<INPUT TYPE='checkbox' name='selFeeChkBox"+numFeeName+"' id ='selFeeChkBox"+numFeeName+"'>";
  	var cell2 = row.insertCell(1);
	cell2.className = 'accountsgrid';
  	cell2.innerHTML = "<INPUT TYPE='text' name='feeName"+numFeeName+"' id ='feeName"+numFeeName+"' maxlength='30'>";
  	var cell3 = row.insertCell(2);
	cell3.className = 'accountsgrid';
  	cell3.innerHTML = "<select onChange='fnSelect2("+numFeeName+")'  maxlength='15' id='amtType"+numFeeName+"' name='amtType"+numFeeName+"'><option>--Select--</option><option value='fixed'>Fixed</option><option value='variable'>Variable</option></select>";
  	var cell4 = row.insertCell(3);
	cell4.className = 'accountsgrid';
  	cell4.innerHTML=  "<input type='text' size='12' disabled='disabled' id='amount"+numFeeName+"' name='amount"+numFeeName+"' maxlength='12'>";
  	var cell5 = row.insertCell(4);
	cell5.className = 'accountsgrid';
  	cell5.innerHTML = "<select name='feeMandatory"+numFeeName+"' id='feeMandatory"+numFeeName+"'><option selected='selected'>Yes</option><option>No</option></select><input type='hidden' id='rowFeeValue"+numFeeName+"' name='rowFeeValue"+numFeeName+"' value=''>";  	
// 	var cell6 = row.insertCell(5);
//  	cell6.innerHTML = "<td><INPUT TYPE='hidden' name='"+row+"' id ='rowNum"+numName+"'></td>";  	
  	
}

function delFeeRow(id)
{
	var table = document.getElementById('tblfee');
	var totRows=parseInt(table.rows.length);
	var delArray=new Array();
	//alert("total Number of elements: "+totRows);
	var lastRowCount=document.dataForm.hidCount.value;
	//var totFeeCount=document.dataForm.totFeeCount.value;
	//alert("lastRowCount stu: "+lastRowCount);
	var k=0;

	var isChecked=false;
	if (totRows>3)
	{
	   for(var i=1; i < totRows-1; i++)
       {           
       //alert("for loop i: "+i);
       		var row = table.rows[i];
       		var chkBoxHtml = row.cells[0].innerHTML;
       		//alert(chkBoxHtml);
       		//alert("index: "+chkBoxHtml.search("CHECKED"));
       		if(chkBoxHtml.search("CHECKED") > 0)
       		{
       			isChecked=true;
       			//alert("KKKKKKKKKKKKK: "+k);
       			if(k==0)
       			{
	       			var confirmDel =confirm("Are you sure to delete the record");
	       			k = parseInt(k)+1;
	       			if (confirmDel==true)
					{
						//alert("table: "+table);
						//alert("row: "+row);
						table.deleteRow(i);
						//totFeeCount=parseInt(totFeeCount)-1;
					  	//document.dataForm.totFeeCount.value=totFeeCount;
					}
					else
					{
						return;
					}
					i=0;
					//alert("new i IF: "+i);
					totRows=parseInt(table.rows.length);
					//alert("new totrows IF: "+totRows);
					//alert("k: "+k);
					if (totRows == 3)
					{
						var row = table.rows[1];
			       		var chkBoxHtml = row.cells[0].innerHTML;
			       		if(chkBoxHtml.search("CHECKED") > 0)
			       		{
							alert("Atleast one Parameter information is required");
							return;
						}
						/*else
						{
							alert("Please check the check box before clicking remove parameter");
							return;
						}*/
						
					}
	       		}
	       		else
	       		{	
	       			//alert("entering else");
		       		table.deleteRow(i);
					//totFeeCount=parseInt(totFeeCount)-1;
				  	//document.dataForm.totFeeCount.value=totFeeCount;
					i=0;
					//alert("new i ELSE: "+i);
					totRows=parseInt(table.rows.length);
					//alert("new totrows ELSE: "+totRows);
					if (totRows == 3)
					{
						var row = table.rows[1];
			       		var chkBoxHtml = row.cells[0].innerHTML;
			       		if(chkBoxHtml.search("CHECKED") > 0)
			       		{
							alert("Atleast one Parameter information is required");
							return;
						}
						/*else
						{
							alert("Please check the check box before clicking remove parameter");
							return;
						}*/
					}
	       		}
       		}
     	}
     	if(isChecked==false)
       	{
	   		alert("Please check the check box before clicking remove parameter");
	   		return;
    	}
   }
	else if(totRows == 3 && !isChecked)
	{
			var row = table.rows[1];
       		var chkBoxHtml = row.cells[0].innerHTML;
       		if(chkBoxHtml.search("CHECKED") > 0)
       		{
				alert("Atleast one Parameter information is required");
				return;
			}
			else
			{
				alert("Please check the check box before clicking remove parameter");
				return;
			}
	}
}
function checkFeeAll()
{
	var totRows=document.dataForm.hidFeeCount.value;
	for(var i=1; i <= totRows; i++)
     {           
     	var checkVal = document.getElementById("feeName"+i);
		if(checkVal!=null)
		{

			if(document.getElementById("checkboxFeeAll").checked)
			{
				document.getElementById("selFeeChkBox"+i).checked=true;
				document.getElementById("selFeeChkBox"+i).disabled=true;
			}
			else
			{
				document.getElementById("selFeeChkBox"+i).checked=false;
				document.getElementById("selFeeChkBox"+i).disabled=false;
			}
		}
	}
}


function validateStudentParameter(form)
{
		var table = document.getElementById('tblstudent');
		//var totRows=parseInt(table.rows.length);
		var totRows=document.dataForm.hidCount.value;
		//alert("student totrows: "+totRows);
		var arr = new Array(4);
		arr[0]="";
		arr[1] = "Input Name";
		arr[2] = "Input Type";
		arr[3] = "Options";
		for(var i=1; i <= totRows; i++)
	     {     
		    var optionsValue="";  
     		var inputNameValue="";
			var inputTypeValue="";
			var mandatoryValue="";
		     
	       //	alert("i: "+i);    
 			var checkVal = document.getElementById("inputName"+i)
 			//alert("checkVal:::: "+checkVal);
 			if(checkVal!=null)
 			{
					var inputNameElement = document.getElementById("inputName"+i);
			 		if(document.getElementById("inputName"+i).value =="")
			 		{
		 				alert(arr[1]+" cannot be empty");
			 			return false;
			 		}
			 		else
			 		{
						inputNameValue=inputNameElement.value;
						if(!alphanumerikcheckwithspacechk('dataForm','inputName'+i,'Input Name'))
							return;
					}
					var inputTypeElement = document.getElementById("inputType"+i);
					if(inputTypeElement.selectedIndex == 2)
					{
						inputTypeValue="Options";
						var textAreaElement = document.getElementById("optionTxt"+i);
						if(textAreaElement.value=='')
						{
							alert(arr[3]+" cannot be empty");
							return false;
						}
						else
						{
							//validation for comma-seprated string
								optionsValue=textAreaElement.value;
									if(optionsValue.indexOf(",")< 0)
									{
										alert("Options should be comma separated string");
										document.getElementById("optionTxt"+i).focus();
										return false;
									}
							if(!checkCommaSeprated(textAreaElement.value,form,textAreaElement,"Options",i))
							{
								return false;
							}
							// check for mandatory yes...
							var mandatoryElement = document.getElementById("mandatory"+i);
							if(mandatoryElement.selectedIndex ==1)
							{
								alert("If option is selected, Mandatory should be Yes");
								return false;
							}
						
						}
					}
					else if(inputTypeElement.selectedIndex == 1)
					{
						inputTypeValue="Text";
					}
					else if(inputTypeElement.selectedIndex == 0)
					{
						alert("Please select eithier Text or Options");
						return false;
					}

					var mandatoryElement = document.getElementById("mandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
						mandatoryValue = 'Y';
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
						mandatoryValue = 'N';
					}
	 		var rowValue=inputNameValue+"|"+inputTypeValue+"|"+optionsValue+"|"+mandatoryValue;
			document.getElementById("rowValue"+i).value=rowValue;
	 		//alert("rowValue: "+document.getElementById("rowValue"+i).value);
	 		}
	 		}
 		return true;
}

function validateFeeParameter(form,limit)
{
		var table = document.getElementById('tblfee');
		//var totRows=parseInt(table.rows.length);
		var totRows=document.dataForm.hidFeeCount.value;
		//alert("Fee totrows: "+totRows);
		var arr = new Array(4);
		var totalAmount=0;
		var oneFeeMandatory = false;
		arr[0]="";
		arr[1] = "Name";
		arr[2] = "Amount Type";
		arr[3] = "Amount";
		for(var i=1; i <= totRows; i++)
	     {     
	     	var amount=""; 
  			var feeNameValue="";
			var amountTypeValue="";
			var feeMandatoryValue="";
		     
	       //	alert("i: "+i);    
 			var checkVal = document.getElementById("feeName"+i)
 			//alert("checkVal:::: "+checkVal);
 			if(checkVal!=null)
 			{
					var inputNameElement = document.getElementById("feeName"+i);
			 		if(document.getElementById("feeName"+i).value=="")
			 		{
		 				alert(arr[1]+" cannot be empty");
			 			return false;
			 		}
			 		else
			 		{
						feeNameValue=inputNameElement.value;
						if(!alphanumerikcheckwithspacechk('dataForm','feeName'+i,'Name'))
							return;
					}
					var inputTypeElement = document.getElementById("amtType"+i);
					if(inputTypeElement.selectedIndex == 1)
					{
						amountTypeValue="Fixed";
						var textAreaElement = document.getElementById("amount"+i);
						if(textAreaElement.value=='')
						{
							alert(arr[3]+" cannot be empty");
							return false;
						}
						else
						{
							//validate for numeric check
							//if(!txt_numeric('dataForm','amount'+i))
							//	return;
							//if(!validateInteger('dataForm','amount'+i+,'Amount','amount')){
							
							if(!validatemain('dataForm','amount'+i+'.amtcheck.amount')){
								return false;		
							}
							amount=textAreaElement.value;
							//alert("totalAmount: "+totalAmount);
							//alert("amount: "+amount);
							totalAmount = parseInt(totalAmount)+parseInt(amount);
							//totalAmount = parseInt(totalAmount)+parseInt(amount);
							//alert("totalAmount: "+totalAmount);
							if(totalAmount>limit)
							{
								alert("Amount exceeds the bank limit");
								return false;
							}
						}
					}
					else if(inputTypeElement.selectedIndex == 2)
					{
						amountTypeValue="Variable";
					}
					else if(inputTypeElement.selectedIndex == 0)
					{
						alert("Please select eithier Fixed or Variable");
						return false;
					}
					
					var mandatoryElement = document.getElementById("feeMandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
						feeMandatoryValue = 'Y';
						oneFeeMandatory = true;
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
						feeMandatoryValue = 'N';
					}
	 		var rowValue=feeNameValue+"|"+amountTypeValue+"|"+amount+"|"+feeMandatoryValue;
			document.getElementById("rowFeeValue"+i).value=rowValue;
	 		//alert("rowFeeValue: "+document.getElementById("rowFeeValue"+i).value);
	 		}
	 		}
	 		if(oneFeeMandatory == false)
	 		{
	 			//alert("Atleast one parameter should be mandatory");
	 			//return false;
	 		}
 		return true;
}

function txt_numeric(form_name,txt_name)
{
		//alert("form_name     "+form_name);
	    //alert("txt_name     "+txt_name);
		

		if(eval("document."+form_name+"."+txt_name+".value")=="")
		{
		alert("pls enter Amount");
		eval("document."+form_name+"."+txt_name+".focus()");
		return (false);
		}

		if(eval("document."+form_name+"."+txt_name+".value")=="0")
		{
		alert("Amount should be a numeric value. It cannot be null and less than 1.");
		eval("document."+form_name+"."+txt_name+".focus()");
		return (false);
		}
		var amountValue = eval("document."+form_name+"."+txt_name+".value");
		var index =amountValue.indexOf(".");
		//alert("index: "+index);
		if(index>0)
		{
			var parseAmount = amountValue.substr(parseInt(index)+1);
			//alert("parseAmount: "+parseAmount);
			if(parseAmount.length > 2)
			{
				alert("Please enter two dights after decimal");
				return false;
			}
			
		}
		

		if(eval("document."+form_name+"."+txt_name+".value")!="")
		{
		var checkOK = "0123456789.\t\r\n\f";
		var checkStr = eval("document."+form_name+"."+txt_name+".value");
    	var allValid = true;
		var cnt = 0;
		var flag = 0;
		var totalLen = eval("document."+form_name+"."+txt_name+".length");
		for (k = 0;  k < checkStr.length;  k++)
		{
		ch = checkStr.charAt(k);
		for (j = 0;  j < checkOK.length;  j++)
		if (ch == checkOK.charAt(j))
		break;
	    if (j == checkOK.length)
		{
		   allValid = false;
		   break;
		}
				   
		if(ch == '.')
			{
				cnt	= cnt+1;
			}
					 
		if((ch=='.' && k == totalLen-1)) // || (ch=='.' && k == 0)) 'for initial dot
			{
		    	flag = 1;
			}
					}//end of for statement
					
			if (cnt > 1 || flag == 1 || !allValid )
			{
			  alert("Enter only numeric");
			  eval("document."+form_name+"."+txt_name+".focus()");
			  return (false);
			}

		}
		return true;
	}
	
function checkCommaSeprated(commaString,formname,commaElement,commaMessage,index)
{
	
	/*var arr = commaString.split(",");
	for(var g=0;g<arr.length;g++)
	{
		alert(arr[g]);
	}*/

		
	   var checkOK6withspace = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ,/._-\t\r\n\f ";
	   var checkStr6withspace = commaString;
	   var ckspclcharwithspace=0;
	   fsblnkwithspace=0;
	   fscharwithspace="";
	   fscharwithspace=checkStr6withspace.charAt(0);
	   if(fscharwithspace==" ")
		 {
			alert("First Character should not be a space for "+commaMessage);
			document.getElementById("optionTxt"+index).focus;
			return (false);		
		 }
	  fscharwithspace="";
	  var allValid6withspace = true;
	  var cnt6withspace = 0;
	  var flag6withspace = 0;
	  var totalLen6withspace = commaString.length;
	  var spsalphawithspace=0;
	  var overallspacecheckalncheckwithspace="";
	  for(totsspacealphawithspace=0;totsspacealphawithspace<=totalLen6withspace;totsspacealphawithspace++)
		 {
			overallspacecheckalncheckwithspace=checkStr6withspace.charAt(totsspacealphawithspace);
				if(overallspacecheckalncheckwithspace==' ')
					{
						spsalphawithspace=spsalphawithspace+1;
					}
		}
		/*if(parseInt(totalLen6withspace)==parseInt(spsalphawithspace))
		{
			alert("Enter " +alpanumesgwithspace);
			eval("document."+formname+"."+alphanumtextwithspace+".focus()");
			return (false);
		}*/
		for (mabwithspace = 0;  mabwithspace < checkStr6withspace.length;  mabwithspace++)
			{
				chalphwithspace = checkStr6withspace.charAt(mabwithspace);
				for (nabwithspace = 0;  nabwithspace < checkOK6withspace.length;  nabwithspace++)
					if (chalphwithspace == checkOK6withspace.charAt(nabwithspace))
						break;
				if (nabwithspace == checkOK6withspace.length)
					{
						allValid6withspace = false;
						break;
					}
		
			}//end of for statement

		if (cnt6withspace > 1 || flag6withspace == 1 || !allValid6withspace )
			{
			  alert("Enter valid "+commaMessage);
			  document.getElementById("optionTxt"+index).focus();
			  return (false);
			}
		 	return true;
 	}

function loadOptionId()
{
var instDetails=document.getElementById('instDetails').selectedIndex;
//alert(document.getElementsByTagName("option")[instDetails].id);
var id= document.getElementsByTagName("option")[instDetails].id;
document.getElementById('instId').value=id;
//alert(document.getElementsByTagName("option")[instDetails].text);
document.getElementById('instName').value=document.getElementsByTagName("option")[instDetails].text;		
}
function checkStuEdit(id)
{
	//alert(document.getElementById("inputName"+id).disabled);
	if(document.getElementById("editStuCheckBox"+id).checked){
		document.getElementById("inputName"+id).disabled=false;
		document.getElementById("inputType"+id).disabled=false;		
		if(document.getElementById("inputType"+id).value=='options')
		{		
			document.getElementById("optionTxt"+id).disabled=false;
		}
		else
		{
			document.getElementById("optionTxt"+id).disabled=true;
		}
		//document.getElementById("mandatory"+id).disabled=false;
		if(document.getElementById("inputType"+id).value=='options')				
			document.getElementById("mandatory"+id).disabled=true;	
		else	
			document.getElementById("mandatory"+id).disabled=false;	
		}
	else
		{
		document.getElementById("inputName"+id).disabled=true;
		document.getElementById("inputType"+id).disabled=true;
		document.getElementById("optionTxt"+id).disabled=true;
		document.getElementById("mandatory"+id).disabled=true;				
		}	
}

function checkFeeEdit(id)
{
	if(document.getElementById("editFeeCheckBox"+id).checked){
		document.getElementById("feeName"+id).disabled=false;
		document.getElementById("amtType"+id).disabled=false;		
		if(document.getElementById("amtType"+id).value=='fixed')		
			document.getElementById("amount"+id).disabled=false;
		else
			document.getElementById("amount"+id).disabled=true;
		//if(document.getElementById("amtType"+id).value=='fixed')				
		//	document.getElementById("feeMandatory"+id).disabled=true;	
		//else	
		//	document.getElementById("feeMandatory"+id).disabled=false;	
		document.getElementById("feeMandatory"+id).disabled=false;
		}
	else
		{
		document.getElementById("feeName"+id).disabled=true;
		document.getElementById("amtType"+id).disabled=true;
		document.getElementById("amount"+id).disabled=true;
		document.getElementById("feeMandatory"+id).disabled=true;				
		}
}

function addModifyStudentRow()
{
	/*var modifyStatus = confirm("Are you sure you wish to add this parameter. please note that once you have added a parameter there is no provision to remove it before you click the Submit button. In order to remove a newly added parameter, click F5 or the Back button to return to the View/Modify landing page.");
	if (modifyStatus != true)
	{
		return;
	}
	else{*/
		var table = document.getElementById('tblstudent');
		var lastRow = table.rows.length-1;
		var totalrows = (table.rows.length-2);
		var row = table.insertRow(lastRow);
	  	numName=parseInt(totalrows)+1;
	  	//document.dataForm.hidCount.value=numName;
	  	//alert("numName: "+numName);
		var cell1 = row.insertCell(0);  	
		cell1.className = 'accountsgrid';
	  	cell1.innerHTML = "<input name='editStuCheckBox"+numName+"' disabled id='editStuCheckBox"+numName+"' type='checkbox'><input type='hidden' id='stuParamId"+numName+"' name='stuParamId"+numName+"' value=''>";
  	
	  	var cell2 = row.insertCell(1);
	  	cell2.className = 'accountsgrid';
	  	cell2.innerHTML = "<input name='delStuCheckBox"+numName+"' disabled id='delStuCheckBox"+numName+"' type='checkbox'>";
  	
	  	var cell3 = row.insertCell(2);
	  	cell3.className = 'accountsgrid';
	  	cell3.innerHTML = "<INPUT  TYPE='text' name='inputName"+numName+"' id ='inputName"+numName+"' maxlength='30'>";
  	
	  	var cell4 = row.insertCell(3);
	  	cell4.className = 'accountsgrid';
	  	cell4.innerHTML = "<select  onChange='fnSelect("+numName+")' maxlength='20' name='inputType"+numName+"' id='inputType"+numName+"'><option>--Select--</option><option value='text'>Text</option><option value='options'>Options</option></select>";

	  	var cell5 = row.insertCell(4);
	  	cell5.className = 'accountsgrid';
	  	cell5.innerHTML=  "<textarea disabled='disabled' name='optionTxt"+numName+"' id='optionTxt"+numName+"' cols='10' rows='2' maxlength='100' onkeyup='checkCharacterLength("+numName+")'>";

  		var cell6 = row.insertCell(5);
	  	cell6.className = 'accountsgrid';
	  	cell6.innerHTML = "<select name='mandatory"+numName+"' id='mandatory"+numName+"'><option>Yes</option><option selected='selected'>No</option></select><input type='hidden' id='rowValue"+numName+"' name='rowValue"+numName+"' value=''>";  	
	  //	}
}

function addModifyFeeRow()
{
	/*var modifyStatus = confirm("Are you sure you wish to add this parameter. please note that once you have added a parameter there is no provision to remove it before you click the Submit button. In order to remove a newly added parameter, click F5 or the Back button to return to the View/Modify landing page.");
	if (modifyStatus != true)
	{
		return;
	}
	else{*/
	var table = document.getElementById('tblfee');
	var lastRow = table.rows.length-1;
	var totalrows = (table.rows.length-2);
	var row = table.insertRow(lastRow);
  	numFeeName=parseInt(totalrows)+1;
  	//document.dataForm.hidFeeCount.value=numFeeName;
  	//alert("numFeeName: "+numFeeName);
	var cell1 = row.insertCell(0);  	
	cell1.className = 'accountsgrid';
  	cell1.innerHTML = "<input name='editFeeCheckBox"+numFeeName+"' disabled id='editFeeCheckBox"+numFeeName+"' type='checkbox'><input type='hidden' id='feeParamId"+numFeeName+"' name='feeParamId"+numFeeName+"' value=''>";
  	
  	var cell2 = row.insertCell(1);
  	cell2.className = 'accountsgrid';
  	cell2.innerHTML = "<input name='delFeeCheckBox"+numFeeName+"' disabled id='delFeeCheckBox"+numFeeName+"' type='checkbox'>";
  	
  	var cell3 = row.insertCell(2);
	cell3.className = 'accountsgrid';
  	cell3.innerHTML = "<INPUT TYPE='text' name='feeName"+numFeeName+"' id ='feeName"+numFeeName+"' maxlength='30'>";

  	var cell4  = row.insertCell(3);
	cell4.className = 'accountsgrid';
  	cell4.innerHTML = "<select onChange='fnSelect2("+numFeeName+")'  maxlength='15' id='amtType"+numFeeName+"' name='amtType"+numFeeName+"'><option>--Select--</option><option value='fixed'>Fixed</option><option value='variable'>Variable</option></select>";

  	var cell5 = row.insertCell(4);
	cell5.className = 'accountsgrid';
  	cell5.innerHTML=  "<input type='text' size='12' disabled='disabled' id='amount"+numFeeName+"' name='amount"+numFeeName+"' maxlength='12'>";

  	var cell6 = row.insertCell(5);
	cell6.className = 'accountsgrid';
  	cell6.innerHTML = "<select selected='selected' name='feeMandatory"+numFeeName+"' id='feeMandatory"+numFeeName+"'><option  selected='selected'>Yes</option><option>No</option></select><input type='hidden' id='rowFeeValue"+numFeeName+"' name='rowFeeValue"+numFeeName+"' value=''>";  	
  //	}
}


function checkDeleteAll(totRows,defaultRows,checkBoxId)
{
 var checkedCount=0;
  totRows = parseInt(totRows)-2;
 //alert("totRows: "+totRows);
 //alert("defaultRows: "+defaultRows);
 //alert("checkBoxId: "+checkBoxId);

 if(totRows==defaultRows){
 		for(var i=1; i <= totRows; i++)
	     { 
     			if(document.getElementById(checkBoxId+i).checked)
				checkedCount = parseInt(checkedCount)+1;
	     }
	     //alert("checked count: "+checkedCount)
	     if(checkedCount==defaultRows)
	     	{
	     		alert("Atleast one parameter should be there");
		     	return false;
	     	}
	 }
	 return true;
}

function validateModifyStudentParameter(form)
{
		var table = document.getElementById('tblstudent');
		var totRows=parseInt(table.rows.length);
		var defaultRows=document.dataForm.hidCount.value;
		if(!checkDeleteAll(totRows,defaultRows,"delStuCheckBox"))
			return false;
		//alert("student defaultRows: "+defaultRows);
		var arr = new Array(4);
		arr[0]="";
		arr[1] = "Input Name";
		arr[2] = "Input Type";
		arr[3] = "Options";
		for(var i=1; i <= totRows; i++)
	     {   
	     	var editValue="";
	     	var delValue="";  
		    var optionsValue="";  
     		var inputNameValue="";
			var inputTypeValue="";
			var mandatoryValue="";
		    var paramIdValue="";
		     
	       //	alert("i: "+i);    
 			var checkVal = document.getElementById("inputName"+i)
 			//alert("checkVal:::: "+checkVal);
 			if(i <= defaultRows){
 			///alert("i: "+i);
 			if(checkVal!=null&& (document.getElementById("editStuCheckBox"+i).checked))
 			{
		 			paramIdValue = document.getElementById("stuParamId"+i).value;
 					if(document.getElementById("editStuCheckBox"+i).checked)
 						editValue="Y";
					else 
						editValue="N"; 						
 					if(document.getElementById("delStuCheckBox"+i).checked)
 						delValue="Y";
					else 
						delValue="N"; 						
 					
					var inputNameElement = document.getElementById("inputName"+i);

			 		if(document.getElementById("inputName"+i).value=='')
			 		{
		 				alert(arr[1]+" cannot be empty");
			 			return false;
			 		}
			 		else
			 		{
						inputNameValue=inputNameElement.value;
						if(!alphanumerikcheckwithspacechk('dataForm','inputName'+i,'Input Name'))
							return;
					}
					var inputTypeElement = document.getElementById("inputType"+i);
					if(inputTypeElement.selectedIndex == 2)
					{
						inputTypeValue="Options";
						var textAreaElement = document.getElementById("optionTxt"+i);
						if(textAreaElement.value=='')
						{
							alert(arr[3]+" cannot be empty");
							return false;
						}
						else
						{
							//validation for comma-seprated string
								optionsValue=textAreaElement.value;
									if(optionsValue.indexOf(",")< 0)
									{
										alert("Options should be comma separated string");
										document.getElementById("optionTxt"+i).focus();
										return false;
									}
							if(!checkCommaSeprated(textAreaElement.value,form,textAreaElement,"Options",i))
							{
								return false;
							}
							// check for mandatory yes...
							var mandatoryElement = document.getElementById("mandatory"+i);
							if(mandatoryElement.selectedIndex ==1)
							{
								alert("If option is selected, Mandatory should be Yes");
								return false;
							}
						
						}
					}
					else if(inputTypeElement.selectedIndex == 1)
					{
						inputTypeValue="Text";
					}
					else if(inputTypeElement.selectedIndex == 0)
					{
						alert("Please select eithier Text or Options");
						return false;
					}

					var mandatoryElement = document.getElementById("mandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
						mandatoryValue = 'Y';
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
						mandatoryValue = 'N';
					}
	 		var rowValue=paramIdValue+"|"+editValue+"|"+delValue+"|"+inputNameValue+"|"+inputTypeValue+"|"+optionsValue+"|"+mandatoryValue;
			document.getElementById("rowValue"+i).value=rowValue;
	 		//alert("rowValue: "+document.getElementById("rowValue"+i).value);
	 		}
	 		else if(checkVal!=null && (document.getElementById("delStuCheckBox"+i).checked))
 			{
				paramIdValue = document.getElementById("stuParamId"+i).value;
				editValue="N";
				delValue="Y";
	 			var rowValue=paramIdValue+"|"+editValue+"|"+delValue;
				document.getElementById("rowValue"+i).value=rowValue;
		 		//alert("rowValue: "+document.getElementById("rowValue"+i).value);
	 		}
 		}
 		else
 		{
 			 var checkVal = document.getElementById("inputName"+i);
 			//alert("checkVal:::: "+checkVal);
 			if(checkVal!=null)
 			{
		 			//paramIdValue = document.getElementById("stuParamId"+i).value;
 					//if(document.getElementById("editStuCheckBox"+i).checked)
 					//	editValue="Y";
					//else 
						editValue="N"; 						
 					//if(document.getElementById("delStuCheckBox"+i).checked)
 					//	delValue="Y";
					//else 
						delValue="N"; 						
 					
					var inputNameElement = document.getElementById("inputName"+i);
			 		if(document.getElementById("inputName"+i).value=="")
			 		{
		 				alert(arr[1]+" cannot be empty");
			 			return false;
			 		}
			 		else
			 		{
						inputNameValue=inputNameElement.value;
						if(!alphanumerikcheckwithspacechk('dataForm','inputName'+i,'Input Name'))
							return;
					}
					var inputTypeElement = document.getElementById("inputType"+i);
					if(inputTypeElement.selectedIndex == 2)
					{
						inputTypeValue="Options";
						var textAreaElement = document.getElementById("optionTxt"+i);
						if(textAreaElement.value=='')
						{
							alert(arr[3]+" cannot be empty");
							return false;
						}
						else
						{
							//validation for comma-seprated string
								optionsValue=textAreaElement.value;
							if(!checkCommaSeprated(textAreaElement.value,form,textAreaElement,"Options",i))
							{
								return false;
							}
							// check for mandatory yes...
							var mandatoryElement = document.getElementById("mandatory"+i);
							if(mandatoryElement.selectedIndex ==1)
							{
								alert("If option is selected, Mandatory should be Yes");	
								return false;						}
						}
					}
					else if(inputTypeElement.selectedIndex == 1)
					{
						inputTypeValue="Text";
					}
					else if(inputTypeElement.selectedIndex == 0)
					{
						alert("Please select eithier Text or Options");
						return false;
					}

					var mandatoryElement = document.getElementById("mandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
						mandatoryValue = 'Y';
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
						mandatoryValue = 'N';
					}
	 		var rowValue=paramIdValue+"|"+editValue+"|"+delValue+"|"+inputNameValue+"|"+inputTypeValue+"|"+optionsValue+"|"+mandatoryValue;
			document.getElementById("rowValue"+i).value=rowValue;
	 		//alert("rowValue: "+document.getElementById("rowValue"+i).value);
	 		}
 		}
 		}
 		return true;
}
function validateLimit(form,limit)
{
		var table = document.getElementById('tblfee');
		var totRows=parseInt(table.rows.length);
		var totalAmount=0;
		//alert("totRows: "+totRows);
		for(var i=1; i < totRows-1; i++)
	     {
	     	var inputTypeElement = document.getElementById("amtType"+i);
			if(inputTypeElement.selectedIndex == 1)
			{
				var textAreaElement = document.getElementById("amount"+i);
				amount=textAreaElement.value;
				totalAmount = parseInt(totalAmount)+parseInt(amount);
			    if(totalAmount>limit)
				{
					alert("Amount exceeds the bank limit");
					return false;
				}
			} 
	     }
		return true;
}
function resetModifyFeeParameter(form)
{
		var table = document.getElementById('tblfee');
		var totRows=parseInt(table.rows.length);
		var defaultRows=document.dataForm.hidFeeCount.value;
		//alert("fee defaultRows: "+defaultRows);
		//alert("totRows: "+totRows);
		for(var i=1; i < totRows-1; i++)
	     {     
	     //	alert("b4: "+document.getElementById("rowFeeValue"+i).value);
   	     	document.getElementById("rowFeeValue"+i).value='';	
   	     //	alert("after: "+document.getElementById("rowFeeValue"+i).value);
   	     	
	     }
	     return true;
}

function validateModifyFeeParameter(form,limit)
{
		var table = document.getElementById('tblfee');
		var totRows=parseInt(table.rows.length);
		var defaultRows=document.dataForm.hidFeeCount.value;
	
		if(!checkDeleteAll(totRows,defaultRows,"delFeeCheckBox"))
			return false;
		//alert("fee defaultRows: "+defaultRows);
		var arr = new Array(4);
		arr[0]="";
		arr[1] = "Name";
		arr[2] = "Amount Type";
		arr[3] = "Amount";
		for(var i=1; i <= totRows; i++)
	     {     
   	     	var editValue="";
	     	var delValue="";  
	     	var amount=""; 
  			var feeNameValue="";
			var amountTypeValue="";
			var feeMandatoryValue="";
		    var paramIdValue="";
		     
	       //	alert("i: "+i);    
 			var checkVal = document.getElementById("feeName"+i)
 			//alert("checkVal:::: "+checkVal);
 			if(i <= defaultRows){
 			///alert("i: "+i);
 			//alert("document.getElementById(editFeeCheckBox+i).checked: "+document.getElementById("editFeeCheckBox"+i).checked);
 			if(checkVal!=null && (document.getElementById("editFeeCheckBox"+i).checked))
 			{
		 			atleastOneChecked =true;
 					paramIdValue = document.getElementById("feeParamId"+i).value;
 					if(document.getElementById("editFeeCheckBox"+i).checked)
 						editValue="Y";
					else 
						editValue="N"; 						
 					if(document.getElementById("delFeeCheckBox"+i).checked)
 						delValue="Y";
					else 
						delValue="N"; 	
					var inputNameElement = document.getElementById("feeName"+i);
			 		if(document.getElementById("feeName"+i).value=="")
			 		{
		 				alert(arr[1]+" cannot be empty");
			 			return false;
			 		}
			 		else
			 		{
						feeNameValue=inputNameElement.value;
						if(!alphanumerikcheckwithspacechk('dataForm','feeName'+i,'Name'))
							return;
					}
					var inputTypeElement = document.getElementById("amtType"+i);
					if(inputTypeElement.selectedIndex == 1)
					{
						amountTypeValue="Fixed";
						var textAreaElement = document.getElementById("amount"+i);
						if(textAreaElement.value=='')
						{
							alert(arr[3]+" cannot be empty");
							return false;
						}
						else
						{
							//validate for numeric check
							//if(!txt_numeric('dataForm','amount'+i))
							//	return;
							if(!validatemain('dataForm','amount'+i+'.amtcheck.amount')){
								//document.fundsTransferForm.TransferAmount.focus();
								return false;		
							}
							amount=textAreaElement.value;

						}
					}
					else if(inputTypeElement.selectedIndex == 2)
					{
						amountTypeValue="Variable";
					}
					else if(inputTypeElement.selectedIndex == 0)
					{
						alert("Please select eithier Fixed or Variable");
						return false;
					}
					
					var mandatoryElement = document.getElementById("feeMandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
						feeMandatoryValue = 'Y';
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
						feeMandatoryValue = 'N';
					}
	 		var rowValue=paramIdValue+"|"+editValue+"|"+delValue+"|"+feeNameValue+"|"+amountTypeValue+"|"+amount+"|"+feeMandatoryValue;
			document.getElementById("rowFeeValue"+i).value=rowValue;
	 		//alert("rowFeeValue: "+document.getElementById("rowFeeValue"+i).value);
	 		}
	 		else if(checkVal!=null && (document.getElementById("delFeeCheckBox"+i).checked))
 			{
				paramIdValue = document.getElementById("feeParamId"+i).value;
				editValue="N";
				delValue="Y";
	 			var rowValue=paramIdValue+"|"+editValue+"|"+delValue;
				document.getElementById("rowFeeValue"+i).value=rowValue;
		 		//alert("rowFeeValue: "+document.getElementById("rowFeeValue"+i).value);
	
	 		}
	 		
	 	} 
 		else
 		{
			//For newly added rows
 			 var checkVal = document.getElementById("feeName"+i);
 			//alert("checkVal:::: "+checkVal);
 			if(checkVal!=null)
 			{
 					//paramIdValue = document.getElementById("feeParamId"+i).value;
 					//if(document.getElementById("editFeeCheckBox"+i).checked)
 					//	editValue="Y";
					//else 
						editValue="N"; 						
 					//if(document.getElementById("delFeeCheckBox"+i).checked)
 					//	delValue="Y";
					//else 
						delValue="N"; 	
					var inputNameElement = document.getElementById("feeName"+i);
			 		if(document.getElementById("feeName"+i).value=="")
			 		{
		 				alert(arr[1]+" cannot be empty");
			 			return false;
			 		}
			 		else
			 		{
						feeNameValue=inputNameElement.value;
						if(!alphanumerikcheckwithspacechk('dataForm','feeName'+i,'Name'))
							return;
					}
					var inputTypeElement = document.getElementById("amtType"+i);
					if(inputTypeElement.selectedIndex == 1)
					{
						amountTypeValue="Fixed";
						var textAreaElement = document.getElementById("amount"+i);
						if(textAreaElement.value=='')
						{
							alert(arr[3]+" cannot be empty");
							return false;
						}
						else
						{
							//validate for numeric check
							//if(!txt_numeric('dataForm','amount'+i))
							//	return;
							if(!validatemain('dataForm','amount'+i+'.amtcheck.amount')){
								//document.fundsTransferForm.TransferAmount.focus();
								return false;		
							}
							amount=textAreaElement.value;
						}
					}
					else if(inputTypeElement.selectedIndex == 2)
					{
						amountTypeValue="Variable";
					}
					else if(inputTypeElement.selectedIndex == 0)
					{
						alert("Please select eithier Fixed or Variable");
						return false;
					}
					
					var mandatoryElement = document.getElementById("feeMandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
						feeMandatoryValue = 'Y';
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
						feeMandatoryValue = 'N';
					}
	 		var rowValue=paramIdValue+"|"+editValue+"|"+delValue+"|"+feeNameValue+"|"+amountTypeValue+"|"+amount+"|"+feeMandatoryValue;
			document.getElementById("rowFeeValue"+i).value=rowValue;
	 		//alert("rowFeeValue: "+document.getElementById("rowFeeValue"+i).value);
	 		}
 		}
	}

 		return true;
}


/*function validateOneFeeParameter(form)
{
		var table = document.getElementById('tblfee');
		var totRows=parseInt(table.rows.length);
		var defaultRows=document.dataForm.hidFeeCount.value;
		var oneFeeMandatory = true;
		var selCount=0;
		var atleastOneChecked = false;
		var finalRows = parseInt(totRows)-2;
		var oneMandatoryArray = new Array(finalRows);
		//alert("final rows: "+finalRows);
		for(var i=1; i <= finalRows ; i++)
	     {    
            
 			var checkVal = document.getElementById("feeName"+i)
 		//	alert("checkVal:::: "+checkVal);
 		//	alert("document.getElementById(editFeeCheckBox+i).checked: "+document.getElementById("editFeeCheckBox"+i).checked);
 		//	alert("document.getElementById(editFeeCheckBox+i).disabled: "+document.getElementById("editFeeCheckBox"+i).disabled);

 			if(checkVal!=null && (document.getElementById("editFeeCheckBox"+i).checked))
 			{
 					alert("check");
		 			atleastOneChecked =true;
					var mandatoryElement = document.getElementById("feeMandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
		//				alert("Y");
						feeMandatoryValue = 'Y';
						oneFeeMandatory = true;
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
		//				alert("N");
						feeMandatoryValue = 'N';
						oneFeeMandatory = false;
					}

					oneMandatoryArray[selCount]=oneFeeMandatory;
					selCount = parseInt(selCount)+1;
	 		}
	 		else if(document.getElementById("editFeeCheckBox"+i).disabled)
	 		{
	 			alert("new row");
		 			atleastOneChecked =true;
					var mandatoryElement = document.getElementById("feeMandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
		//				alert("Y");
						feeMandatoryValue = 'Y';
						oneFeeMandatory = true;
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
		//				alert("N");
						feeMandatoryValue = 'N';
						oneFeeMandatory = false;
					}
					oneMandatoryArray[selCount]=oneFeeMandatory;
					selCount = parseInt(selCount)+1;
					
	 		} 


		}
		alert("selCount: "+selCount);
		if(selCount > 0)
		{
			for(var j=0; j<selCount;j++)
			{
				alert("oneMandatoryArray[j]: "+j+" "+oneMandatoryArray[j]);
				if(oneMandatoryArray[j] == true)
				{
					oneFeeMandatory = true;
					break;
				}
				else
				{
					oneFeeMandatory =false;
				}
			}
		}
		//alert("oneFeeMandatory: "+oneFeeMandatory);
		 	if(oneFeeMandatory == false)
	 		{
	 			//alert("Atleast one fee parameter should be mandatory");
	 			//return false;
	 		}
 		return true;
}*/

function validateOneFeeParameter(form)
{
		var table = document.getElementById('tblfee');
		var totRows=parseInt(table.rows.length);
		var defaultRows=document.dataForm.hidFeeCount.value;
		var oneFeeMandatory = true;
		var selCount=0;
		var finalRows = parseInt(totRows)-2;
		var oneMandatoryArray = new Array(finalRows);
		//alert("final rows: "+finalRows);
		for(var i=1; i <= finalRows ; i++)
	     {    
            
 			var checkVal = document.getElementById("feeName"+i)
 			//alert("checkVal:::: "+checkVal);

				if(!document.getElementById("delFeeCheckBox"+i).checked)
				{
 					//alert("check");
					var mandatoryElement = document.getElementById("feeMandatory"+i);
					if(mandatoryElement.selectedIndex ==0)
					{
		//				alert("Y");
						feeMandatoryValue = 'Y';
						oneFeeMandatory = true;
					}
					else if(mandatoryElement.selectedIndex ==1)
					{
		//				alert("N");
						feeMandatoryValue = 'N';
						oneFeeMandatory = false;
					}

					oneMandatoryArray[selCount]=oneFeeMandatory;
					selCount=parseInt(selCount)+1;
				}
		}
		//alert("oneFeeMandatory: "+oneFeeMandatory);
			for(var j=0; j<oneMandatoryArray.length;j++)
			{
				//alert("oneMandatoryArray[j]: "+j+" "+oneMandatoryArray[j]);
				if(oneMandatoryArray[j] == true)
				{
					oneFeeMandatory = true;
					break;
				}
				else
				{
					oneFeeMandatory =false;
				}
			}
		 	if(oneFeeMandatory == false)
	 		{
	 			//alert("Atleast one fee parameter should have mandatory yes");
	 			//return false;
	 		}
 		return true;
}

function goBack(frmObj,type)
{
	//if(type=="add")
		document.dataForm.action=type;
	//else if(type=="modify")
	//	document.dataForm.action="viewsuvidhacategory.htm?type=modify";	
	//document.dataForm.submit();
}
//Added for Retail



var stateinsttypeArray= new Array();
var catIDCreditAccBranchArray = new Array();
var catID;
var creditaccno;
var creditbranch;
var docpath;
var state ;
var instType;
var selectedinstID = null;
var count = 0;
var tableObj = new Object();


function setStateOption(stateOpt){
	var stateOptionObj = document.getElementById('stateID');
	stateOptionObj.innerHTML=stateOpt;
}

function catIDAccBranch(catID,creditbranch,creditaccno,docpath){
	this.catID = catID;
	this.creditbranch = creditbranch;
	this.creditaccno = creditaccno;
	this.docpath = docpath;
}


function setCatIDAccBranch(catID,creditaccno,creditbranch,docpath){
	var catIDAccObj = new catIDAccBranch(catID,creditbranch,creditaccno,docpath);
	catIDCreditAccBranchArray[count] =  catIDAccObj;
	count = count + 1;
}

function stateInstType(state, instType){
	this.state = state;
	this.instType = instType;
}

function setStateInstType(state, instType,count){
	var stateInstTypeObj = new stateInstType(state, instType);
	stateinsttypeArray[count] =  stateInstTypeObj;	
}


function refreshInstList(selectedState){
	
	var instTypeOptionObj = document.getElementById('instTypeID');
	var indexCount=1;
	var emptyCounter=0;
	var Counter=0;

	for(emptyCounter=instTypeOptionObj.length-1;emptyCounter>0;emptyCounter --)
		instTypeOptionObj.options[emptyCounter]=null;
	
	
	instTypeOptionObj.options[0]=new Option('----- Select Type -----','Select Type');
	for(Counter=0;Counter < stateinsttypeArray.length;Counter++){
	
		if(stateinsttypeArray[Counter].state==selectedState){	 
		  instTypeOptionObj.options[indexCount]=new Option(stateinsttypeArray[Counter].instType,stateinsttypeArray[Counter].instType);
		  indexCount ++;
		 } 
		  
	 }
	  return true;
}

function submitSelectedStateInstType()
{
	var stateindex = document.getElementById('selStateName').selectedIndex;
	var instindex = document.getElementById('instTypeID').selectedIndex;
		
	if( stateindex==0 && instindex==0){
		alert("Select a State");
		return false;
	}else if( stateindex!=0 && instindex==0){
		alert("Select a Institution Type");
		return false;
	}else if( stateindex!=0 && instindex!=0){		
			document.frmSubmitSelectedStateInstType.stateName.value =  document.getElementById('selStateName').value ;	
			document.frmSubmitSelectedStateInstType.submit();
	}
	
}

function submitInstitution(instType){

    if( selectedinstID==null ){
    	alert("Select a "+instType);
    	return false;
    }
    else{
	
	document.frmSubmitSelectedInstitution.selectedInstID.value=selectedinstID;
	document.frmSubmitSelectedInstitution.submit();
    }
}

/*Moved To JSP
 * function backToInstitutionType(){
	document.frmSubmitSelectedInstitution.action="displayinstitutiontype.htm";
	document.frmSubmitSelectedInstitution.submit();

}*/

function backToInstitutions(){
	document.frmcategorysubmit.action="displayinstitutions.htm";
	document.frmcategorysubmit.submit();

}

function selectCategory(categoryID){
document.frmcategorysubmit.selectedCategoryID.value =categoryID;
var catObj = document.getElementById('Category');
catObj.disabled="disabled";
var index = catObj.selectedIndex;	
var catId = catObj.options[index].value;
	if(catId == 'Select')
	{
	alert("Select a valid Category");
	return false;
	}
var docPath = catIDCreditAccBranchArray[index-1].docpath;
document.frmcategorysubmit.selectedCategoryDocPath.value =docPath;
document.frmcategorysubmit.submit();

}

// this function hilights the row on clicking on a radio button
function onClickRadioInst(hitID, tableID,prefix)
{

	var setID = hitID.substring(2,hitID.length);
	var rowID = prefix + "r" + setID;
	hiliteRowInst(rowID, tableID,prefix);	   
}
// this function changes the row color on mouseover
function changeRowColorInst(rowID,evnt, tableID,prefix){
	
	
	hiliteRowInst(rowID,tableID,prefix);
	
	// if the row has been clicked, then select the corresponding radio button
	if(evnt == "click"){
			var radioID = prefix + "rd" + rowID.substring(2,rowID.length);
		updateRadioButtonsInst(radioID, tableID,prefix);
	}
}
// this function hilights a row on mouseover/click
function hiliteRowInst(rowID, tableID,prefix){
	tableObj = document.getElementById(tableID)
	var totRows = tableObj.rows;
	for (var i=0; i<totRows.length; ++i)
	{
		var trID = prefix + "r" + i;
		var trObj = new Object(document.getElementById(trID));
		var cName = trObj.className
		if( cName != 'selectedRow'){
			if(rowID == trID)
			{
				trObj.className = 'ActiveRow';
			}
			else
			{
				trObj.className = 'dActiveRow';
			}
		}
	}
}
// this function selects the radio button of a row that is clicked
function updateRadioButtonsInst(radioID, tableID,prefix){
	
	tableObj = document.getElementById(tableID)
	var totRows = tableObj.rows;
	for (var i=0; i<totRows.length; ++i){
		var tempID = prefix + "rd" + i;
		var radioObj = new Object(document.getElementById(tempID));
		
		if(tempID == radioID && radioObj.disabled == false){		
			selectRowInst(prefix + "r" + i, tableID,prefix);
		}
	} 
}
// this function selects a clicked row
function selectRowInst(rowID, tableID,prefix){
	tableObj = document.getElementById(tableID)
	var totRows = tableObj.rows;
	for (var i=0; i<totRows.length; ++i){
		var tempID = prefix + "r" + i;
		var trObj = new Object(document.getElementById(tempID));
		
		var tempradioID = prefix + "rd" + i;
		var radioObj = new Object(document.getElementById(tempradioID));
		
		if(tempID == rowID){
			trObj.className = 'selectedRow';
			//this will contain the id for the selected instutition.
			selectedinstID = radioObj.value;
			radioObj.checked = true;

		}else{
			trObj.className = 'dActiveRow';
			radioObj.checked = false;
			
		}
	}
}
// this function sets the row color to its default on mouseout
// if its not the selected row
function setDefaultColorInst(rowID){
	var trObj = new Object(document.getElementById(rowID));
	var cName = trObj.className;
	if( cName != 'selectedRow'){
		trObj.className = 'dActiveRow';
	}
} 

function OpenExcel(path)
{
    var catObj = document.getElementById('Category');
    var index = catObj.selectedIndex;	
	var feeDocPath = catIDCreditAccBranchArray[index-1].docpath;	
    var wind=window.open(path+feeDocPath,"Report","toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,menuBar=yes");
}

function closeWin() 
{
  if (wind && wind.open && !wind.closed) wind.close();
}

function setFeeHiddenValues( formName ){
var catObj = eval(formName+'.Category');
var index = catObj.selectedIndex;
var catID = catObj.options[index].value;
var catName = catObj.options[index].text;

	if(catID == 'Select')
	{
	alert("Select a Category");
	return false;
	}
var selcatID =  catIDCreditAccBranchArray[index-1].catID;
var selcreditaccno = catIDCreditAccBranchArray[index-1].creditaccno;
var selcreditbranch = catIDCreditAccBranchArray[index-1].creditbranch;

frmFeeParams.selectedCatID.value=selcatID;
frmFeeParams.selectedCatName.value=catName;
frmFeeParams.creditAccountNo.value=selcreditaccno;
frmFeeParams.creditBranchCode.value=selcreditbranch; 
 
//document.frmFeeParams.submit();
}

function validateCaptcha(formName,captchaValue)
{
	
	var captcha = $('#'+captchaValue).val();
	
	$.ajax({
		type : 'POST',
		dataType: 'text',
        url: 'validatecaptcha.htm',
        data : 'captchaVal='+captcha,
        success: function (data) {

	        if(data == 'success'){
	        	document.forms[formName].submit();
	   	    }else{
	   	   
	   	    alert('Please enter valid captcha');
	   	    	
	   	      document.getElementById("imageContainer").removeChild(document.getElementById("captchaImage"));
	   	      var newImg = document.createElement('img');
	   	      newImg.setAttribute('id',"captchaImage");
	   	      newImg.setAttribute('src',"./lockaccountcaptcha.htm?"+ new Date().getTime());
	   	      var div = document.getElementById('imageContainer');
	   	      div.appendChild(newImg);
			  
			  $('#'+captchaValue).val('');
	   	    	
	   	    }
        },
        error: function(data) {
            alert('error : '+data);
        }
    });
	
 }

function validateAndSubmitFeeParams(formName){
if(document.getElementById('validateMandatory') != null){
		var validateMandatory=eval(formName+'.validateMandatory');		
		if(validateMandatory.length==undefined)
			validateMandatory = new Array(eval(formName+'.validateMandatory'));
			
			
		for(i=0;i<validateMandatory.length;i++){
			
			var validations=validateMandatory[i].value.split('#SEP#');
			var controlObj = eval(formName+'.'+validations[0]);
			
			if(controlObj.value==''){
				if(validations[3]!=''&& validations[3]!='null')
					alert(validations[3]);
				else{
			
					if(controlObj.type.indexOf('select') != -1)
						alert("Select " + validations[1]);
					else
						alert("Enter " + validations[1]);
				}
				controlObj.focus();
				return false
			}
			if (validations[2]!=''&& validations[2]!='null')
			{
//			if (controlObj.value ==0)
//			{
//			if(validations[3]!=''&& validations[3]!='null')
//					alert(validations[3]);
//			else
//					alert("Enter " + validations[1]);
//				controlObj.focus();
//				return false
//			}
			if(controlObj.value!=''&& controlObj.value.search(validations[2])!=0){
				if(validations[3]!=''&& validations[3]!='null'){
					if(validations[2] == '(^[0-9a-zA-Z&_. /@-]{1,30}$)')
						alert(validations[3]);
					else{
						if(controlObj.value > 500000)
						  alert(validations[1] +" exceeds transaction Limit")
						else
						  alert(validations[3]); 
					}
				}
				else{
						alert("Enter " + validations[1]);
				}		
				controlObj.focus();
				return false
			}
			}
		}
	}	//End of Validating mandatory fields
	

	//Validating non-mandatory fields - start
	
	if(document.getElementById('validateNotMandatory') != null){
		var validateNotMandatory=eval(formName+'.validateNotMandatory');
		
		if(validateNotMandatory.length==undefined)
			validateNotMandatory = new Array(eval(formName+'.validateNotMandatory'));
			
		for(i=0;i<validateNotMandatory.length;i++){
			
			var validationsNotMand =validateNotMandatory[i].value.split('#SEP#');
			var controlObj = eval(formName+'.'+validationsNotMand[0]);
			if(controlObj.value =='' && validationsNotMand[2] != '(^[0-9a-zA-Z&_. /@-]{1,30}$)' && validationsNotMand[2] != '(^(\\d{1,8})(\\.[0-9][0-9])?$)'){
				alert(validationsNotMand[3]);
				return false;
			}
			if(controlObj.value!=''&& controlObj.value.search(validationsNotMand[2])!=0){
				if(validationsNotMand[3]!=''&& validationsNotMand[3]!='null')
				{
					if(validationsNotMand[2] == '(^[0-9a-zA-Z&_. /@-]{1,30}$)')
						alert(validationsNotMand[3]);
					else{
						if(controlObj.value > 500000)
						  alert(validationsNotMand[1] +" exceeds transaction Limit")
						else
						  alert(validationsNotMand[3]); 
					}
					controlObj.focus();
					return false;
				}
			}
			
			
		}
  	}
	
	//End - Validating non-mandatory fields
	/*//test - start
	
	if(document.getElementById('validateNotMandatory') != null){
		var validateNotMandatory=eval(formName+'.validateNotMandatory');		
		if(validateNotMandatory.length==undefined)
			validateNotMandatory = new Array(eval(formName+'.validateNotMandatory'));
			
		for(i=0;i<validateNotMandatory.length;i++){
			
			var validationsNotMand =validateNotMandatory[i].value.split('#SEP#');
			var controlObj = eval(formName+'.'+validationsNotMand[0]);
			alert(controlObj.type+controlObj.value);
			if(controlObj.value==''){
				if(validations[3]!=''&& validations[3]!='null')
					alert(validations[3]);
				else{
			
					if(controlObj.type.indexOf('select') != -1)
						alert("Select " + validations[1]);
					else
						alert("Enter " + validations[1]);
				}
				controlObj.focus();
				return false
			}
			if (validations[2]!=''&& validations[2]!='null')
			{
			if (controlObj.value ==0)
			{
			if(validations[3]!=''&& validations[3]!='null')
					alert(validations[3]);
			else
					alert("Enter " + validations[1]);
				controlObj.focus();
				return false
			}
			if(controlObj.value!=''&& controlObj.value.search(validations[2])!=0){
			if(validations[3]!=''&& validations[3]!='null')
					alert(validations[3]);
			else
					alert("Enter " + validations[1]);
				controlObj.focus();
				return false
			}
			}
			
			
		}
  }
	var test = confirm("proceed?");
	if(!test)
		return false
	//test - end*/	
		
		
		if(document.frmFeeParams.transactionRemarks.value != ""){
			
		if(!validatemain("frmFeeParams","transactionRemarks.alphanumerikcheck.remarks")){		
			document.frmFeeParams.transactionRemarks.focus();
			return false;
		}
	}
	

	var catObj = eval(formName+'.Category');
	var index = catObj.selectedIndex;
	var catID = catObj.options[index].value;


	if(catID == 'Select')
	{
	alert("Select a Category");
	return false;
	}
	if(document.frmFeeParams.cardFlag.value != 'true'){
		if(document.frmFeeParams.debitAccountNo.value == null || document.frmFeeParams.debitAccountNo.value == "")
		{
			alert("Select a Debit Account");
			return false;
		}
	}else{
		var dateOfBirth = document.frmFeeParams.dateOfBirth.value;
		var dte=new Date();
		var tdate=new Date(dte.toString().substring(4,10)+" "+ dte.getFullYear());
		var dob=dateOfBirth.split('/');
		var dateofb = new Date(dob[2],dob[1]-1,dob[0]);
		if(dateOfBirth==''){
			alert("Select date of Birth");
			return false;
		}
		else if(dateofb >= tdate){
			alert("Date of Birth should be less than current date");
			return false;
		}

	}	
	setFeeHiddenValues(formName);
}

function resetFeeParams(formName){

if(document.getElementById('validateMandatory') != null){
		var validateMandatory=eval(formName+'.validateMandatory');		
		if(validateMandatory.length==undefined)
			validateMandatory = new Array(eval(formName+'.validateMandatory'));
			
		for(i=0;i<validateMandatory.length;i++){
			
			var validations=validateMandatory[i].value.split('#SEP#');
			var controlObj = eval(formName+'.'+validations[0]);
			
			if(controlObj.type.indexOf('select') != -1){				
				controlObj.selectedIndex=0;		
			}			
			else if(controlObj.readOnly!=true){
			var etx = controlObj.readOnly;
				controlObj.value="";
			}
	}
  }

//alert("Not Mnadatory :" + document.getElementById('validateNotMandatory') );
if(document.getElementById('validateNotMandatory') != null){
		var validateNotMandatory=eval(formName+'.validateNotMandatory');		
		if(validateNotMandatory.length==undefined)
			validateNotMandatory = new Array(eval(formName+'.validateNotMandatory'));
			
		for(i=0;i<validateNotMandatory.length;i++){
			
			var validationsNotMand =validateNotMandatory[i].value.split('#SEP#');
			var controlObj = eval(formName+'.'+validationsNotMand[0]);
			
			if(controlObj.type.indexOf('select') != -1){				
				controlObj.selectedIndex=0;		
			}			
			else if(controlObj.readOnly!=true){
			var etx = controlObj.readOnly;
				controlObj.value="";
			}
		}
  }
  
}

//Added for Payment History tab
function SubmitPaymentDetails(frm)
{
	var strAC = frm.accountNo.value;
	if((strAC.length) != '11' && (strAC.length) != '17')
    {
	   alert("Account number should be 11 or 17 digits");
	   changeFromObj.accountNo.focus();
	   return ;
    }
    var frmdate=frm.fromDate.value;    
	var todate=frm.toDate.value;	
	var dateOfBirth = frm.dateOfBirth.value;
	var dte=new Date();
	var tdate=new Date(dte.toString().substring(4,10)+" "+ dte.getFullYear());
 	var strfromDate =frmdate.split('/'); 	
 	var strtoDate = todate.split('/'); 	
 	var dob=dateOfBirth.split('/');
 	var sdate=new Date(strfromDate[2],strfromDate[1]-1,strfromDate[0]); 	
	var edate = new Date(strtoDate[2],strtoDate[1]-1,strtoDate[0]);
	var dateofb = new Date(dob[2],dob[1]-1,dob[0]);
	/** For calculating the number of days between 2 dates - Begin **/
	var num_milli = 1000 * 60 * 60 * 24;
	var ms1 = sdate.getTime();
	var ms2 = edate.getTime();
	var diff = Math.abs(ms1 - ms2);
	var noOfDaysInBetween = Math.floor(diff/num_milli);	
if(frmdate==''){
			alert("Select the start date");
			return false;
	 }
else if(todate==''){
			alert("Select the end date");
			return false;
	 }
else if(dateOfBirth==''){
	alert("Select date of Birth");
	return false;
}

else if(sdate > tdate ){
		alert("Start date should be less than or equal to Current date");
		return false;
	}

else if(edate > tdate){
		alert("End date should be less than or equal to current date");
		return false;
	}
else if(dateofb >= tdate){
	alert("Date of Birth should be less than the current date");
	return false;
}
else if(sdate > edate){
		alert("End date should be greater than or equal to Start date");
		return false;
	}
else if (noOfDaysInBetween >= 365)
	{
		alert("Date range for payment history cannot exceed one year");
		return false;
	}
		/** For calculating the number of days between 2 dates - End **/	

	frm.action="suvidhaconfirmhistory.htm";	 
		frm.submit();
		return true;
}

//End - Retail
