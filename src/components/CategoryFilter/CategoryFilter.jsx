function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "All",
    "Mobile Phones",
    "Laptops",
    "TVs",
    "Refrigerators",
    "Air Conditioners",
    "Fans",
    "Air Coolers",
  ];

  return (
    <div className="flex flex-wrap gap-3 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg ${selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;