import {ReactElement} from "react";

export interface Link  {
    name: string,
    path: string,
}
export interface HelpContent {
    avatar: string,
    name: string,
    link: Link
}
export interface Product {
    id: number,
    name: string,
    price: number,
    avatar: string,
    images: string[],
    sale: number,
    new: number,
    brand: string,
    guarantee: number,
    description: string,
}

export interface ParameterProduct {
    monitor: string,
    camera: string,
    cpu: string,
    os: string,
    ram: string,
    ssd: string,
    pin: string,
}
export interface CategoryButton {
    name: Category,
    icon: ReactElement
}
export enum Category {
    Phone = "Phone",
    Tablet = "Tablet",
    SmartWatch = "Watch",
    Laptop = "Laptop",
    Desktop = "Desktop"
}
