export class Product{
    id: string = '';
    name: string = '';
    description: string = '';
    brand: string = '';
    gender: string = '';
    category: string = '';
    size: string[] = [];
    colors: string[] = [];
    price: number = 0;
    is_in_inventory: boolean = false;
    item_left: number = 0;
    discount_price: number | null = null;
    imageUrl: string = '';
    slug: string = '';
}