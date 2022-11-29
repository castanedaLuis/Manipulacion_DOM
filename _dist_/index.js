
const url = "https://platzi-avo.vercel.app/api/avo";
const urlImage = "https://platzi-avo.vercel.app/"

const app = document.querySelector('#app')

//Delegación de eventos ---> tenemos eventon + propagación
app.addEventListener('click', (e) =>{
    if(e.target.nodeName === 'H3'){
        window.alert('Esto es Delegación de eventos --> se le delego solo a los titulos✅')
    }
})

//API para internacionalizar moneda o fechas 
const formaPriceIntl = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice
}

fetch(url)
    .then(respuesta => respuesta.json())
    .then(respuestaPura => {
        //Array
        const allItems = []
        respuestaPura.data.forEach(element => {
            //Crear img
            const img = document.createElement('img')
            img.src = urlImage + element.image
            img.style = 'border-radius: 50%;'
            //Crear titulo
            const title = document.createElement('h3')
            title.textContent = element.name
            title.className = 'text-xl text-red-600 mb-10 '

            //Descripción
            const description = document.createElement('p')
            description.textContent = element.attributes.description
            description.className = 'mb-10 text-xs'
            //crear precio
            const price = document.createElement('div')
            price.textContent = formaPriceIntl(element.price)//Agregando informacion al Nodo
            price.className = 'price text-gray-600 mb-5'
            //SKU
            const sku = document.createElement('apan')
            sku.textContent = `${'SKU: '}${element.sku}`
            sku.className = 'mb-3'

            const container = document.createElement('div')
            container.className = 'card mt-10 mb-10 flex flex-col items-center justify-center'
            container.append(img, title, description, sku, price)
            allItems.push(container)
            console.log(element)
        });

        app.append(...allItems)
    })
