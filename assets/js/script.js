const photos = document.getElementById('photos');

axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) => {
  let array = resp.data;
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    photos.innerHTML += `<div class="col-12 col-md-6 col-lg-4 pt-4">
          <div class="card rounded-0">
            <div class="card-image m-3">
              <img class="position-absolute top-0 start-50 translate-middle" src="img/pin.svg" alt="">
              <img class="card-img rounded-0 cursor-pointer"
                src="${resp.data[i]['url']}" alt="">
            </div>
            <div class="card-body pt-0 pb-2">
              <p class="mb-2">${resp.data[i]['date']}</p>
              <h5>${resp.data[i]['title']}</h5>
            </div>
          </div>
        </div>`
  }

  const cards = document.querySelectorAll('.card-img');

  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      event.preventDefault();

      console.log(card['src']);

      const overlay = document.getElementById('overlay');
      overlay.classList.remove('d-none');

      overlay.innerHTML = `<button class="position-absolute top-0 mt-5" id="close">Chiudi</button>
      <img class="hw-500" src="${card['src']}"
      alt="">`

      const close = document.getElementById('close');
      close.addEventListener('click', (event) => {
        event.preventDefault();

        overlay.classList.add('d-none');
        overlay.innerHTML = '';
      })

    })
  })


});
