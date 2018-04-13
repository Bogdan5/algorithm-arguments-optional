
function addTogether() {
  var number=arguments[0];
  var undef;
  function oneArg(num){
    if (Number.isNaN(num)||num.constructor === Array){
          return undef;
    } else {
          return number+num;
    }
  }
  if (!isNaN(parseFloat(arguments[0])) && isFinite(arguments[0])){
    if (arguments.length===2){
      if (!isNaN(parseFloat(arguments[1])) && isFinite(arguments[1])&&(typeof arguments[1])!=='string'&&(arguments[1].constructor !== Array)){
        return arguments[0]+arguments[1];
      } else {
        return undef;
      }
      
     } else if (arguments.length===1) {
      return oneArg;
     }
  } else {
     return undef;
  }
}

addTogether(2)([3]);