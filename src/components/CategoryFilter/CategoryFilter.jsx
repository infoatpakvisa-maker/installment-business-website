const categories = [
  "All",
  "Mobile Phones",
  "Laptops",
  "TVs",
  "Refrigerators",
  "Air Conditioners",
  "Home Appliances",
];

function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          className="bg-blue-100 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;