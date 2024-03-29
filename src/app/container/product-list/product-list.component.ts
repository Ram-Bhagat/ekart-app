import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct:Product | undefined;
  
   products = [
    {
      id: "1",
      name: "Fashion Shoes",
      description: "Stylish and comfortable fashion shoes for everyday wear. Made with high-quality materials for durability.",
      brand: "Nike",
      gender: "Unisex",
      category: "Footwear",
      size: ["US 6", "US 7", "US 8", "US 9", "US 10"],
      colors: ["Black", "White", "Red", "Blue", "Gray"],
      price: 59.99,
      is_in_inventory: true,
      item_left: 20,
      discount_price: 49.99,
      imageUrl: "https://example.com/shoes.jpg",
      slug: "fashion-shoes-nike"
    },
    {
      id: "2",
      name: "Running Shoes",
      description: "Lightweight and responsive running shoes for enhanced performance. Perfect for long-distance running or casual jogging.",
      brand: "Adidas",
      gender: "Men",
      category: "Athletic Shoes",
      size: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Black", "Gray", "Blue"],
      price: 79.99,
      is_in_inventory: false,
      item_left: 15,
      discount_price: null,
      imageUrl: "https://example.com/running-shoes.jpg",
      slug: "running-shoes-adidas"
    },
    {
      id: "3",
      name: "Casual Sneakers",
      description: "Classic and versatile casual sneakers suitable for any occasion. Pair them with jeans or shorts for a laid-back look.",
      brand: "Nike",
      gender: "Women",
      category: "Sneakers",
      size: ["US 5", "US 6", "US 7", "US 8", "US 9"],
      colors: ["White", "Pink", "Beige"],
      price: 69.99,
      is_in_inventory: true,
      item_left: 10,
      discount_price: 59.99,
      imageUrl: "https://example.com/sneakers.jpg",
      slug: "casual-sneakers-nike"
    },
    {
      id: "4",
      name: "Basketball Shoes",
      description: "High-performance basketball shoes designed for agility and stability on the court. Built to withstand intense gameplay.",
      brand: "Nike",
      gender: "Men",
      category: "Basketball Shoes",
      size: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Red", "White", "Orange"],
      price: 89.99,
      is_in_inventory: false,
      item_left: 8,
      discount_price: null,
      imageUrl: "https://example.com/basketball-shoes.jpg",
      slug: "basketball-shoes-nike"
    },
    {
      id: "5",
      name: "Running Shorts",
      description: "Comfortable and breathable running shorts ideal for training sessions or race day. Features moisture-wicking fabric for sweat management.",
      brand: "Adidas",
      gender: "Women",
      category: "Athletic Apparel",
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Pink"],
      price: 29.99,
      is_in_inventory: true,
      item_left: 25,
      discount_price: null,
      imageUrl: "https://example.com/running-shorts.jpg",
      slug: "running-shorts-adidas"
    },
   
    {
      id: "6",
      name: "Formal Shoes",
      description: "Elegant and sophisticated formal shoes suitable for business meetings and special occasions.",
      brand: "Nike",
      gender: "Men",
      category: "Formal Shoes",
      size: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Black", "Brown"],
      price: 99.99,
      is_in_inventory: true,
      item_left: 12,
      discount_price: null,
      imageUrl: "https://example.com/formal-shoes.jpg",
      slug: "formal-shoes-nike"
    },
    {
      id: "7",
      name: "Hiking Boots",
      description: "Durable and supportive hiking boots designed for outdoor adventures. Features waterproof construction and traction outsole.",
      brand: "Adidas",
      gender: "Men",
      category: "Outdoor Footwear",
      size: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["Brown", "Green", "Gray"],
      price: 129.99,
      is_in_inventory: false,
      item_left: 7,
      discount_price: null,
      imageUrl: "https://example.com/hiking-boots.jpg",
      slug: "hiking-boots-adidas"
    },
    {
      id: "8",
      name: "Tennis Shoes",
      description: "Versatile tennis shoes suitable for casual games or professional matches. Provides stability and cushioning for every step.",
      brand: "Nike",
      gender: "Women",
      category: "Athletic Shoes",
      size: ["US 6", "US 7", "US 8", "US 9", "US 10"],
      colors: ["Pink", "Yellow", "Black"],
      price: 89.99,
      is_in_inventory: true,
      item_left: 15,
      discount_price: 79.99,
      imageUrl: "https://example.com/tennis-shoes.jpg",
      slug: "tennis-shoes-nike"
    },
    {
      id: "9",
      name: "Flip Flops",
      description: "Comfortable and lightweight flip flops perfect for beach outings or casual summer days.",
      brand: "Nike",
      gender: "Unisex",
      category: "Sandals",
      size: ["US 6", "US 7", "US 8", "US 9", "US 10"],
      colors: ["Black", "Blue", "Red"],
      price: 24.99,
      is_in_inventory: true,
      item_left: 30,
      discount_price: null,
      imageUrl: "https://example.com/flip-flops.jpg",
      slug: "flip-flops-nike"
    },
    {
      id: "10",
      name: "Track Pants",
      description: "Classic track pants suitable for workouts or lounging. Features elastic waistband and side pockets for convenience.",
      brand: "Adidas",
      gender: "Unisex",
      category: "Athletic Apparel",
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      price: 49.99,
      is_in_inventory: true,
      item_left: 20,
      discount_price: null,
      imageUrl: "https://example.com/track-pants.jpg",
      slug: "track-pants-adidas"
    },
    {
      id: "11",
      name: "Running Jacket",
      description: "Lightweight and weather-resistant running jacket suitable for outdoor activities. Features reflective details for visibility in low-light conditions.",
      brand: "Adidas",
      gender: "Unisex",
      category: "Athletic Apparel",
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Blue"],
      price: 69.99,
      is_in_inventory: true,
      item_left: 10,
      discount_price: 59.99,
      imageUrl: "https://example.com/running-jacket.jpg",
      slug: "running-jacket-adidas"
    },
    {
      id: "12",
      name: "Football Cleats",
      description: "Professional-grade football cleats designed for speed and agility on the field. Features lightweight construction and durable studs for traction.",
      brand: "Nike",
      gender: "Men",
      category: "Football Gear",
      size: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      colors: ["White", "Black", "Silver"],
      price: 129.99,
      is_in_inventory: false,
      item_left: 8,
      discount_price: null,
      imageUrl: "https://example.com/football-cleats.jpg",
      slug: "football-cleats-nike"
    },
    {
      id: "13",
      name: "Yoga Mat",
      description: "High-quality yoga mat made with eco-friendly materials. Features non-slip surface for stability during yoga practice.",
      brand: "Adidas",
      gender: "Unisex",
      category: "Yoga Accessories",
      size: ["One Size"],
      colors: ["Purple", "Green", "Blue"],
      price: 39.99,
      is_in_inventory: true,
      item_left: 15,
      discount_price: null,
      imageUrl: "https://example.com/yoga-mat.jpg",
      slug: "yoga-mat-adidas"
    },
    {
      id: "14",
      name: "Gym Bag",
      description: "Spacious gym bag with multiple compartments for storing workout essentials. Features adjustable straps for comfortable carrying.",
      brand: "Nike",
      gender: "Unisex",
      category: "Sports Accessories",
      size: ["One Size"],
      colors: ["Black", "Gray", "Red"],
      price: 49.99,
      is_in_inventory: false,
      item_left: 20,
      discount_price: null,
      imageUrl: "https://example.com/gym-bag.jpg",
      slug: "gym-bag-nike"
    },
    {
      id: "15",
      name: "Baseball Cap",
      description: "Classic baseball cap for everyday wear. Features embroidered logo and adjustable strap for a custom fit.",
      brand: "Adidas",
      gender: "Unisex",
      category: "Accessories",
      size: ["One Size"],
      colors: ["Navy", "White", "Black"],
      price: 19.99,
      is_in_inventory: true,
      item_left: 30,
      discount_price: null,
      imageUrl: "https://example.com/baseball-cap.jpg",
      slug: "baseball-cap-adidas"
    }
  ];
  

 allProductCount = this.products.length
 inStockProductCount = this.products.filter(p => p.is_in_inventory === true).length
 outOfStockProductCount = this.products.filter(p => p.is_in_inventory === false).length

 selectedValue:string = "all"
 onFilterChanged(value:any){
  this.selectedValue = value
 }

 @Input()
 filteredSearch:string = ''

 
 isProductVisible(product: any): boolean {
  // Show all products if selectedValue is 'all' and filteredSearch is empty
  if (this.selectedValue === 'all' && this.filteredSearch === '') {
    return true;
  }

  // Show products based on filter and search criteria
  return (
    (this.selectedValue === 'all' || product.is_in_inventory.toString() === this.selectedValue) &&
    (this.filteredSearch === '' || product.name.toLowerCase().includes(this.filteredSearch.toLowerCase()))
  );
}

 
}
