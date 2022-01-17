import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

export default function Nosotros() {
	return (
		<Layout pagina="Nosotros">
			<main className="contenedor">
				<h2 className="heading">Nosotros</h2>
				<div className={styles.contenido}>
					<Image
						layout="responsive"
						width={600}
						height={450}
						alt="Imagen"
						src="/img/nosotros.jpg"
					/>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue
							nisi, sodales eget scelerisque ac, dapibus ac sapien. Nullam id
							mollis arcu. Duis feugiat nibh in libero pulvinar, ut auctor ex
							posuere. Curabitur maximus est eu luctus efficitur. In at nisl
							libero. Sed congue eleifend mauris id feugiat. Maecenas dapibus,
							orci et viverra consequat, orci tellus facilisis mauris, quis
							lacinia lorem ex eu metus. Aliquam erat volutpat. Morbi quis
							rutrum risus. Ut pellentesque porta elit quis rhoncus. Donec
							fringilla in odio sit amet laoreet. Cras efficitur nulla et nibh
							porta ultrices. Phasellus at condimentum lacus. Integer
							scelerisque ultrices finibus.
						</p>
						<p>
							Aliquam erat volutpat. Mauris at condimentum arcu. In pretium
							sollicitudin neque, consequat tempor ipsum dapibus et.
							Pellentesque gravida elementum est. Sed fermentum feugiat dolor,
							eget rhoncus arcu lobortis eget. Nullam interdum vitae est
							faucibus vulputate. Sed a odio lacus. Nulla finibus purus tellus,
							vehicula ullamcorper est interdum ac. Nunc at metus eu eros
							ullamcorper convallis. Donec ac arcu sed magna facilisis pulvinar.
							Nullam feugiat lacus sagittis lacus rhoncus imperdiet. Nullam at
							massa aliquet, imperdiet odio eu, finibus sapien. Proin vehicula
							magna ut lacinia sodales. Duis auctor quis neque at euismod.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	)
}
