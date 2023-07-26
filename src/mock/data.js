const list = [
  {
    id: "01",
    category: "comida",
    name: "Picada",
    stock: 25,
    price: 1200,
    description:
      "Embutiods de exportación para disfrutar de una picada con amigos ",
    img: "https://i.postimg.cc/k4gTHfsT/picada.jpg",
  },
  {
    id: "02",
    category: "comida",
    name: "Entrada",
    stock: 20,
    price: 2400,
    description: "Variedad de entradas día a día, consulta la carta",
    img: "https://i.postimg.cc/sgK1Q4tz/entrada.jpg",
  },
  {
    id: "03",
    name: "Pastas",
    category: "comida",
    stock: 20,
    price: 800,
    description: "Pastas caseras con las mejores salsas ",
    img: "https://i.postimg.cc/fyXJVnhq/pastas.jpg",
  },
  {
    id: "04",
    name: "Plato del dia",
    category: "comida",
    stock: 40,
    price: 500,
    description: "Consultá la carta semanal de variedades ",
    img: "https://i.postimg.cc/m2fP0DQv/plato-del-dia.jpg",
  },
  {
    id: "05",
    name: "Parrillada",
    category: "comida",
    stock: 10,
    price: 500,
    description: "Las mejores carnes argentinas ",
    img: "https://i.postimg.cc/8krFKWrd/parrillada.jpg",
  },
  {
    id: "06",
    name: "Sushi",
    category: "comida",
    stock: 15,
    price: 500,
    description: "Barco de sushi 40 pcs",
    img: "https://i.postimg.cc/hGYpP6fW/sushi.jpg",
  },
  {
    id: "07",
    name: "Volcan de chocolate",
    category: "postre",
    stock: 20,
    price: 1500,
    description: "Variedad de postres europeos",
    img: "https://i.postimg.cc/cJbHT4x5/volcan-de-chocolate.jpg",
  },
  {
    id: "08",
    name: "Café",
    category: "cafe",
    stock: 30,
    price: 500,
    description: "Café de autor",
    img: "https://i.postimg.cc/02Yzxsnb/cafe.jpg",
  },
  {
    id: "09",
    name: "Capuchino",
    category: "cafe",
    stock: 30,
    price: 1500,
    description: "Capuchino estilo italiano",
    img: "https://i.postimg.cc/MG01Y8CT/capuchino.jpg",
  },
  {
    id: "10",
    name: "Caramel-Machiato",
    category: "cafe",
    stock: 30,
    price: 1300,
    description: "latte machiato al caramelo",
    img: "https://i.postimg.cc/mk3rrxZm/caramel-machiato.jpg",
  },
  {
    id: "11",
    name: "Postre Vigilante",
    category: "postre",
    stock: 20,
    price: 900,
    description: "queso, dulce de batata y membrillo",
    img: "https://i.postimg.cc/Ss9MTb23/Postre-vigilante.jpg",
  },
  {
    id: "12",
    name: "Copa Helada",
    category: "postre",
    stock: 20,
    price: 900,
    description: "helado,crocante de praline, chocolate",
    img: "https://i.postimg.cc/hPq7PGh5/copa-Helada.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("no hay data");
      } else resolve(list);
    }, 2000);
  });
};
 export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
 }