export const getAllCategories = async () => {
  try {
    const res = await fetch("/api/products");
    const products = await res.json();
    const categories = Array.from(
      new Set(products.map((product) => product.category))
    );
    return categories;
  } catch (err) {}
};
