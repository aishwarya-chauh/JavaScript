// JSON HAS ALL TYPES OF VALUES I.E STRING,OBJECT,BOOLEAN,NUMBER ETC..
// ON SERVER THE KEY VALUE ARE IN STRING FORMAT AS SHOWN IN BELOW EXAMPLE HENCE IT BECOMES DIFFICULT TO ACCESS THOSE VALUE
// HENCE WE CONVERT THEM INTO OBJECT INORDER TO EASY ACCESS
// BY USING "JSON.parse" which converts string into object





const productJSON = `{

    "id": 1,

    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",

    "price": 109.95,

    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",

    "category": "men's clothing",

    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    "rating": {

    "rate": 3.9,

    "count": 120

    }

}

`;

console.log(productJSON);

console.log(typeof productJSON);

const product = JSON.parse(productJSON); // here we convert string to object

console.log(`After Conversion from JSON String to Object`);

console.log(typeof product);

console.log(product);

console.log(product.price);

console.log(product.title);

 

console.log(`===============================`);

let developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true,

    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]

}

 

const jsonStrDeveloper = JSON.stringify(developer);

console.log(typeof jsonStrDeveloper);

console.log(jsonStrDeveloper);