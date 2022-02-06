const productos = [
    {
        "nombre":"Chori Perro",
        "descripcion":"Chorizo con pan, papas fritas, tosineta, queso, salsas al gusto.",
        "valor":7.500,
        "imagen":"http://drive.google.com/uc?export=view&id=1U20b-7SCwwit14kHZc9sWQ8m-iS-FAlr",
        "caracteristica":"comida"
    },
    {
        "nombre":"Perro caliente",
        "descripcion":"salchicha zenu, pan, papas fritas, tosineta, queso, salsa al gusto",
        "valor":7.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1sb6yENERNBHgHCg-PdL7m6gu6-pTLNeu",
        "caracteristica":"comida"
    },{
        "nombre":"Chorizo con arepa",
        "descripcion":"Arepa de maiz y chorizo a la brasa",
        "valor":3.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1gibEktDDVY6f6wOEFIxqmOlA0e3zaYAY",
        "caracteristica":"comida"
    },{
        "nombre":"Arepa de Huevo",
        "descripcion":"huevo, carne con ahogado",
        "valor":2.000,
        "imagen":"http://drive.google.com/uc?export=view&id=14R4sBR1WRoh34-wWKC2RZ-FZ325jSmyM",
        "caracteristica":"comida"
    },{
        "nombre":"Chicharron con arepa",
        "descripcion":"Trozos de chicharron carnudo y arepa de maiz",
        "valor":4.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1YIQ5gDKILamS3Vjh4fkq8dKxhl6_1CWW",
        "caracteristica":"comida"
    },{
        "nombre":"Pincho de Pollo",
        "descripcion":"Trozos de pollo sasonado, papa salada o arepa de maiz",
        "valor":3.500,
        "imagen":"http://drive.google.com/uc?export=view&id=1kSjr5-4VxAHTUIyLip_DA1Fd94ZMkzxb",
        "caracteristica":"comida"
    },{
        "nombre":"Pinchos de carne",
        "descripcion":"Trozos de carne sasonada acompañada de una papa salada",
        "valor":3.500,
        "imagen":"http://drive.google.com/uc?export=view&id=1YgezuyNbPVn4NC8ydxp_vlNuE8v8ib0G",
        "caracteristica":"comida"
    },{
        "nombre":"Empanadas de carne",
        "descripcion":"Carne desmechada, arroz, arveja y huevo",
        "valor":1.500,
        "imagen":"http://drive.google.com/uc?export=view&id=1Twiowkl3jrikbtOlwGj7p7EfjJD6Yz0V",
        "caracteristica":"comida"
    },{
        "nombre":"Empanadas de Pollo",
        "descripcion":"Pechuga desmechada acompañada de arroz y huevo",
        "valor":0,
        "imagen":"http://drive.google.com/uc?export=view&id=1L9B4Av65U37uKJYh7URLEw7jwy84rzbo",
        "caracteristica":"comida"
    },{
        "nombre":"Hamburguesa sencilla",
        "descripcion":"Porcion de carne, pan, tomate, lechuga, jamon, queso, papas fritas ",
        "valor":7.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1RzKatb6IwcZMM45D2aH60lheVTwElT_C",
        "caracteristica":"comida"
    },{
        "nombre":"Hamburguesa especial",
        "descripcion":"Carne zenu, pan, tomate, lechuga, jamon, doble queso, papas fritas ",
        "valor":8.000,
        "imagen":"http://drive.google.com/uc?export=view&id=11sF4NgaQpw71fqveuOL5L4WlL8yZIRfk",
        "caracteristica":"comida"
    },{
        "nombre":"Salchipapa",
        "descripcion":"Salchichas, papas a la francesa, queso y salsas al gusto",
        "valor":8.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1seAFhL_FOLuwoxL1kLh9s9Xfnz_abmgb",
        "caracteristica":"comida"
    },{
        "nombre":"Porcion de pizza",
        "descripcion":"Pregunta por el sabor del dia",
        "valor":6.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1WCRsV69P4dqwyHG5_fuwwCQ5vcxeJHqX",
        "caracteristica":"comida"
    },{
        "nombre":"Pizza Familiar",
        "descripcion":"Hawaiana, Ranchera, Mexicana, Pollo champiñones, Carnes",
        "valor":50.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1fFzpcRkzRcrVUXVxtjPTD1cY7V_Z0BAd",
        "caracteristica":"comida"
    },{
        "nombre":"Coca-Cola",
        "descripcion": "2.5 Lt",
        "valor":4.500,
        "imagen":"http://drive.google.com/uc?export=view&id=1mogP3FtN2XsoWOCs6uLzzHjoo6SSgCtT",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Colombiana",
        "descripcion":"2.5 Lt",
        "valor":4.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1LfAPHoTi4jw8v0adIHqw9CoU0NqWE1Pj",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Manzana",
        "descripcion":"2.25 Lt",
        "valor":4.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1RfUc-ReVieKHC0ATov40ErVbEBgSLsDl",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Colombiana personal",
        "descripcion":"3.50 ml",
        "valor":2.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1pGr5zLJo-AmxiU-1JBa6umTgb_gMxAnP",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Coca-Cola personal",
        "descripcion":"3.50 ml",
        "valor":2.300,
        "imagen":"http://drive.google.com/uc?export=view&id=1LjjYhzm8dv4N3lspkr-L2MUFAIW5Np3X",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Manzana personal",
        "descripcion":"3.50 ml",
        "valor":2.000,
        "imagen":"http://drive.google.com/uc?export=view&id=14GUfxDT7BonAdJP4NPeGPvL-vkP_Jt6E",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Fuze tea",
        "descripcion":"400 ml",
        "valor":2.300,
        "imagen":"http://drive.google.com/uc?export=view&id=16rL4IRgef_bKGgmWAQe8k7B1-m3CszD6",
        "caracteristica":"bebida"
    },
    {
        "nombre":"Agua",
        "descripcion":"300 ml",
        "valor":2.000,
        "imagen":"http://drive.google.com/uc?export=view&id=1d4_Mz8SIQqRqWy1Rm43aEVHVoYFGeuDy",
        "caracteristica":"bebida"
    },

]
export default productos;