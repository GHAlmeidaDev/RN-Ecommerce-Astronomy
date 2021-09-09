
import {
    Category,
    OrderStatus,
    Product,
    SIZES,
    User,
} from "./data_types";

export const PRODUCTS: Product[] = [
    {
        id: 0,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_sistema_solar_925_1_11404aa11ad26a62711668b1958ab051.jpg?alt=media&token=3aa1aca0-055a-4863-8010-9bc8020e4b9e",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_sistema_solar_925_1_11404aa11ad26a62711668b1958ab051.jpg?alt=media&token=3aa1aca0-055a-4863-8010-9bc8020e4b9e",
           
        ],
        is_new: false,
        avg_rating: 3,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 0,
            display_name: "Camisetas",
            name: "Camisetas",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 20,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Camiseta Sistema Solar",
        display_name:
            "Camiseta Sistema Solar",
        price: 40,
        number_reviews: 6,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Camisetas",
            display_name: "Camisetas",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [""],
        },
        color: ["Red", "Blue", "Black"],
        sizes: [SIZES.P, SIZES.M, SIZES.GG],
        has_color: true,
        has_size: true
    },
    {
        id: 1,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_nasa_361_1_6846cad083d09be4ef014a1ddd02fd4b.jpg?alt=media&token=bc9ebc61-6a46-4a49-be6f-43f266eb4026",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_nasa_361_1_6846cad083d09be4ef014a1ddd02fd4b.jpg?alt=media&token=bc9ebc61-6a46-4a49-be6f-43f266eb4026",
            
        ],
        is_new: false,
        avg_rating: 3,
        brand: {
            name: "Nasa Astronomia",
            display_name: "Nasa Astronomia",
        },
        category: {
            id: 0,
            display_name: "Camisetas",
            name: "Camisetas",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Camiseta Nasa",
        display_name: "Camiseta Nasa",
        price: 100,
        number_reviews: 7,
        number_views: 40,
        number_sold: 6,
        sub_category: {
            id: 1,
            name: "Camisetas",
            display_name: "Camisetas",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "100% Algodão",
            ],
        },
        color: ["Black", "Gray"],
        sizes: [SIZES.P, SIZES.M, SIZES.GG],
        has_size: true,
        has_color: true
    },
    {
        id: 2,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_eu_quero_saber_1125_1_9671237d40c952c695488f1cff0a425c.jpg?alt=media&token=19e643c4-a9b3-437c-8498-9102e5a07c1f",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_eu_quero_saber_1125_1_9671237d40c952c695488f1cff0a425c.jpg?alt=media&token=19e643c4-a9b3-437c-8498-9102e5a07c1f",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 0,
            display_name: "Camisetas",
            name: "Camisetas",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Camiseta Carl Sagan - Eu não quero acreditar, eu quero saber",
        display_name: "Camiseta Carl Sagan - Eu não quero acreditar, eu quero saber",
        price: 50,
        number_reviews: 15,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Camisetas",
            display_name: "Camisetas",
            number_product: 5,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "100% Algodão",
                "Camiseta Carl Sagan",
            ],
        },
        color: ["Black", "Blue", "Red", "Gray"],
        sizes: [SIZES.P, SIZES.M, SIZES.GG],
        has_color: true,
        has_size: true
    },
    {
        id: 3,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_eu_quero_saber_1125_1_9671237d40c952c695488f1cff0a425c.jpg?alt=media&token=19e643c4-a9b3-437c-8498-9102e5a07c1f",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_eu_quero_saber_1125_1_9671237d40c952c695488f1cff0a425c.jpg?alt=media&token=19e643c4-a9b3-437c-8498-9102e5a07c1f",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 0,
            display_name: "Camisetas",
            name: "Camisetas",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Camiseta Carl Sagan - Eu não quero acreditar, eu quero saber",
        display_name: "Camiseta Carl Sagan - Eu não quero acreditar, eu quero saber",
        price: 70,
        number_reviews: 15,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Camisetas",
            display_name: "Camisetas",
            number_product: 5,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "100% Algodão",
                "Camiseta Carl Sagan",
            ],
        },
        color: ["Black", "Blue", "Red", "Gray"],
        sizes: [SIZES.P, SIZES.M, SIZES.GG],
        has_color: true,
        has_size: true
    },
    {
        id: 4,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_eu_quero_saber_1125_1_9671237d40c952c695488f1cff0a425c.jpg?alt=media&token=19e643c4-a9b3-437c-8498-9102e5a07c1f",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/camiseta_eu_quero_saber_1125_1_9671237d40c952c695488f1cff0a425c.jpg?alt=media&token=19e643c4-a9b3-437c-8498-9102e5a07c1f",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 0,
            display_name: "Camisetas",
            name: "Camisetas",
            number_product: 50,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Camiseta Carl Sagan - Eu não quero acreditar, eu quero saber",
        display_name: "Camiseta Carl Sagan - Eu não quero acreditar, eu quero saber",
        price: 120,
        number_reviews: 15,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Camisetas",
            display_name: "Camisetas",
            number_product: 5,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "100% Algodão",
                "Camiseta Carl Sagan",
            ],
        },
        color: ["Black", "Blue", "Red", "Gray"],
        sizes: [SIZES.P, SIZES.M, SIZES.GG],
        has_color: true,
        has_size: true
    },
    {
        id: 5,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_albert_einstein_chibi_1409_1_20210430154411.jpg?alt=media&token=12f5b961-ae40-40d3-9c9b-dd85c4be6d9f",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_albert_einstein_chibi_1409_1_20210430154411.jpg?alt=media&token=12f5b961-ae40-40d3-9c9b-dd85c4be6d9f",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_albert_einstein_chibi_1409_2_20210430154412.jpg?alt=media&token=b897da02-c457-44aa-b525-486121c4c09c",

        ],
        is_new: true,
        avg_rating: 5,
        brand: {
            name: "Albert Einstein",
            display_name: "Albert Einstein",
        },
        category: {
            id: 1,
            display_name: "Canecas",
            name: "Canecas",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 20,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Caneca Albert Einstein",
        display_name: "Caneca Albert Einstein",
        price: 40,
        number_reviews: 6,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Canecas",
            display_name: "Canecas",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
               'Não levar ao micro-ondas e lava louças' 
            ],
        },
        color: ["Black"],
        sizes: ['ÚNICO'],
        has_size: true,
        has_color: true,
    },
    {
        id: 6,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_nikola_tesla_chibi_1419_1_20210430154412.jpg?alt=media&token=12c9891d-def2-436e-9acb-0a0700a81129",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_nikola_tesla_chibi_1419_1_20210430154412.jpg?alt=media&token=12c9891d-def2-436e-9acb-0a0700a81129",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_nikola_tesla_chibi_1419_2_20210430154413.jpg?alt=media&token=349eddad-a826-4570-81df-3aedb06a66f8",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Nikola Tesla",
            display_name: "Nikola Tesla",
        },
        category: {
            id: 1,
            display_name: "Canecas",
            name: "Canecas",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 15,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Caneca Nikola Tesla",
        display_name: "Caneca Nikola Tesla",
        price: 50,
        number_reviews: 6,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Canecas",
            display_name: "Canecas",
            number_product: 10,
            parent_category: 1,
        },
        details: {
            title: "",
            detail_list: [
                'Não levar ao micro-ondas e lava louças' 
             ],
        },
        color: ["Black"],
        sizes: ['ÚNICO'],
        has_color: true,
        has_size: true
    },
    {
        id: 7,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_galileu_galilei_chibi_3023_1_20210430154412.jpg?alt=media&token=f954fa4b-8634-455a-a69d-4fb96ea6530c",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_galileu_galilei_chibi_3023_1_20210430154412.jpg?alt=media&token=f954fa4b-8634-455a-a69d-4fb96ea6530c",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_galileu_galilei_chibi_3023_2_20210430154414.jpg?alt=media&token=19a17989-6133-4148-9b09-8d3579651452",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Galileu Galilei",
            display_name: "Galileu Galilei",
        },
        category: {
            id: 1,
            display_name: "Canecas",
            name: "Canecas",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Caneca Galileu Galilei",
        display_name: "Caneca Galileu Galilei",
        price: 30,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Canecas",
            display_name: "Canecas",
            number_product: 10,
            parent_category: 1,
        },
        details: {
            title: "",
            detail_list: [
                'Não levar ao micro-ondas e lava louças' 
             ],
        },
        color: ["Black"],
        sizes: ['ÚNICO'],
        has_size: true,
        has_color: true
    },
    {
        id: 8,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_marie_curie_chibi_1209_1_20210430154411.jpg?alt=media&token=263d269d-feb8-439e-bfd1-0dd81f44bf18",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/caneca_marie_curie_chibi_1209_1_20210430154411.jpg?alt=media&token=263d269d-feb8-439e-bfd1-0dd81f44bf18",
       ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Marie Curie",
            display_name: "Marie Curie",
        },
        category: {
            id: 1,
            display_name: "Canecas",
            name: "Canecas",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Caneca Marie Curie",
        display_name: "Caneca Marie Curie",
        price: 30,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Canecas",
            display_name: "Canecas",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                'Não levar ao micro-ondas e lava louças' 
             ],
        },
        color: ["Black"],
        sizes: ['ÚNICO'],
        has_color: true,
        has_size: true
    },
    {
        id: 9,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 10,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 11,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 12,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 13,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 14,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 15,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_1_20210430154421.jpg?alt=media&token=8bc0b34a-5e49-4e55-85c4-b2ae1b0616e5",
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/almofada_personagem_erwin_schrodinger_1389_3_20210430154423.jpg?alt=media&token=c51ce605-4bd4-4bfe-bc51-ab5742582b1e",
        ],
        is_new: false,
        avg_rating: 4,
        brand: {
            name: "Schrödinger",
            display_name: "Schrödinger",
        },
        category: {
            id: 1,
            display_name: "Acessórios",
            name: "Acessórios",
            number_product: 44,
            sub_categories: [],
        },
        discount: {
            percentage: 40,
        },
        is_discount: true,
        is_in_stock: true,
        name: "Almofada Schrödinger",
        display_name: "Almofada Schrödinger",
        price: 70,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 0,
            name: "Acessórios",
            display_name: "Acessórios",
            number_product: 10,
            parent_category: 0,
        },
        details: {
            title: "",
            detail_list: [
                "Materiais: 100% Poliéster - Fibra de poliéster siliconada",
            ],
        },
        color: ["Green"],
        sizes: ["ÚNICO"],
        has_size: true,
        has_color: true
    },
    {
        id: 16,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/telescopio.jpg?alt=media&token=96af3acb-e340-4428-a598-7d1e1974f152",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/telescopio.jpg?alt=media&token=96af3acb-e340-4428-a598-7d1e1974f152",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 1,
            display_name: "Diversos",
            name: "Diversos",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Telescópio Newtoniano",
        display_name: "Telescópio Newtoniano",
        price: 2000,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Diversos",
            display_name: "Diversos",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
               "1400x150mm Greika"
            ],
        },
        color: ["Black"],
        sizes: [],
        has_color: true,
        has_size: false
    },
    {
        id: 17,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/baixados.jpg?alt=media&token=a8229b06-6726-4450-aec7-8a2227b099f3",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/baixados.jpg?alt=media&token=a8229b06-6726-4450-aec7-8a2227b099f3",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 1,
            display_name: "Diversos",
            name: "Diversos",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Binóculo",
        display_name: "Binóculo",
        price: 180,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Diversos",
            display_name: "Diversos",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
               ""
            ],
        },
        color: ["Black"],
        sizes: [],
        has_color: true,
        has_size: false
    },
    {
        id: 18,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/61-DFROuC4S._AC_SY450_.jpg?alt=media&token=8b652f0f-9c52-4482-bc9e-05e9eb160f70",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/61-DFROuC4S._AC_SY450_.jpg?alt=media&token=8b652f0f-9c52-4482-bc9e-05e9eb160f70",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 1,
            display_name: "Diversos",
            name: "Diversos",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Telescópio",
        display_name: "Telescópio",
        price: 800,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Diversos",
            display_name: "Diversos",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
               "70mm AZ de 400mm"
            ],
        },
        color: ["Black"],
        sizes: [],
        has_color: true,
        has_size: false
    },
    {
        id: 19,
        thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/telescopio.jpg?alt=media&token=96af3acb-e340-4428-a598-7d1e1974f152",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/telescopio.jpg?alt=media&token=96af3acb-e340-4428-a598-7d1e1974f152",
        ],
        is_new: false,
        avg_rating: 5,
        brand: {
            name: "Astronomia",
            display_name: "Astronomia",
        },
        category: {
            id: 1,
            display_name: "Diversos",
            name: "Diversos",
            number_product: 3,
            sub_categories: [],
        },
        discount: {
            percentage: 0,
        },
        is_discount: false,
        is_in_stock: true,
        name: "Telescópio Newtoniano",
        display_name: "Telescópio Newtoniano",
        price: 2000,
        number_reviews: 2,
        number_views: 30,
        number_sold: 10,
        sub_category: {
            id: 1,
            name: "Diversos",
            display_name: "Diversos",
            number_product: 10,
            parent_category: 3,
        },
        details: {
            title: "",
            detail_list: [
               "1400x150mm Greika"
            ],
        },
        color: ["Black"],
        sizes: [],
        has_color: true,
        has_size: false
    },
];

