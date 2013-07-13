
function Randomize() {

  var each = 1 / arguments.length;

  for( var i = 0; i < arguments.length; i++ ) {
    
    var rand = Math.random(),
        last = arguments.length - 1;
    if( i == 0 && rand < each ) return arguments[0]();
    if( i == last && rand > each * i ) return arguments[i]();
    if( rand <= each * i && each * i < each * i+1 ) return arguments[i]();

  }

}