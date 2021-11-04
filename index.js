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

const titleCased = () => {
  const modTutorials = tutorials.map(a => titleCaseString(a));
  function titleCaseString(str) {
    let modString = str[0].toUpperCase();
      for (let i = 1; i < str.length; i++) {
        if (str[i-1] == ' ') {
          modString = modString + str[i].toUpperCase();
        }
        else {
          modString = modString + str[i]
        }
      }
    // console.log(modString);
      return modString;


  }
  console.log(modTutorials);
  return modTutorials;
}


titleCased();
