export enum SIZES {
    P = "P",
    M = "M",
    G = "G",
    GG = "GG"
}

export enum OrderStatus {
    SUCESSO = "SUCESSO",
    PENDENTE = "PENDENTE",
    ERRO = "ERRO",
    CANCELADA = "CANCELADA"
}


export type Product = {
    id: number
    name: string
    display_name: string
    thumbnail: string | null
    images: string[] | [] 
    price: number
    has_color: boolean
    has_size: boolean
    color: string[]
    sizes: string[]
    details: {
        title: string
        detail_list: string[] | []
    },
    brand: {
        name: string
        display_name: string
    }
    number_reviews: number
    number_views: number
    number_sold: number
    is_in_stock: boolean
    is_discount: boolean
    avg_rating: number
    is_new: boolean
    discount: {
        percentage: number
    }
    category: Category 
    sub_category: SubCategory 
}


export type Category = {
    id :number
    name: string
    display_name: string
    sub_categories: SubCategory[] | []
    number_product: number
}

export type SubCategory = {
    id: number
    name: string
    display_name: string
    parent_category: Category | number
    number_product: number
}

export type EnderecoEnvio = {
    id: number
    nome: string
    cidade: string
    estado: string
    endereco: string
    pais: string
    cep: number
    is_default: boolean
}

export type Review = {
    id: number
    product: number
    user: {
        name: string
    }
    title: string
    description: string
    rating: number
}

export type Order = {
    id: number
    user: number
    date: string
    tracking_number: string
    order_items: OrderItem[]
    status: OrderStatus
    total_amount: number
}

export type OrderItem = {
    product: Product
    quantity: number
    color: string
    size: string
}

export type User = {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string | null
    is_verified: boolean
    shipping_addresses: EnderecoEnvio[] | []
    orders: Order[] | []
    reviews: Review [] | []
}