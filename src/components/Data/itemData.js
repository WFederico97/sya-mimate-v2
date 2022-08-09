
export const data = [
    {
        id: 0,
        categoria: "Mates",
        nombre: "Camionero Standard",
        precio: 3900,
        stock: 15,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756979/Images/mateCamioneroStandard_sezmbd.jpg",
        descripcion: "Estos mates también son de calabaza pero a diferencia de la línea premium, en su forrado cuentan con cuero vaqueta lustrado, pintado y barnizado y terminados con una virola de aluminio. También los encontrarán en diferentes modelos, tamaños y colores."

    },
    {
        id: 1,
        categoria: "Mates",
        nombre: "Camionero Eco",
        precio: 1800,
        stock: 11,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756983/Images/mateEcoCamionero_omkqie.jpg",
        descripcion: "Estos mates, a diferencia del resto están fabricados bajo material plástico de alta densidad que mantiene la temperatura perfecta de tu mate por largas horas. Son una gran opción económica de nuestro catálogo y viene en diversas gamas de colores y tamaños."

    },
    {
        id: 2,
        categoria: "Mates",
        nombre: "Imperial Eco",
        precio: 5800,
        stock: 18,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756984/Images/mateImperialEco_wlpl2q.jpg",
        descripcion: "Contamos con una amplia variedad de mates de calabaza, entre los cuales van a encontrar de diferentes modelos, tamaños y colores. Los mismos están hechos con una calabaza seleccionada forrada con cuero y terminada con una virola de acero inoxidable."

    },
    {
        id: 3,
        categoria: "Mates",
        nombre: "Imperial Premium",
        precio: 8200,
        stock: 19,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756985/Images/mateImperialPremium_pdykyf.jpg",
        descripcion: "Contamos con una amplia variedad de mates de calabaza, entre los cuales van a encontrar de diferentes modelos, tamaños y colores. Los mismos están hechos con una calabaza seleccionada forrada con cuero y terminada con una virola de acero inoxidable."

    },
    {
        id: 4,
        categoria: "Mates",
        nombre: "Imperial Premium Cincelado",
        precio: 8800,
        stock: 10,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756984/Images/mateImperialPremiumCincelado_gzod81.webp",
        descripcion: "Contamos con una amplia variedad de mates de calabaza, entre los cuales van a encontrar de diferentes modelos, tamaños y colores. Los mismos están hechos con una calabaza seleccionada forrada con cuero y terminada con una virola de acero inoxidable."

    },
    {
        id: 5,
        categoria: "Accesorios",
        nombre: "Canasta Matera Premium",
        precio: 2500,
        stock: 4,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659757005/Images/materaCueroAccesorio_fon7n1.png"

    },
    {
        id: 6,
        categoria: "Bombillas",
        nombre: "Bombilla Pico del rey",
        precio: 1900,
        stock: 13,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756985/Images/picoDelReyBombilla_suonl6.jpg",
        descripcion: "Contamos con un gran stock tanto de bombillas Pico de Loro con baño de Alpaca como de otros estilos entre los que se destacan las bombillas chatas, las bombillas con aro de bronce y las bombillas 100% Alpaca. Dentro de las bombillas Pico de Loro ofrecemos una variedad clasificada en lisas o cinceladas, con pico corto o pico largo que pueden ser dorados o plateados."

    },
    {
        id: 7,
        categoria: "Termos",
        nombre: "Termo Alumnio sin manija",
        precio: 8000,
        stock: 20,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756989/Images/termoAluminionSinManija_uhyado.webp",
        descripcion: "Dentro de los Termos que ofrecemos, tenemos los Termos sin manija con doble capa de acero inoxidable, pico cebador y una capacidad de 1Lts."

    },
    {
        id: 8,
        categoria: "Yerbas",
        nombre: "Pindare",
        precio: 900,
        stock: 100,
        imagen: "https://res.cloudinary.com/dwyqyqadz/image/upload/v1659757003/Images/yerbaPindare_vmiig2.jpg",
        descripcion: "Yerbas de excelente calidad"

    }
]

export const getFetch = new Promise((res,rej)=>{
    let condition=true
    if(condition){
        setTimeout(()=>{
            res(data)
        },2000)
    }else{
        rej(console.log("no hay datos"))
    }
});

 export const getProductsByCategory=(categoryId)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data.filter(prod=>prod.cat===categoryId))
        },500)
    })
   } 



export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find(prod => prod.id == id))
        }, 500)
    })
  }
