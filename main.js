// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph");

function likeHeart(e) {
  let heart = e.target;
  console.log(heart);
  console.log(heart.innerText);
  mimicServerCall()
    .then(function(handleHeart) {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
        console.log(heart.classList);
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
        console.log(heart.classList);
        
      }
    })
    .catch(function(error){
      const errorMSG = document.querySelector("h2.hidden");
      console.log(errorMSG);
      errorMSG.classList.remove("hidden");
      const h2 = document.getElementById('modal').querySelector('h2');
      //const h2 = modal.querySelector('h2');
      setTimeout(function() {
        h2.classList.add('hidden');
      }, 3000);
    })
}

for (let glyph of articleHearts) {
  //console.log(glyph);
  glyph.addEventListener("click",likeHeart);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
