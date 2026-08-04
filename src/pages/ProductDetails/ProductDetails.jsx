import { useParams } from "react-router-dom";
import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import products from "../../data/products";

function ProductDetails() {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = useState(
        product.images[0]
    );

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-2 gap-10">

                    {/* LEFT */}

                    <div>

                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full rounded-xl shadow-lg"
                        />

                        <div className="grid grid-cols-4 gap-3 mt-5">

                            {product.images.map((image, index) => (

                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    onClick={() => setSelectedImage(image)}
                                    className="cursor-pointer border rounded-lg hover:border-blue-600"
                                />

                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <h1 className="text-4xl font-bold">
                            {product.name}
                        </h1>

                        <p className="mt-4 text-gray-600">
                            Brand: {product.brand}
                        </p>

                        <p className="text-gray-600">
                            Category: {product.category}
                        </p>

                        <hr className="my-6" />

                        <h2 className="text-3xl font-bold text-blue-700">

                            PKR {product.price}

                        </h2>

                        <div className="mt-6 space-y-2">

                            <p>
                                <strong>Down Payment:</strong> PKR {product.downPayment}
                            </p>

                            <p>
                                <strong>Monthly Installment:</strong> PKR {product.monthly}
                            </p>

                            <p>
                                <strong>Duration:</strong> {product.duration}
                            </p>

                        </div>

                        <a
                            href={`https://wa.me/+923325280260?text=Hello! I want to order ${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Order on WhatsApp
                        </a>

                    </div>

                </div>

            </div>
        </MainLayout>
    );
}

export default ProductDetails;