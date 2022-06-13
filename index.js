const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 function titleCased(){
  
  const tutorialsCaps = tutorials.map(function (tutorial) {
    return  convertToCaps(tutorial) 
  });
   
   return tutorialsCaps

}
function convertToCaps(item){
  // const removeFirstCharacter=item.substring(1)
  // const capitalizeFirstCharacter = item.charAt(0);
  const capitalizedCharacter=item.toUpperCase()
  // const finalString=capitalizedCharacter+removeFirstCharacter;
  // console.log(finalString)
  return capitalizedCharacter;


}

titleCased()