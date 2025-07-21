const photos = document.getElementById('photos');

for (let i = 0; i < 6; i++) {
  axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) => {
    photos.innerHTML += `<div class="col-4 pt-3">
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
  })
}
