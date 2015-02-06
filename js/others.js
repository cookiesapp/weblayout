




function toggleStatus() {
if ($('#toggleElement').is(':checked')) {
$('#elementsToOperateOn :input').removeAttr('disabled');
} else {
$('#elementsToOperateOn :input').attr('disabled', true);
}
}

document.createElement('video');document.createElement('audio');document.createElement('track');


function toggleStatus1() {
if ($('#toggleElement1').is(':checked')) {
$('#elementsToOperateOn1 :input').removeAttr('disabled');
} else {
$('#elementsToOperateOn1 :input').attr('disabled', true);
}
}

function toggleStatus2() {
if ($('#toggleElement2').is(':checked')) {
$('#elementsToOperateOn2 :input').removeAttr('disabled');
} else {
$('#elementsToOperateOn2 :input').attr('disabled', true);
}
}

function toggleStatus3() {
if ($('#toggleElement3').is(':checked')) {
$('#elementsToOperateOn3 :input').removeAttr('disabled');
} else {
$('#elementsToOperateOn3 :input').attr('disabled', true);
}
}





$(document).ready(function(){
  
    var counter = 2;
  
    $("#addButton").click(function () {
  
    if(counter>10){
            alert("Only 10 links allow");
            return false;
    }  
  
    var newTextBoxDiv = $(document.createElement('div'))
         .attr("id", 'TextBoxDiv' + counter);
  
    newTextBoxDiv.after().html('<label>Link '+ counter + ' : </label>' +
          '<input class="form-control" type="text" name="textbox' + counter +
          '" id="textbox' + counter + '" value="" >');
  
    newTextBoxDiv.appendTo("#TextBoxesGroup");
  
  
    counter++;
     });
  
     $("#removeButton").click(function () {
    if(counter==1){
          alert("No more textbox to remove");
          return false;
       }  
  
    counter--;
  
        $("#TextBoxDiv" + counter).remove();
  
     });
  
     $("#getButtonValue").click(function () {
  
    var msg = '';
    for(i=1; i<counter; i++){
      msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
    }
          alert(msg);
     });
     
     
  });