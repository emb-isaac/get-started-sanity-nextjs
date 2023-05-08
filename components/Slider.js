export default function Slider( props ) {
  return (
		<section>
			<p className="eyebrow">Emburse products</p>
		 	<h2 className="header">Technology that grows with you</h2>
			{props.products.length > 0 && (
				<ul>
					{props.products.map((product) => (
						<li key={product._id}>
							<div>
							<img style={{maxHeight: 72, margin: '1rem'}} src={product.logoUrl} />
							<div style={{
								backgroundColor: product?.color, 
								color: product.color?'white':'inherit',
								padding: '3rem',
								margin: '1rem'}}>
							<h3>{product?.name}</h3>
							<small>{product?.blurb}</small>
							</div>
							</div>
							</li>
					))}
				</ul>)}
</section>

	)}