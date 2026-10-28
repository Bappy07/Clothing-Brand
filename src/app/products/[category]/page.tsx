import Productsgrid from "@/components/Products/Productsgrid";
type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

async function CategoryContent({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryName =
    category === "tshirt" ? "T-Shirts" :
    category === "shirt" ? "Shirts" :
    category === "jeans" ? "Jeans" :
    category === "cotton-pants" ? "Cotton Pants" :
    "Unknown Category";

  const response = await fetch(
    `http://localhost:3000/api/product?category=${category}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  // API response-কে JavaScript data-তে convert করে।
  const products = data.products ?? [];
  // products না থাকলে empty array ব্যবহার করে।

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-6xl">
        {categoryName}
      </h1>

      <p>Total products: {products.length}</p>
      <Productsgrid  products={products} />
    </main>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryContent params={params} />;
}
