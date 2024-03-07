console.log(`GET ELEMENT by ID`);
const getElements = document.getElementById('details')
console.log(getElements.innerHTML);

console.log(`SElect an element using QUERYSELECTOR`);
// if we r navigation on id we use # 
// if we r navigating on class we use .
let anotherWay = document.querySelector('#details')
console.log(anotherWay);

// here we can access particular element
let anothrWay = document.querySelector('.techStack')
console.log(anothrWay);

// selectALL here we can get multiple elements by index value use what we want
 let newWay = document.querySelectorAll('.techStack')
 console.log(newWay[0]);

// changing the text of an element
const elementTechStackH3 = document.querySelector('.techStack');
elementTechStackH3.innerHTML = 'Complete Technology Stack is:';
// inner html is used to chage the text or string of the slelected query


// when i want to change attribute
const elementProfileLink = document.querySelector('#profileLink');
elementProfileLink.setAttribute('href', 'https://www.linkedin.com/');

//Changing style property of an element
// <h2 id="details"> My Profile details</h2>

const elementProfileDetails = document.getElementById('details');
elementProfileDetails.style.color = 'blue';
elementProfileDetails.style.fontFamily = 'Arial';
elementProfileDetails.style.fontSize = 'larger';

console.log(`==== Creating a new node ========`);

//const h2Element = document.createElement('h2');
//const textNodeStrength = document.createTextNode('Personal Strength');
//h2Element.appendChild(textNodeStrength);
//h2Element.style.color='CadetBlue';
//const strengthElement = document.querySelector('.strength');
//strengthElement.appendChild(h2Element);


console.log('===========removing element from parent===========');
let parent = document.querySelector('#div1')
let child = document.querySelector('#remove')
 parent.removeChild(child)
