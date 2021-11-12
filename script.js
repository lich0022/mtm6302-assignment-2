// let $emoji = document.getElementById('container')

// for (let i=129296; i<=129398; i++) {
//     $emoji.innerHTML += `<div> <p> &#${i}</p> <p>${i} </p> </div>`
    
// }

const box = document.getElementById('container')
const image = ['deirdre-corcoran-foote-oVzWeuKPdQQ-unsplash.jpg', 'alvan-nee-T-0EW-SEbsE-unsplash.jpg', 'andrew-lancaster-k34a6Yzt6A0-unsplash.jpg', 'bill-stephan-9LkqymZFLrE-unsplash.jpg', 'cristina-anne-costello-NR2eMg9zXxA-unsplash.jpg', 'elena-mozhvilo-UBe0cuOPLCI-unsplash.jpg', 'jametlene-reskp-VDrErQEF9e4-unsplash.jpg', 'joe-caione-qO-PIF84Vxg-unsplash.jpg', 'karsten-winegeart-IeT84oak7HQ-unsplash.jpg', 'lydia-torrey-AovflqCt9Ws-unsplash.jpg', 'mathis-jrdl-5yAhL8ViUVg-unsplash.jpg', 'sq-lim-k4vhuUHv08o-unsplash.jpg']

for (let i = 0; i <= 11; i++) {
    box.insertAdjacentHTML('afterbegin', `<img src= "images/${image[i]}" alt="" class="press">`);
  }

  box.addEventListener('click', function (c) {
      if (c.target.classList.contains('press')) {
          c.target.classList.toggle('increase')
      }
  })

  box.addEventListener('mouseover', function (c) {
    if (c.target.classList.contains('press')) {
        c.target.classList.toggle('grey')
    }
})

    //All images taken from unsplash.com
    //Completes Assignment