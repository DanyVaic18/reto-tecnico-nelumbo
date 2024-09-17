import { create } from "zustand";

import samsungGalaxys21 from "../assets/productos/smartphone/samsung-galaxy-s21.png"
import samsungGalaxyNote20Ultra from "../assets/productos/smartphone/samsung-galaxy-note-20-ultra.jpg"
import samsungGalaxya52 from "../assets/productos/smartphone/samsung-galaxy-a52.jpg"
import samsungGalaxyzfold3 from "../assets/productos/smartphone/samsung-galaxy-z-fold-3.jpg"
import samsungGalaxys20fe from "../assets/productos/smartphone/samsung-galaxy-s20-fe.jpg"
import xiaomiMi11 from "../assets/productos/smartphone/xiaomi-mi-11.jpg"
import iphone13pro from "../assets/productos/smartphone/iphone-13-pro.webp"
import lenovoThinkpadX1Carbon from "../assets/productos/laptops/lenovo-thinkpad-x1-carbon.png"
import lenovoIdeapad5 from "../assets/productos/laptops/lenovo-ideapad-5.webp"
import lenovoLegion5 from "../assets/productos/laptops/lenovo-legion-5.png"
import lenovoyogaslim7 from "../assets/productos/laptops/lenovo-yoga-slim-7.webp"
import lenovothinkbook14 from "../assets/productos/laptops/lenovo-thinkbook-14.png"
import asusZenbook14 from "../assets/productos/laptops/asus-zenbook-14.png"
import aceraspire5 from "../assets/productos/laptops/acer-aspire-5.webp"



export const useProductStore = create(() => ({

  listProducts: [
    {
      id: 1,
      name: "Samsung Galaxy S21",
      category: "Smartphone",
      mark: "Samsung",
      price: "800.00",
      image: samsungGalaxys21,
      discount: "10%",
      reviews: 5,
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
      image: samsungGalaxyNote20Ultra,
      discount: "15%",
      reviews: 4.8,
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
      image: samsungGalaxya52,
      discount: "5%",
      reviews: 4.3,
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
      image: samsungGalaxyzfold3,
      reviews: 4.7,
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
      image: samsungGalaxys20fe,
      discount: "8%",
      reviews: 4.4,
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
      id: 6,
      name: "Xiaomi Mi 11",
      category: "Smartphone",
      mark: "Xiaomi",
      price: "700.00",
      image: xiaomiMi11,
      reviews: 4.6,
      detailedInformation: {
        manufacturer: "Xiaomi",
        productWeight: "196g",
        dimensions: "164.3 x 74.6 x 8.1 mm",
        countryOrigin: "China",
        color: "Horizon Blue",
        material: "Glass and Aluminum",
        characteristics: "120Hz Display, Snapdragon 888, Triple Camera",
      },
    },
    {
      id: 7,
      name: "iPhone 13 Pro",
      category: "Smartphone",
      mark: "Apple",
      price: "999.00",
      image: iphone13pro,
      reviews: 5,
      detailedInformation: {
        manufacturer: "Apple",
        productWeight: "204g",
        dimensions: "146.7 x 71.5 x 7.65 mm",
        countryOrigin: "United States",
        color: "Graphite",
        material: "Surgical-Grade Stainless Steel and Ceramic Shield",
        characteristics: "120Hz ProMotion Display, A15 Bionic, Triple Camera",
      },
    },
    {
      id: 8,
      name: "Lenovo ThinkPad X1 Carbon",
      category: "Laptop",
      mark: "Lenovo",
      price: "1500.00",
      image: lenovoThinkpadX1Carbon,
      discount: "10%",
      reviews: 4,
      detailedInformation: {
        manufacturer: "Lenovo",
        productWeight: "1.13kg",
        dimensions: "323 x 217 x 14.9 mm",
        countryOrigin: "China",
        color: "Black",
        material: "Carbon Fiber",
        characteristics:
          "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch FHD Display",
      },
    },
    {
      id: 9,
      name: "Lenovo IdeaPad 5",
      category: "Laptop",
      mark: "Lenovo",
      price: "750.00",
      image: lenovoIdeapad5,
      reviews: 5,
      detailedInformation: {
        manufacturer: "Lenovo",
        productWeight: "1.66kg",
        dimensions: "356 x 233 x 19.9 mm",
        countryOrigin: "China",
        color: "Platinum Grey",
        material: "Aluminum",
        characteristics:
          "AMD Ryzen 5, 8GB RAM, 256GB SSD, 15.6-inch FHD Display",
      },
    },
    {
      id: 10,
      name: "Lenovo Legion 5",
      category: "Laptop",
      mark: "Lenovo",
      price: "1200.00",
      image: lenovoLegion5,
      discount: "12%",
      reviews: 5,
      detailedInformation: {
        manufacturer: "Lenovo",
        productWeight: "2.3kg",
        dimensions: "363 x 260 x 23.5 mm",
        countryOrigin: "China",
        color: "Phantom Black",
        material: "Plastic and Aluminum",
        characteristics:
          "Intel Core i7, 16GB RAM, 1TB SSD, 15.6-inch 144Hz Display, NVIDIA RTX 3060",
      },
    },
    {
      id: 11,
      name: "Lenovo Yoga Slim 7",
      category: "Laptop",
      mark: "Lenovo",
      price: "1000.00",
      image: lenovoyogaslim7,
      reviews: 4,
      detailedInformation: {
        manufacturer: "Lenovo",
        productWeight: "1.4kg",
        dimensions: "320.6 x 208.18 x 14.9 mm",
        countryOrigin: "China",
        color: "Slate Grey",
        material: "Aluminum",
        characteristics:
          "AMD Ryzen 7, 16GB RAM, 512GB SSD, 14-inch FHD Display",
      },
    },
    {
      id: 12,
      name: "Lenovo ThinkBook 14",
      category: "Laptop",
      mark: "Lenovo",
      price: "850.00",
      image: lenovothinkbook14,
      discount: "7%",
      reviews: 4,
      detailedInformation: {
        manufacturer: "Lenovo",
        productWeight: "1.5kg",
        dimensions: "323 x 218 x 17.9 mm",
        countryOrigin: "China",
        color: "Mineral Grey",
        material: "Aluminum",
        characteristics:
          "Intel Core i5, 8GB RAM, 512GB SSD, 14-inch FHD Display",
      },
    },
    {
      id: 13,
      name: "ASUS ZenBook 14",
      category: "Laptop",
      mark: "ASUS",
      price: "950.00",
      image: asusZenbook14,
      discount: "10%",
      reviews: 3.9,
      detailedInformation: {
        manufacturer: "ASUS",
        productWeight: "1.17kg",
        dimensions: "319 x 199 x 13.9 mm",
        countryOrigin: "Taiwan",
        color: "Pine Grey",
        material: "Aluminum",
        characteristics:
          "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch FHD Display",
      },
    },
    {
      id: 14,
      name: "Acer Aspire 5",
      category: "Laptop",
      mark: "Acer",
      price: "600.00",
      image: aceraspire5,
      reviews: 5,
      detailedInformation: {
        manufacturer: "Acer",
        productWeight: "1.8kg",
        dimensions: "363.4 x 250.5 x 17.9 mm",
        countryOrigin: "Taiwan",
        color: "Silver",
        material: "Plastic and Aluminum",
        characteristics:
          "AMD Ryzen 5, 8GB RAM, 256GB SSD, 15.6-inch FHD Display",
      },
    },
  ],
}));
