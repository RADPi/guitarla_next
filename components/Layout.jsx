/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, pagina, guitarra }) {
	return (
		<div>
			<Head>
				<title>GuitarLA - {pagina}</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header guitarra={guitarra} />
			{children}
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	guitarra: null,
}
