type Product = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

type ProductsgridProps = {
  products: Product[];
};

export default function Productsgrid({
  products,
}: ProductsgridProps) {
 return (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {products.map((product) => (
      <div key={product.id} className="card  bg-white shadow-sm transition-shadow hover:shadow-xl">
        <figure>
          <img src ={product.image || "/placeholder.png"} alt={product.name}/>
        </figure>
        <h2></h2>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="font-bold">Price: ${product.price}</p>

      </div>


      </div>
    ))}
  </div>
);
}