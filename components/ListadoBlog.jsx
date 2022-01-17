import styles from '../styles/Blog.module.css'
import Entrada from './Entrada'

export default function ListadoBlog({ entradas }) {
	return (
		<>
			<h2 className="heading">Blog</h2>
			<div className={styles.blog}>
				{entradas.map(entrada => (
					<Entrada key={entrada.id} entrada={entrada} />
				))}
			</div>
		</>
	)
}
