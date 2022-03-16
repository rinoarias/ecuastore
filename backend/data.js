import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Rino',
      email: 'admin@ecuastore.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jeandavid',
      email: 'jean@ecuastore.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
    },
    {
      name: 'Duval',
      email: 'duval@ecuastore.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
    },
    {
      name: 'Tommy',
      email: 'tommy.apolinario2018@uteq.edu.ec',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image:
        'https://res.cloudinary.com/rinoarias/image/upload/v1647100520/glpceltbpt7fdbtsmmwz.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 0, //4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image:
        'https://res.cloudinary.com/rinoarias/image/upload/v1647100520/glpceltbpt7fdbtsmmwz.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 0, //4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image:
        'https://res.cloudinary.com/rinoarias/image/upload/v1647100520/glpceltbpt7fdbtsmmwz.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 0, //4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image:
        'https://res.cloudinary.com/rinoarias/image/upload/v1647100520/glpceltbpt7fdbtsmmwz.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 0, //4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '5',
      name: 'Monitor Asus Tuf Gaming 24pulg',
      slug: 'monitor-asus-tuf-gaming-24pulg',
      category: 'Electronicos',
      image: '/images/p5.jpg',
      price: 350,
      countInStock: 10,
      brand: 'ASUS',
      rating: 0, //4.0,
      numReviews: 10,
      description: 'Monitor gamer Asus Tuf de 24plg 144hz nuevo',
    },
    {
      //_id: '6',
      name: 'Audífonos in ear inalámbricos',
      slug: 'audifonos-in-ear-inalambricos',
      category: 'Electronicos',
      image: '/images/p6.jpg',
      price: 50,
      countInStock: 5,
      brand: 'Huawei',
      rating: 0, //4.8,
      numReviews: 17,
      description:
        'Audífonos in ear inalámbricos Huawei FreeBuds 4i carbon black',
    },

    {
      //_id: '7',
      name: 'Cigarrera Con Encendedor Electrónico',
      slug: 'cigarrera-con-encendedor-electronico',
      category: 'Electronicos',
      image: '/images/p7.jpg',
      price: 20,
      countInStock: 100,
      brand: 'Blynd',
      rating: 0, //4.8,
      numReviews: 18,
      description:
        'Cigarrera con encendedor electrónico usb arco plasma 2 En 1',
    },
    {
      //_id: '8',
      name: 'Laptop Lenovo IdeaPad D330-10IGL',
      slug: 'laptop-lenovo-ideapad-d330-10Igl',
      category: 'Electronicos',
      image: '/images/p8.jpg',
      price: 250,
      countInStock: 11,
      brand: 'LENOVO',
      rating: 0, //4.8,
      numReviews: 184,
      description: 'Laptop Lenovo IdeaPad D330-10IGL mineral gray táctil 10plg',
    },
    {
      //_id: '9',
      name: 'Jarra eléctrica Taurus Caronte plateada 1.8L',
      slug: 'jarra-electrica-taurus-caronte-plateada-1.8l',
      category: 'Electronicos',
      image: '/images/p9.jpg',
      price: 17,
      countInStock: 19,
      brand: 'TAURUS',
      rating: 0, //3.1,
      numReviews: 185,
      description:
        'Jarra eléctrica Taurus Caronte plateada 1.8L Agua Caliente al Instante!',
    },

    {
      //_id: '10',
      name: 'Aspiradora Truper ASP-06 23L',
      slug: 'aspiradora-truper-asp-06 23l',
      category: 'Electronicos',
      image: '/images/p10.jpg',
      price: 55,
      countInStock: 17,
      brand: 'Truper',
      rating: 0, //4.5,
      numReviews: 14,
      description: 'Aspiradora Truper ASP 06 23L naranja negra-120V',
    },
    {
      //_id: '11,
      name: 'Huawei Watch GT 2e 1.39pulgas',
      slug: 'huawei-watch-gt-2e-1.39pulgadas',
      category: 'Electronicos',
      image: '/images/p11.jpg',
      price: 22,
      countInStock: 19,
      brand: 'Huawei',
      rating: 0, //4.2,
      numReviews: 15,
      description:
        'Huawei Watch GT-2e-1.3plg caja 46mm de metal y plástico black stainless steel',
    },
    {
      //_id: '12',
      name: 'Amazon Fire TV Stick Lite de voz Full HD 8GB',
      slug: 'amazon-fire-tv-stick-lite-de-voz-full-hd-8gb',
      category: 'Electronicos',
      image: '/images/p12.jpg',
      price: 13,
      countInStock: 90,
      brand: 'AMAZON',
      rating: 0, //4.1,
      numReviews: 18,
      description:
        'Amazon Fire TV Stick Lite de voz Full HD 8GB negro con 1GB de memoria RAM',
    },

    {
      //_id: '13',
      name: 'Control joystick inalámbrico Microsoft Xbox Wireless',
      slug: 'control-joystick-inalambrico-microsoft-xbox-wireless',
      category: 'Electronicos',
      image: '/images/p13.jpg',
      price: 35,
      countInStock: 13,
      brand: 'Microsoft',
      rating: 0, //4.0,
      numReviews: 25,
      description:
        'Control joystick inalámbrico Microsoft Xbox Wireless Controller Series X|S robot white',
    },
    {
      //_id: '14',
      name: 'Impresora a color simple función Epson',
      slug: 'impresora-a-color-simple-función-epson',
      category: 'Electronicos',
      image: '/images/p14.jpg',
      price: 66,
      countInStock: 35,
      brand: 'EPSON',
      rating: 0, //3.8,
      numReviews: 11,
      description:
        'Impresora a color simple función Epson EcoTank L1210 negra 110V',
    },
    {
      //_id: '15',
      name: 'Tablet Samsung Galaxy Tab A7 Lite',
      slug: 'tablet-samsung-galaxy tab-a7-lite',
      category: 'Electronicos',
      image: '/images/p15.jpg',
      price: 105,
      countInStock: 55,
      brand: 'Samsung',
      rating: 0, //5.0,
      numReviews: 118,
      description:
        'Tablet Samsung Galaxy Tab A7 Lite with Book Cover SM-T220 8.7plg 32GB gris 3GB de memoria RAM',
    },

    // Categoría moda

    {
      //_id: '16',
      name: 'Sudadera con capucha para hombre',
      slug: ' sudadera-con-capucha-para-hombre',
      category: 'Moda',
      image: '/images/p16.jpg',
      price: 30,
      countInStock: 10,
      brand: 'Wielsscca',
      rating: 0, //3.0,
      numReviews: 20,
      description:
        'Material: poliéster. Sudadera con capucha para hombre con forro polar. Cálido, suave y ligero, adecuado para otoño o invierno',
    },
    {
      //_id: '17',
      name: 'Amazon Essentials polo de golf',
      slug: 'amazon-essentials-polo-de-golf',
      category: 'Moda',
      image: '/images/p17.jpg',
      price: 15.6,
      countInStock: 13,
      brand: 'Amazon Essentials',
      rating: 0, //4.5,
      numReviews: 11,
      description: 'Un corte clásico hecho de poliester para golf',
    },
    {
      //_id: '18',
      name: 'Chamarra Vini Piel Moderna',
      slug: 'chamarra-vini-piel-moderna',
      category: 'Moda',
      image: '/images/p18.jpg',
      price: 11.6,
      countInStock: 19,
      brand: 'Roosevelt',
      rating: 0, //4.5,
      numReviews: 15,
      description: 'Preciosa Chamarra de vini piel tipo Biker de hombre',
    },

    {
      //_id: '19',
      name: 'Chamarra De Mezclilla Deslavada Con Botones',
      slug: 'chamarra-de-mezclilla-deslavada-con-botones',
      category: 'Moda',
      image: '/images/p19.jpg',
      price: 9.7,
      countInStock: 2,
      brand: 'Deus',
      rating: 0, //3.5,
      numReviews: 58,
      description: 'Chamarra De Mezclilla Deslavada Con Botones Clasica Hombre',
    },
    {
      //_id: '20',
      name: 'Chamarra Bomber Afelpada',
      slug: 'chamarra-bomber-afelpada',
      category: 'Moda',
      image: '/images/p20.jpg',
      price: 7.8,
      countInStock: 29,
      brand: 'Neko',
      rating: 0, //4.9,
      numReviews: 8,
      description: 'Chamarra Bomber Afelpada Forro En Peluche Suave Calientita',
    },
    {
      //_id: '21',
      name: 'Mochila Mujer Moda Impermeable',
      slug: 'mochila-mujer-moda-impermeable',
      category: 'Moda',
      image: '/images/p21.jpg',
      price: 17.1,
      countInStock: 29,
      brand: 'ET easytao',
      rating: 0, //4.7,
      numReviews: 17,
      description: 'Mochila Mujer Moda Impermeable Antirrobo Bolsa Para Mujer',
    },

    {
      //_id: '22',
      name: 'Botas De Vestir Casuales Para Caballero',
      slug: 'botas-de-vestir-casuales-para-caballero',
      category: 'Moda',
      image: '/images/p22.jpg',
      price: 17.1,
      countInStock: 19,
      brand: 'Erez',
      rating: 0, //4.1,
      numReviews: 177,
      description:
        'Botas De Vestir Casuales Para Caballero impermeable y antiraspaduras',
    },
    {
      //_id: '23',
      name: 'Tenis Converse M9160c Caña Alta Clásico Negro Unisex',
      slug: 'tenis-converse-m9160c-caña-alta-clasico-negro-unisex',
      category: 'Moda',
      image: '/images/p23.jpg',
      price: 13.15,
      countInStock: 9,
      brand: 'Converse',
      rating: 0, //4.7,
      numReviews: 1754,
      description:
        'Tenis Converse M9160c Caña Alta Clásico Negro Unisex alto Estilo y sutil',
    },
    {
      //_id: '24',
      name: 'Tenis Deportivos De Malla Transpirable Para Mujer',
      slug: 'tenis-deportivos-de-malla-transpirable-para-mujer',
      category: 'Moda',
      image: '/images/p24.jpg',
      price: 10.59,
      countInStock: 91,
      brand: 'Maxshow',
      rating: 0, //4.2,
      numReviews: 14,
      description: 'Tenis Deportivos De Malla Transpirable Para Mujer',
    },

    {
      //_id: '25',
      name: 'Playera Levis Hombre',
      slug: 'playera-levis-hombre',
      category: 'Moda',
      image: '/images/p25.jpg',
      price: 15.19,
      countInStock: 38,
      brand: 'Levis',
      rating: 0, //4.5,
      numReviews: 84,
      description: 'Tenis Deportivos De Malla Transpirable Para Mujer',
    },
    {
      //_id: '26',
      name: 'Saco De Boxeo Profesional',
      slug: 'saco-de-boxeo-profesional',
      category: 'Deportes',
      image: '/images/p26.jpg',
      price: 55.98,
      countInStock: 27,
      brand: 'Dayshine',
      rating: 0, //5.0,
      numReviews: 54,
      description:
        'Saco De Boxeo Profesional De Boxeo Alta Capacidad De 120 Cm',
    },
    {
      //_id: '27',
      name: 'Careta De Boxeo',
      slug: 'careta-de-boxeo',
      category: 'Deportes',
      image: '/images/p27.jpg',
      price: 5.98,
      countInStock: 2,
      brand: 'Gonzo',
      rating: 0, //3.3,
      numReviews: 84,
      description: 'Careta De Boxeo Profesional Alta Densidad',
    },

    {
      //_id: '28',
      name: 'Kit De Pesas Barra Recta',
      slug: 'kit-de-pesas-barra-recta',
      category: 'Deportes',
      image: '/images/p28.jpg',
      price: 55.84,
      countInStock: 4,
      brand: 'Altera',
      rating: 0, //4.3,
      numReviews: 84,
      description:
        'Kit de Pesas Barra Recta, Barra Z, Par de Mancuernas, Discos 70LBS Combo No.1',
    },
    {
      //_id: '29',
      name: 'Guante Portero Rinat The Boss',
      slug: 'guante-portero-rinat-the-boss',
      category: 'Deportes',
      image: '/images/p29.jpg',
      price: 17.11,
      countInStock: 25,
      brand: 'Rinat',
      rating: 0, //4.7,
      numReviews: 81,
      description:
        'Guante Portero Rinat The Boss Alpha Adulto latex super suave',
    },
    {
      //_id: '30',
      name: 'Bicicleta fija Altera Spal ALT550-6',
      slug: 'bicicleta-fija-altera-spal-alt550-6',
      category: 'Deportes',
      image: '/images/p30.jpg',
      price: 14.19,
      countInStock: 5,
      brand: 'Feita',
      rating: 0, //4.9,
      numReviews: 91,
      description:
        'Bicicleta fija Altera Spal ALT550-6 para spinning gris y negra',
    },

    {
      //_id: '31',
      name: 'Patines Profesionales',
      slug: 'patines-profesionales',
      category: 'Deportes',
      image: '/images/p31.jpg',
      price: 18.21,
      countInStock: 53,
      brand: 'Blazer',
      rating: 0, //4.3,
      numReviews: 9,
      description: 'Patines Profesionales portapatines envio regalo Gratis',
    },
    {
      //_id: '32',
      name: 'Mountain bike Mercurio MTB',
      slug: 'mountain-bike-mercurio-mtb',
      category: 'Deportes',
      image: '/images/p32.jpg',
      price: 18.21,
      countInStock: 3,
      brand: 'Mercurio',
      rating: 0, //4.1,
      numReviews: 3,
      description: 'Mountain bike Mercurio MTB Recreacion Ranger pro 2020 R29',
    },
    {
      //_id: '33',
      name: 'Par Mancuernas Pesas Hexagonal',
      slug: 'par-mancuernas-pesas-hexagonal',
      category: 'Deportes',
      image: '/images/p33.jpg',
      price: 38.21,
      countInStock: 2,
      brand: 'Bodyfit',
      rating: 0, //4.9,
      numReviews: 9,
      description: 'Par Mancuernas Pesas Hexagonal Recubierta 20lb 9.07kgs',
    },

    {
      //_id: '34',
      name: 'Bandas Elasticas De Resistencia',
      slug: 'bandas-elasticas-de-resistencia',
      category: 'Deportes',
      image: '/images/p34.jpg',
      price: 33.2,
      countInStock: 2,
      brand: 'AM7',
      rating: 0, //2.9,
      numReviews: 15,
      description:
        'Bandas Elasticas De Resistencia Ejercicios Kit De 11 Piezas',
    },
    {
      //_id: '35',
      name: 'Caminadora electrica Altera CE-5420',
      slug: 'caminadora-electrica-altera-ce-5420',
      category: 'Deportes',
      image: '/images/p35.jpg',
      price: 89.27,
      countInStock: 55,
      brand: 'Altera',
      rating: 0, //3.9,
      numReviews: 14,
      description: 'Caminadora electrica Altera CE CE-5420 110V Color Blanco',
    },

    {
      //_id: '36',
      name: 'Capa Profesional Para Barberia',
      slug: 'capa-profesional-para-barberia',
      category: 'articulos de belleza',
      image: '/images/p36.jpg',
      price: 8.27,
      countInStock: 5,
      brand: 'puntabelleza',
      rating: 0, //3.5,
      numReviews: 10,
      description: 'Capa Profesional Para Barberia, Salon, Estetica Negra',
    },

    {
      //_id: '37',
      name: 'Set Tijeras Peines Estetica Profesional',
      slug: 'set-tijeras-peines-estetica-profesional',
      category: 'articulos de belleza',
      image: '/images/p37.jpg',
      price: 7.27,
      countInStock: 17,
      brand: 'IMPORTEEK',
      rating: 0, //4.5,
      numReviews: 100,
      description: 'Set Tijeras Peines Estetica Profesional Estilista Barbero',
    },
    {
      //_id: '38',
      name: 'Lampara Lupa Pedestal',
      slug: 'lampara-lupa-ledestal',
      category: 'articulos de belleza',
      image: '/images/p38.jpg',
      price: 9.17,
      countInStock: 15,
      brand: 'Kingsman',
      rating: 0, //4.1,
      numReviews: 19,
      description: 'Set Tijeras Peines Estetica Profesional Estilista Barbero',
    },
    {
      //_id: '39',
      name: 'Caja Almacenadora De Cosmeticos',
      slug: 'caja-almacenadora-de-cosmeticos',
      category: 'articulos de belleza',
      image: '/images/p39.jpg',
      price: 19.1,
      countInStock: 11,
      brand: 'Kinkete',
      rating: 0, //4.7,
      numReviews: 9,
      description: 'Caja Almacenadora De Cosméticos Y Artículos De Belleza',
    },

    {
      //_id: '40',
      name: 'Exfoliante De Lavanda',
      slug: 'exfoliante-de-lavanda',
      category: 'articulos de belleza',
      image: '/images/p40.jpg',
      price: 9.1,
      countInStock: 110,
      brand: 'VerdeUrbano',
      rating: 0, //4.5,
      numReviews: 97,
      description: 'Exfoliante De Lavanda mas 1 Manteca De Magnesio',
    },
    {
      //_id: '41',
      name: 'Carrito Estetica Auxiliar',
      slug: 'carrito-estetica-auxiliar',
      category: 'articulos de belleza',
      image: '/images/p41.jpg',
      price: 29.8,
      countInStock: 18,
      brand: 'Nanofort',
      rating: 0, //2.9,
      numReviews: 7,
      description: 'Carrito Estetica Auxiliar Carro Salon Belleza Barbería',
    },
    {
      //_id: '42',
      name: 'Lavacabeza Portatil Lavabo',
      slug: 'lavacabeza-portatil-lavabo',
      category: 'articulos de belleza',
      image: '/images/p42.jpg',
      price: 49.88,
      countInStock: 187,
      brand: 'Letmex',
      rating: 0, //4.9,
      numReviews: 784,
      description: 'Lavacabeza Portatil Lavabo Tarja Salon De Belleza',
    },

    {
      //_id: '43',
      name: 'Manguera Para Lavacabezas De Estetica',
      slug: 'manguera-para-lavacabezas-de-estetica',
      category: 'articulos de belleza',
      image: '/images/p43.jpg',
      price: 21.11,
      countInStock: 108,
      brand: 'Puntabelleza',
      rating: 0, //3.7,
      numReviews: 24,
      description: 'Manguera Para Lavacabezas De Estetica mas baberia mas Spa',
    },
    {
      //_id: '44',
      name: 'Cepillo De Limpieza De Cortes De Cabello',
      slug: 'cepillo-de-limpieza-de-cortes-de-cabello',
      category: 'articulos de belleza',
      image: '/images/p44.jpg',
      price: 21.11,
      countInStock: 108,
      brand: 'PBelleza',
      rating: 0, //4.7,
      numReviews: 28,
      description: 'Cepillo De Limpieza De Cortes De Cabello Degradados Gold',
    },
    {
      //_id: '45',
      name: 'Triko Juego De Cepillos Para Belleza',
      slug: 'triko-juego-de-cepillos-para-belleza',
      category: 'articulos de belleza',
      image: '/images/p45.jpg',
      price: 21.11,
      countInStock: 108,
      brand: 'PBelleza',
      rating: 0, //4.7,
      numReviews: 28,
      description: 'Cepillo De Limpieza De Cortes De Cabello Degradados Gold',
    },

    {
      //_id: '46',
      name: 'Pure De Papa Verde Valle',
      slug: 'pure-de-papa-verde-valle',
      category: 'Alimentos',
      image: '/images/p46.jpg',
      price: 1.11,
      countInStock: 108,
      brand: 'Verde Valle',
      rating: 0, //5.0,
      numReviews: 29,
      description: 'Pure De Papa Verde Valle',
    },
    {
      //_id: '47',
      name: 'Arroz Para Sushi 700 G Satoru',
      slug: 'arroz-para-sushi-700-g-satoru',
      category: 'Alimentos',
      image: '/images/p47.jpg',
      price: 3.21,
      countInStock: 18,
      brand: 'satoru',
      rating: 0, //5.0,
      numReviews: 29,
      description: 'Arroz Para Sushi 700 G Satoru',
    },
    {
      //_id: '48',
      name: 'Salsa Teriyaki Yukai Botella',
      slug: 'salsa-teriyaki-yukai-botella',
      category: 'Alimentos',
      image: '/images/p48.jpg',
      price: 5.21,
      countInStock: 10,
      brand: 'YUKIA',
      rating: 0, //4.8,
      numReviews: 19,
      description: 'Salsa Teriyaki Yukai Botella De 500 Mls Tienda Oficial',
    },

    {
      //_id: '49',
      name: 'Salsa Verde La Costeña 450 Gr',
      slug: 'salsa-verde-la-costeña-450gr',
      category: 'Alimentos',
      image: '/images/p49.jpg',
      price: 3.17,
      countInStock: 19,
      brand: 'LaCosteña',
      rating: 0, //4.1,
      numReviews: 19,
      description: 'Salsa Verde La Costeña 450 Gr',
    },
    {
      //_id: '50',
      name: 'Salsa Catsup Heinz Ketchup',
      slug: 'salsa-catsup-heinz-ketchup',
      category: 'Alimentos',
      image: '/images/p50.jpg',
      price: 2.51,
      countInStock: 10,
      brand: 'Heinz',
      rating: 0, //4.18,
      numReviews: 119,
      description: 'Salsa Catsup Heinz Ketchup 2 Piezas De 1.13 Kg C/u',
    },
    {
      //_id: '51',
      name: 'Crema Jimmy Tartufi De Hongos Porcini 90Gr',
      slug: 'crema-jimmy-tartufi-de-hongos-porcini-90gr',
      category: 'Alimentos',
      image: '/images/p51.jpg',
      price: 12.51,
      countInStock: 58,
      brand: 'Jimmy',
      rating: 0, //5.0,
      numReviews: 100,
      description: 'Crema Jimmy Tartufi De Hongos Porcini 90Gr',
    },

    {
      //_id: '52',
      name: 'Salsa Casera San Marcos Chipotle 500G',
      slug: 'salsa-casera-san-marcos-chipotle-500g',
      category: 'Alimentos',
      image: '/images/p52.jpg',
      price: 9.55,
      countInStock: 8,
      brand: 'SanMarcos',
      rating: 0, //4.0,
      numReviews: 14,
      description: 'Salsa Casera San Marcos Chipotle 500 G',
    },
    {
      //_id: '53',
      name: 'Sopa Campbells Chunky Sabor Almeja',
      slug: 'sopa-campbells-chunky-sabor-almeja',
      category: 'Alimentos',
      image: '/images/p53.jpg',
      price: 3.55,
      countInStock: 145,
      brand: 'Campbells',
      rating: 0, //4.6,
      numReviews: 198,
      description: 'Salsa Casera San Marcos Chipotle 500 G',
    },
    {
      //_id: '54',
      name: 'Sopa Instantanea Sabor Cebolla',
      slug: 'sopa-instantanea-sabor-cebolla',
      category: 'Alimentos',
      image: '/images/p54.jpg',
      price: 6.68,
      countInStock: 145,
      brand: 'Lipton',
      rating: 0, //4.9,
      numReviews: 118,
      description: 'Sopa Instantanea Sabor Cebolla Kosher Lipton',
    },

    {
      //_id: '55',
      name: 'Tofu Extra Firme Mori nu',
      slug: 'tofu-extra-firme-mori-nu',
      category: 'Alimentos',
      image: '/images/p55.jpg',
      price: 1.16,
      countInStock: 157,
      brand: 'MoriNu',
      rating: 0, //4.4,
      numReviews: 11,
      description: 'Tofu Extra Firme Mori nu',
    },
    {
      //_id: '56',
      name: 'Agua Natural Burst',
      slug: 'agua Natural burst',
      category: 'Bebidas',
      image: '/images/p56.jpg',
      price: 1.0,
      countInStock: 183,
      brand: 'Burs',
      rating: 0, //4.8,
      numReviews: 59,
      description: 'Agua Natural Burst 1Litro',
    },
    {
      //_id: '57',
      name: 'Bebida Boing Minibrick',
      slug: 'bebida boing minibrick',
      category: 'Bebidas',
      image: '/images/p57.jpg',
      price: 1.5,
      countInStock: 395,
      brand: 'Boing',
      rating: 0, //4.8,
      numReviews: 9,
      description: 'Bebida Boing Minibrick 125 Ml Tienda Oficial',
    },

    {
      //_id: '58',
      name: 'Crema De Whisky Baileys',
      slug: 'crema-de-whisky-baileys',
      category: 'Bebidas',
      image: '/images/p58.jpg',
      price: 19.5,
      countInStock: 387,
      brand: 'Baileys',
      rating: 0, //4.9,
      numReviews: 95,
      description: 'Crema De Whisky Baileys Original 700 Ml',
    },
    {
      //_id: '59',
      name: 'Leche Nutri 1 Lt',
      slug: 'leche-nutri-1lt',
      category: 'Bebidas',
      image: '/images/p59.jpg',
      price: 5.49,
      countInStock: 537,
      brand: 'Baileys',
      rating: 0, //3.0,
      numReviews: 158,
      description: 'Leche Nutri 1 Lt Nutrileche',
    },
    {
      //_id: '60',
      name: 'Buchanans Special 18 años',
      slug: 'buchanans-special-18-anos',
      category: 'Bebidas',
      image: '/images/p60.jpg',
      price: 49.5,
      countInStock: 300,
      brand: 'Buchanans',
      rating: 0, //5.0,
      numReviews: 95,
      description: 'Buchanans Special 18 años Blended Scotch escoces 750 mL',
    },

    {
      //_id: '61',
      name: 'Slimfast Malteada Original',
      slug: 'slimfast-malteada-original',
      category: 'Bebidas',
      image: '/images/p61.jpg',
      price: 29.5,
      countInStock: 32,
      brand: 'SlimFast',
      rating: 0, //2.7,
      numReviews: 55,
      description: 'Slimfast Malteada Original 1.36 Kg Vitaminas Y Minerales',
    },
    {
      //_id: '62',
      name: 'Tequila Don Ramon Plata Punta Diamante',
      slug: 'tequila-don-ramon-plata-punta-diamante',
      category: 'Bebidas',
      image: '/images/p62.jpg',
      price: 49.5,
      countInStock: 19,
      brand: 'DonRamon',
      rating: 0, //4.7,
      numReviews: 105,
      description:
        'Tequila Don Ramon Plata Punta Diamante El Señor Don Tequila',
    },
    {
      //_id: '63',
      name: 'Soju Marca Jinro 360ml Licor Arroz Corea',
      slug: 'soju-marca-jinro-360ml-licor-arroz-corea',
      category: 'Bebidas',
      image: '/images/p63.jpg',
      price: 19.29,
      countInStock: 59,
      brand: 'Jinro',
      rating: 0, //4.2,
      numReviews: 40,
      description:
        'Soju Marca Jinro 360ml Licor Arroz Corea Variedad De Sabores',
    },
    {
      //_id: '64',
      name: 'Electrolit Suero Rehidratante',
      slug: 'electrolit suero rehidratante',
      category: 'Bebidas',
      image: '/images/p64.jpg',
      price: 5.19,
      countInStock: 149,
      brand: 'Electrolit',
      rating: 0, //4.7,
      numReviews: 400,
      description: 'Electrolit Suero Rehidratante Sabor Fresa 625 Ml',
    },
    {
      //_id: '65',
      name: 'Johnnie Walker Red Label',
      slug: 'johnnie walker red label',
      category: 'Bebidas',
      image: '/images/p65.jpg',
      price: 55.49,
      countInStock: 349,
      brand: 'JohnnieWalker',
      rating: 0, //4.9,
      numReviews: 400,
      description: 'Johnnie Walker Red Label Blended Scotch escocés 1 L',
    },
  ],
};
export default data;
