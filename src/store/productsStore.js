import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: {
    id: 1,
    name: "",
    category: "",
    mark: "",
    price: "",
    image: "",
    discount: "",
    reviews: "",
    detailedInformation: {
      manufacturer: "",
      productWeight: "",
      dimensions: "",
      countryOrigin: "",
      color: "",
      material: "",
      characteristics: "",
    },
  },
  setProduct: (product) => set({ product }),
  listProduct: [
    {
      id: 1,
      name: "Samsung Galaxy S21",
      category: "Smartphone",
      mark: "Samsung",
      price: "800.00",
      image: "../assets/productos/smartphone/samsung-galaxy-s21.png",
      discount: "10%",
      reviews: "4.5",
      detailedInformation: {
        manufacturer: "Samsung Electronics",
        productWeight: "169g",
        dimensions: "151.7 x 71.2 x 7.9 mm",
        countryOrigin: "South Korea",
        color: "Phantom Gray",
        material: "Glass and Aluminum",
        characteristics: "120Hz Display, 5G, Triple Camera",
      },
    },
    {
      id: 2,
      name: "Samsung Galaxy Note 20 Ultra",
      category: "Smartphone",
      mark: "Samsung",
      price: "1200.00",
      image: "../assets/productos/smartphone/samsung-note-20-ultra.jpg",
      discount: "15%",
      reviews: "4.8",
      detailedInformation: {
        manufacturer: "Samsung Electronics",
        productWeight: "208g",
        dimensions: "164.8 x 77.2 x 8.1 mm",
        countryOrigin: "South Korea",
        color: "Mystic Bronze",
        material: "Glass and Stainless Steel",
        characteristics: "S Pen, 5G, 108MP Camera",
      },
    },
    {
      id: 3,
      name: "Samsung Galaxy A52",
      category: "Smartphone",
      mark: "Samsung",
      price: "350.00",
      image: "../assets/productos/smartphone/samsung-galaxy-a52.jpg",
      discount: "5%",
      reviews: "4.3",
      detailedInformation: {
        manufacturer: "Samsung Electronics",
        productWeight: "189g",
        dimensions: "159.9 x 75.1 x 8.4 mm",
        countryOrigin: "South Korea",
        color: "Awesome Black",
        material: "Plastic and Glass",
        characteristics: "90Hz Display, Quad Camera, IP67 Rating",
      },
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold 3",
      category: "Smartphone",
      mark: "Samsung",
      price: "1799.00",
      image: "../assets/productos/smartphone/samsung-galaxy-z-fold-3.jpg",
      discount: "12%",
      reviews: "4.7",
      detailedInformation: {
        manufacturer: "Samsung Electronics",
        productWeight: "271g",
        dimensions: "158.2 x 128.1 x 6.4 mm (unfolded)",
        countryOrigin: "South Korea",
        color: "Phantom Black",
        material: "Glass and Aluminum",
        characteristics: "Foldable Display, 5G, Under Display Camera",
      },
    },
    {
      id: 5,
      name: "Samsung Galaxy S20 FE",
      category: "Smartphone",
      mark: "Samsung",
      price: "600.00",
      image: "../assets/productos/smartphone/samsung-galaxy-s20-fe.jpg",
      discount: "8%",
      reviews: "4.4",
      detailedInformation: {
        manufacturer: "Samsung Electronics",
        productWeight: "190g",
        dimensions: "159.8 x 74.5 x 8.4 mm",
        countryOrigin: "South Korea",
        color: "Cloud Navy",
        material: "Plastic and Glass",
        characteristics: "120Hz Display, Triple Camera, 5G",
      },
    },
    {
        "id": 6,
        "name": "Lenovo ThinkPad X1 Carbon",
        "category": "Laptop",
        "mark": "Lenovo",
        "price": "1500.00",
        "image": "../assets/productos/laptops/lenovo-thinkpad-x1-carbon.png",
        "discount": "10%",
        "reviews": "4.8",
        "detailedInformation": {
          "manufacturer": "Lenovo",
          "productWeight": "1.13kg",
          "dimensions": "323 x 217 x 14.9 mm",
          "countryOrigin": "China",
          "color": "Black",
          "material": "Carbon Fiber",
          "characteristics": "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch FHD Display"
        }
      },
      {
        "id": 7,
        "name": "Lenovo IdeaPad 5",
        "category": "Laptop",
        "mark": "Lenovo",
        "price": "750.00",
        "image": "../assets/productos/laptops/lenovo-ideapad-5.webp",
        "discount": "5%",
        "reviews": "4.5",
        "detailedInformation": {
          "manufacturer": "Lenovo",
          "productWeight": "1.66kg",
          "dimensions": "356 x 233 x 19.9 mm",
          "countryOrigin": "China",
          "color": "Platinum Grey",
          "material": "Aluminum",
          "characteristics": "AMD Ryzen 5, 8GB RAM, 256GB SSD, 15.6-inch FHD Display"
        }
      },
      {
        "id": 8,
        "name": "Lenovo Legion 5",
        "category": "Laptop",
        "mark": "Lenovo",
        "price": "1200.00",
        "image": "../assets/productos/laptops/lenovo-legion-5.png",
        "discount": "12%",
        "reviews": "4.7",
        "detailedInformation": {
          "manufacturer": "Lenovo",
          "productWeight": "2.3kg",
          "dimensions": "363 x 260 x 23.5 mm",
          "countryOrigin": "China",
          "color": "Phantom Black",
          "material": "Plastic and Aluminum",
          "characteristics": "Intel Core i7, 16GB RAM, 1TB SSD, 15.6-inch 144Hz Display, NVIDIA RTX 3060"
        }
      },
      {
        "id": 9,
        "name": "Lenovo Yoga Slim 7",
        "category": "Laptop",
        "mark": "Lenovo",
        "price": "1000.00",
        "image": "../assets/productos/laptops/lenovo-yoga-slim-7.webp",
        "discount": "8%",
        "reviews": "4.6",
        "detailedInformation": {
          "manufacturer": "Lenovo",
          "productWeight": "1.4kg",
          "dimensions": "320.6 x 208.18 x 14.9 mm",
          "countryOrigin": "China",
          "color": "Slate Grey",
          "material": "Aluminum",
          "characteristics": "AMD Ryzen 7, 16GB RAM, 512GB SSD, 14-inch FHD Display"
        }
      },
      {
        "id": 10,
        "name": "Lenovo ThinkBook 14",
        "category": "Laptop",
        "mark": "Lenovo",
        "price": "850.00",
        "image": "../assets/productos/laptops/lenovo-thinkbook-14.png",
        "discount": "7%",
        "reviews": "4.4",
        "detailedInformation": {
          "manufacturer": "Lenovo",
          "productWeight": "1.5kg",
          "dimensions": "323 x 218 x 17.9 mm",
          "countryOrigin": "China",
          "color": "Mineral Grey",
          "material": "Aluminum",
          "characteristics": "Intel Core i5, 8GB RAM, 512GB SSD, 14-inch FHD Display"
        }
      }
  ],

  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));