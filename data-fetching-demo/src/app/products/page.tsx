import { cookies } from "next/headers";

// export const fetchCache = "default-cache";

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
};

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3001/products", {
    next: { revalidate: 10 },
  });
  const products = await response.json();
  //   const detailsResponse = await fetch("http://localhost:3001/products/1");
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("theme");

  //   const details = await detailsResponse.json();

  return (
    <ul className="space-y-4 p-4">
      {products.map((product: ProductType) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          {/* <p>{details.title}</p> */}
        </li>
      ))}
    </ul>
  );
};
export default ProductsPage;
