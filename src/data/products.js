// samsung-a56
import samsungFront from "../assets/images/products/mobiles/samsung-a56/front.jpg";
import samsungBack from "../assets/images/products/mobiles/samsung-a56/back.jpg";
import samsungSide from "../assets/images/products/mobiles/samsung-a56/side.jpg";
import samsungBox from "../assets/images/products/mobiles/samsung-a56/box.jpg";
// iphone-14
import iphoneFront from "../assets/images/products/mobiles/iphone-14/front.jpg";
import iphoneBack from "../assets/images/products/mobiles/iphone-14/back.jpg";
import iphoneSide from "../assets/images/products/mobiles/iphone-14/side.png";
import iphoneBox from "../assets/images/products/mobiles/iphone-14/box.jpg";

// Vivo V50
import vivoFront from "../assets/images/products/mobiles/vivo-v50/font.png";
import vivoBack from "../assets/images/products/mobiles/vivo-v50/back.png";
import vivoSide from "../assets/images/products/mobiles/vivo-v50/side.png";
import vivoBox from "../assets/images/products/mobiles/vivo-v50/box.jpg";
// royal-fan
import fanFront from "../assets/images/products/fans/royal-fan/front.webp";
import fanback from "../assets/images/products/fans/royal-fan/back.webp";
import fanside from "../assets/images/products/fans/royal-fan/side.jpg";
import fanbox from "../assets/images/products/fans/royal-fan/box.jpg";

// Samsung TV
import tvFront from "../assets/images/products/televisions/samsung-55-inch/front.webp";
import tvBack from "../assets/images/products/televisions/samsung-55-inch/back.jpg";
import tvSide from "../assets/images/products/televisions/samsung-55-inch/side.webp";
import tvRemote from "../assets/images/products/televisions/samsung-55-inch/remote.jpg";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A56",
    brand: "Samsung",
    category: "Mobile Phones",

    images: [samsungFront, samsungBack, samsungSide, samsungBox],

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

    images: [iphoneFront, iphoneBack, iphoneSide, iphoneBox],

    price: 180000,
    downPayment: 40000,
    monthly: 11667,
    duration: "12 Months",
  },
  {
    id: 3,
    name: "Vivo V50",
    brand: "Vivo",
    category: "Mobile Phones",

    images: [vivoFront, vivoBack, vivoSide, vivoBox],

    price: 145000,
    downPayment: 30000,
    monthly: 9583,
    duration: "12 Months",
  },
  {
    id: 4,
    name: "Royal Ceiling Fan",
    brand: "Royal", // Replace with the actual brand
    category: "Fans",

    images: [fanFront, fanback, fanbox, fanside],

    price: 12500,
    downPayment: 3000,
    monthly: 792,
    duration: "12 Months",
  },
  {
    id: 5,
    name: "Samsung 55 Inch Smart TV",
    brand: "Samsung",
    category: "TVs",

    images: [tvFront, tvBack, tvSide, tvRemote],

    price: 165000,
    downPayment: 35000,
    monthly: 10833,
    duration: "12 Months",
  },
];

export default products;
