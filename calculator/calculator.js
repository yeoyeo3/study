var inputBox = document.getElementById("inputbox")
var historyValue = '';

inputBox.onkeydown = function(event) {
  var keyID = (event.which) ? event.which : event.keyCode;
  //if(( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) || keyID == 8 || keyID == 189 || keyID == 187 || keyID == 46 || keyID == 37 || keyID == 39){
  // }else{
  //   event.preventDefault();
  // }
  //- + * / ( ) . = 
  if(event.keyCode == 38) {
    inputBox.value = historyValue;
  }if(event.keyCode == 40) {
    inputBox.value = '';
  }
  if(event.keyCode == 13){
    var inputBoxValue = inputBox.value;

    var checkError = function(){
      var confirmInputErrorExec = /(\-+|\++|\*+|\/+|\.+){2}|(\-+){2}|(\++){2}|(\*+){2}|(\/+){2}|(\(+){2}|(\)+){2}|(\.+){2}|[|\-|\+|\*|\/|\(|\)|\.]$/g;
      var confirmInputError = confirmInputErrorExec.exec(inputBoxValue);
      if(confirmInputError !== null){
        alert('수식에 문제가 있습니다');
      }else{
        return true;
      }
      // if(confirmInputErrorExec.test(inputBoxValue)){
      //   alert('수식에 문제가 있습니다');
      // }else{
      //   return true;
      // }
    }

    var checkText = function(){
      var confirmInputValueExec = /[\d|\-|\+|\*|\/|\(|\)|\.|\=]+/g;
      var confirmInputValue = confirmInputValueExec.exec(inputBoxValue);
      if(confirmInputValue == inputBoxValue){
        return true;
      }else {
        alert('수식을 입력해 주세요');
        inputBox.value = '';
      }
    }

    var checkTextEqual = function(inputBoxValue){
      var inputBoxValue = inputBoxValue;
      var confirmTextEqualExec = /\=$/g;
      var confirmTextEqual = confirmTextEqualExec.exec(inputBoxValue);
      if(confirmTextEqual !== null){
        return inputBoxValue = inputBoxValue.slice(0, -1);
      }else{
        return inputBoxValue;
      }
      console.log(inputBoxValue);
    }

    if(checkText() == true && checkError() == true) {
      var inputBoxValue = checkTextEqual(inputBoxValue);
      var output = eval(inputBoxValue);

      // try{
      //   throw new Error(eval(inputBoxValue));
      // } catch(EvalError){
      //   alert('올바른 수식이 아닙니다.');
      // }

      inputBox.value = '';

      var history = document.getElementById("history");
      history.innerHTML += '<li>' + inputBoxValue + '=' + output + '</li>';
      history.scrollTop = history.scrollHeight;
      historyValue = inputBoxValue;
    }
  }
}

