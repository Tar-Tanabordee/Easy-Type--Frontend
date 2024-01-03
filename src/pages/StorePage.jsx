import { CategoryButton } from "../components/ActionButton";
import ItemList from "../components/product/ItemList";
import useProduct from "../hooks/use-product";
import { useEffect } from "react";

export default function StorePage() {
  const { allCategory, filterCategory, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-16 my-10 px-4 justify-center">
      <h1 className="text-4xl mb-10">All Product</h1>
      <div className="flex justify-between items-center mb-7">
        <div className="flex gap-8">
          <CategoryButton title="All" onClick={() => filterCategory("all")} />
          {allCategory.map((category) => (
            <button
              className="btn btn-neutral"
              onClick={() => filterCategory(category.name)}
              key={category.id}
            >
              <CategoryButton title={category.name} />
            </button>
          ))}
        </div>
      </div>
      <ItemList />
    </div>
  );
}
