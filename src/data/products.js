import samsungA56 from "../assets/products/samsung-a56.jpg";
import iphone14 from "../assets/products/iphone14.jpg";
import dellInspiron from "../assets/products/dell-inspiron.jpg";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A56",
    brand: "Samsung",
    category: "Mobile Phones",
    image: samsungA56,
    price: 95000,
    downPayment: 20000,
    monthly: 6250,
    duration: "12 Months",
  },
  {
    id: 2,
    name: "iPhone 14",
    brand: "Apple",
    category: "Mobile Phones",
    image: iphone14,
    price: 180000,
    downPayment: 40000,
    monthly: 11667,
    duration: "12 Months",
  },
  {
    id: 3,
    name: "Dell Inspiron Laptop",
    brand: "Dell",
    category: "Laptops",
    image: dellInspiron,
    price: 120000,
    downPayment: 30000,
    monthly: 7500,
    duration: "12 Months",
  },
];

export default products;