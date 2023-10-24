export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
}

export interface Category {
    id:      number;
    name:    Name;
    typeImg: TypeImg;
}

export enum Name {
    Clothes = "Clothes",
    Electronics = "Electronics",
    Furniture = "Furniture",
    Others = "Others",
    Toys = "Toys",
}

export enum TypeImg {
    Animals = "animals",
    Any = "any",
    Arch = "arch",
    People = "people",
    Tech = "tech",
}
