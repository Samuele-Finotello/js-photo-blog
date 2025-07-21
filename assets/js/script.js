const photos = document.getElementById('photos');

axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) => {
  console.log(resp.data)
})