export const CATEGORIES: (Category & { image: string })[] = [
    {
        id: 0,
        name: "Camisetas",
        display_name: "Camisetas",
        number_product: 70,
        sub_categories: [],
        image: 'https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/banner-solar-system-moon-galaxy-cosmos-space-outer-space-astronomy-stars.jpg?alt=media&token=a161c4ee-cb4f-497f-b81a-95ff6142f2ae',
    },
    {
        id: 1,
        name: "Canecas",
        display_name: "Canecas",
        number_product: 790,
        sub_categories: [],
        image: 'https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/PHYS295-Astronomy-Banner.jpg?alt=media&token=46c016ab-dd30-40f8-868e-6b1f2b342ca4',
    },
    {
        id: 2,
        name: "Acessórios",
        display_name: "Acessórios",
        number_product: 40,
        sub_categories: [],
        image: 'https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/art2.jpg?alt=media&token=db5fbe9e-2dd4-4833-a8a8-d1613ebccb7c',
    },
    {
        id: 3,
        name: "Diversos",
        display_name: "Diversos",
        number_product: 30,
        sub_categories: [],
        image: 'https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/D_NQ_NP_798099-MLB32528520311_102019-O.jpg?alt=media&token=9ab6758a-e50f-41cd-a94e-a916f8202237',
    },
];

