import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: {
    id: 1,
    name: "",
    category: "",
    mark: "",
    price: "2.000",
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
      image: "https://example.com/images/samsung-galaxy-s21.jpg",
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
      image: "https://example.com/images/samsung-note-20-ultra.jpg",
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
      image: "https://example.com/images/samsung-galaxy-a52.jpg",
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
      image: "https://example.com/images/samsung-galaxy-z-fold-3.jpg",
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
      image: "https://example.com/images/samsung-galaxy-s20-fe.jpg",
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
  ],

  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
