export const formatearFecha = fecha => {
	return new Date(fecha).toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	})
}
