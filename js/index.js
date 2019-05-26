// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(clickEvent)
{
  alert('I was clicked!');
});

// const input = document.querySelector('input');
//
// input.addEventListener('keydown', function(keydownEvent)
// {
//   console.log(keydownEvent.key);
// });

const noGInput = document.querySelector('input');

noGInput.addEventListener('keydown', function(keydownEvent)
{
  // if (keydownEvent.key === "g")
  if (keydownEvent.key === "G" || keydownEvent.key === "g")
  {
    return keydownEvent.preventDefault();
  }
  else
  {
    console.log(keydownEvent.key);
  }
});

let divs = document.querySelectorAll('div');

function bubble(event)
{
  // stop! that! propagation!
  event.stopPropagation();
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled'); // trim() trims any whitespace from both ends of a string.
}

for (let i = 0; i < divs.length; i++)
{
  divs[i].addEventListener('click', bubble);
}

function capture(event)
{
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
