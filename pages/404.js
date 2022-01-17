import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/NoEncontrado.module.css'

export default function NoEncontrado() {
	return (
		<div className={styles.noEncontrado}>
			<h1>Pagina no encontrada</h1>
			<Link href="/">Volver al inicio</Link>
		</div>
	)
}
