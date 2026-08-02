import samsungFront from "../assets/images/products/samsung-a56/front.jpg";
import samsungBack from "../assets/images/products/samsung-a56/back.jpg";
import samsungSide from "../assets/images/products/samsung-a56/side.jpg";
import samsungBox from "../assets/images/products/samsung-a56/box.jpg";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A56",
    brand: "Samsung",
    category: "Mobile Phones",

    images: [
      samsungFront,
      samsungBack,
      samsungSide,
      samsungBox,
    ],

    price: 95000,
    downPayment: 20000,
    monthly: 6250,
    duration: "12 Months",
  },
];

export default products;