export const CURRENT_USER: User = {
    first_name: "Jack",
    last_name: "Jack",
    email: "jack@jack.com",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    is_verified: true,
    id: 2,
    orders: [
        {
            id: 0,
            status: OrderStatus.SUCESSO,
            total_amount: 115,
            user: 2,
            order_items: [],
            date: '',
            tracking_number: ''
        },
        {
            id: 1,
            status: OrderStatus.SUCESSO,
            total_amount: 115,
            user: 2,
            order_items: [],
            date: '',
            tracking_number: ''
        },
    ],
    reviews: [
        {
            id: 0,
            description: "cool",
            product: 5,
            title: "cool",
            rating: 4,
            user: { name: "Gabriel" },
        },
        {
            id: 1,
            description: "cool",
            product: 5,
            title: "cool",
            rating: 4,
            user: { name: "Gabriel" },
        },
        {
            id: 2,
            description: "cool",
            product: 5,
            title: "cool",
            rating: 4,
            user: { name: "Gabriel" },
        },
    ],
    shipping_addresses: [
        {
            id: 0,
            endereco: "Rua vereador Enílton Simões",
            cidade: "Divinópolis",
            pais: "Brasil",
            nome: "Gabriel",
            estado: "MG",
            cep: 35500730,
            is_default: true
        },
        {
            id: 1,
            endereco: "Rua vereador Enílton Simões",
            cidade: "Divinópolis",
            pais: "Brasil",
            nome: "Gabriel",
            estado: "MG",
            cep: 35500730,
            is_default: true
        },
        {
            id: 2,
            endereco: "Rua vereador Enílton Simões",
            cidade: "Divinópolis",
            pais: "Brasil",
            nome: "Gabriel",
            estado: "MG",
            cep: 35500730,
            is_default: false
        },
    ],
};


export const EXPORLE_SETION = [
    {
        id: 0,
        image_uri: "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/b9190602752976a01b3da4651e834925.jpg?alt=media&token=123bd333-d29b-4e65-a42f-68471328ea28",
    },
    {
        id: 1,
        image_uri: "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/b9190602752976a01b3da4651e834925.jpg?alt=media&token=123bd333-d29b-4e65-a42f-68471328ea28",    
    },
    {
        id: 2,
        image_uri: "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/b9190602752976a01b3da4651e834925.jpg?alt=media&token=123bd333-d29b-4e65-a42f-68471328ea28", 
    },
    {
        id: 3,
        image_uri: "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/b9190602752976a01b3da4651e834925.jpg?alt=media&token=123bd333-d29b-4e65-a42f-68471328ea28",
    },
    {
        id: 4,
        image_uri: "https://firebasestorage.googleapis.com/v0/b/projetinho-4f6ed.appspot.com/o/b9190602752976a01b3da4651e834925.jpg?alt=media&token=123bd333-d29b-4e65-a42f-68471328ea28",
    },
]