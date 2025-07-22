const photos = document.getElementById('photos');

axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) => {
  let array = resp.data;
  for (let i = 0; i < array.length; i++) {
    photos.innerHTML += `<div class="col-12 col-md-6 col-lg-4 pt-4">
          <div class="card rounded-0">
            <div class="card-image m-3">
              <img class="position-absolute top-0 start-50 translate-middle" src="img/pin.svg" alt="">
              <img class="card-img-top rounded-0"
                src="${resp.data[i]['url']}" alt="">
            </div>
            <div class="card-body pt-0 pb-2">
              <p class="mb-2">${resp.data[i]['date']}</p>
              <h5>${resp.data[i]['title']}</h5>
            </div>
          </div>
        </div>`
  }

  const cards = document.querySelectorAll('.card-image');
  console.log(cards);

  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      event.preventDefault();

      console.log(cards)

      const overlay = document.getElementById('overlay');
      overlay.classList.remove('d-none');

      const close = document.getElementById('close');
      close.addEventListener('click', (event) => {
        event.preventDefault();

        overlay.classList.add('d-none');
      })

    })
  })

});
