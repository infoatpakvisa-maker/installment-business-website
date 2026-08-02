import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

function Products() {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Products
        </h1>

        <SearchBar />

        <CategoryFilter />

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>
    </MainLayout>
  );
}

export default Products;