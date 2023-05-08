import { createClient } from "next-sanity";
import Slider from "../components/Slider";

export default function IndexPage({ products }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
      <Slider products={products} />
      </main>
    </>
  );
}

const client = createClient({
	projectId: '1z0dox3j',
	dataset: 'production',
	apiVersion: '2023-05-05',
	useCdn: false,
});

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]{
		name, color, blurb, _id,
		"logoUrl": logo.asset->url,
	}`);

  return {
    props: {
      products
    }
  };
}


{/* <h2>Our Products</h2>
{products.length > 0 && (
	<ul>
		{products.map((product) => (
			<li key={product._id} style={{backgroundColor: product?.color, color: product.color?'white':'inherit'}}>{product?.name}</li>
		))}
	</ul>
)}
{!products.length > 0 && <p>No products to show</p>}
{products.length > 0 && (
	<div>
		<pre>{JSON.stringify(products, null, 2)}</pre>
	</div>
)}
{!products.length > 0 && (
	<div>
		<div>¯\_(ツ)_/¯</div>
		<p>
			Your data will show up here when you've configured everything
			correctly
		</p>
	</div>
)} */}