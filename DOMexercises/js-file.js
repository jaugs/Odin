
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('div');
redText.classList.add('redText');
redText.style.cssText = 'color: red';
redText.textContent = "Hey I'm Red!";

container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.classList.add('blueText');
blueText.setAttribute('style', 'color: blue');
blueText.textContent = "I'm a Blue Header!";

container.appendChild(blueText);

const borderText = document.createElement('div');
borderText.classList.add('borderText');
borderText.style.cssText = 'background: pink; border: solid';
const header = document.createElement('h1');
header.classList.add('borderText');
header.textContent = "I'm a Div";
const alsoDiv = document.createElement('p');
alsoDiv.classList.add('borderText');
alsoDiv.textContent = "ME TOO!";

borderText.appendChild(header);
borderText.appendChild(alsoDiv);
container.appendChild(borderText);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  btn.addEventListener('click', alertFunction);

  btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });


const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText));


//   // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// });