
export const data = [
    {
        id: 0,
        categoria: "Mates",
        nombre: "Camionero Standard",
        precio: 3900,
        stock: 15,
        imagen: "./mateCamioneroStandard.jpg",
        descripcion: "Estos mates también son de calabaza pero a diferencia de la línea premium, en su forrado cuentan con cuero vaqueta lustrado, pintado y barnizado y terminados con una virola de aluminio. También los encontrarán en diferentes modelos, tamaños y colores."

    },
    {
        id: 1,
        categoria: "Mates",
        nombre: "Camionero Eco",
        precio: 1800,
        stock: 11,
        imagen: "./mateEcoCamionero.jpg",
        descripcion: "Estos mates, a diferencia del resto están fabricados bajo material plástico de alta densidad que mantiene la temperatura perfecta de tu mate por largas horas. Son una gran opción económica de nuestro catálogo y viene en diversas gamas de colores y tamaños."

    },
    {
        id: 2,
        categoria: "Mates",
        nombre: "Imperial Eco",
        precio: 5800,
        stock: 18,
        imagen: "./mateImperialEco.jpg",
        descripcion: "Contamos con una amplia variedad de mates de calabaza, entre los cuales van a encontrar de diferentes modelos, tamaños y colores. Los mismos están hechos con una calabaza seleccionada forrada con cuero y terminada con una virola de acero inoxidable."

    },
    {
        id: 3,
        categoria: "Mates",
        nombre: "Imperial Premium",
        precio: 8200,
        stock: 19,
        imagen: "./mateImperialPremium.jpg",
        descripcion: "Contamos con una amplia variedad de mates de calabaza, entre los cuales van a encontrar de diferentes modelos, tamaños y colores. Los mismos están hechos con una calabaza seleccionada forrada con cuero y terminada con una virola de acero inoxidable."

    },
    {
        id: 4,
        categoria: "Mates",
        nombre: "Imperial Premium Cincelado",
        precio: 8800,
        stock: 10,
        imagen: "./mateImperialPremiumCincelado.webp",
        descripcion: "Contamos con una amplia variedad de mates de calabaza, entre los cuales van a encontrar de diferentes modelos, tamaños y colores. Los mismos están hechos con una calabaza seleccionada forrada con cuero y terminada con una virola de acero inoxidable."

    },
    {
        id: 5,
        categoria: "Accesorios",
        nombre: "Canasta Matera Premium",
        precio: 2500,
        stock: 4,
        imagen: "./materaCueroAccesorio.png"

    },
    {
        id: 6,
        categoria: "Bombillas",
        nombre: "Bombilla Pico del rey",
        precio: 1900,
        stock: 13,
        imagen: "./picoDelReyBombilla.png",
        descripcion: "Contamos con un gran stock tanto de bombillas Pico de Loro con baño de Alpaca como de otros estilos entre los que se destacan las bombillas chatas, las bombillas con aro de bronce y las bombillas 100% Alpaca. Dentro de las bombillas Pico de Loro ofrecemos una variedad clasificada en lisas o cinceladas, con pico corto o pico largo que pueden ser dorados o plateados."

    },
    {
        id: 7,
        categoria: "Termos",
        nombre: "Termo Alumnio sin manija",
        precio: 8000,
        stock: 20,
        imagen: "./termoAluminionSinManija.jpg",
        descripcion: "Dentro de los Termos que ofrecemos, tenemos los Termos sin manija con doble capa de acero inoxidable, pico cebador y una capacidad de 1Lts."

    },
    {
        id: 8,
        categoria: "Yerbas",
        nombre: "Pindare",
        precio: 900,
        stock: 100,
        imagen: "./yerbaPindare.jpg",
        descripcion: "Yerbas de excelente calidad"

    }
]



// export const ProductsCategory = (categoryId) => {
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             res(data.filter(prod => prod.categoria === categoryId))
//             rej(console.log('ERROR EN BASE DE DATOS'))     
//         }, 2000)
//     })
// } 

// export const ProductsId = (itemId) => {
//     return new Promise((res, rej) => {
//         setTimeout (()=> {
//             res(data.find(producto => producto.id == itemId))
//         }, )
//     })
// }
