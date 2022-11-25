// const getImagenPromesa = () => {
//   return new Promise((resolve, reject) => {
//     resolve('https://asasdd.com')
//   })
// }

// getImagenPromesa().then(console.log)

const getImagen = async () => {
  try {
    const apiKey = '1NIXRcdtHst4klw0cPqm3w6drSV8HPVm'
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = await resp.json()
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.log(error)
  }
}

getImagen()
