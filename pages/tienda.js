import Layout from '../components/Layout'
import Listado from '../components/Listado'

export default function Tienda({ guitarras }) {
	return (
		<Layout pagina="Tienda Virtual">
			<main className="contenedor">
				<h1 className="heading">Nuestra Colección</h1>

				<Listado guitarras={guitarras} />
			</main>
		</Layout>
	)
}

export async function getServerSideProps({ query: { id } }) {
	const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
	const respuesta = await fetch(url)
	const guitarras = await respuesta.json()
	return {
		props: {
			guitarras,
		},
	}
}
