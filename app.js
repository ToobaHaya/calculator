function getNum(num) {
    console.log(num)
    document.getElementById('result').value += num;

}

function clearscr() {
    document.getElementById('result').value = "";

}

function removeNumb() {
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1)
}

function getResults() {
  
    var currentValue = document.getElementById('result').value;
        var convertedValue = currentValue
          .replace("×", "*")
          .replace("÷", "/")
          .replace('%', '*0.01')
          .replace('sin', 'Math.sin')
          .replace('cos', 'Math.cos')
          .replace('cot', 'Math.atan')
          .replace('^', 'Math.pow')
          .replace('π', 'Math.PI')
          .replace('log', 'Math.log')
          .replace('e', 'Math.E')
          .replace('tan', 'Math.tan')
          .replace('√', 'Math.sqrt')
          .replace('sec','Math.acos')
          .replace('cosec', 'Math.asin')
       
        console.log('convertedValue:', convertedValue)
      document.getElementById('result').value = eval(convertedValue);
       
}