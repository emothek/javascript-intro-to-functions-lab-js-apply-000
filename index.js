function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

 

function logShout(string){
  const spy = shout(string)
  console.log(spy);
}

function logWhisper(string){
  const spy = whisper(string);
  console.log(spy);
}

function sayHiToGrandma(string){
  var uppercase = "HELLO!";
  var lowercase = "hello!"
  if(string.toUpperCase() === uppercase){
    return "YES INDEED.";
  }else if(string.toLowerCase() === lowercase){
    return "I can\'t hear you.";
  }
}