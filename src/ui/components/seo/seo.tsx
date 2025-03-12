import React from "react";

export function SEO() {
	const title = "Siete Colores | Catálogo Web";
	const description =
	  "Siete Colores es una empresa especializada en impresión 3D y grabado láser, fabricando productos personalizados para artesanos y creadores.";
  
	return (
	  <>
		<title>{title}</title>
		<meta name="description" content={description} />
		
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Siete Colores" />

		<meta name="viewport" content="width=device-width" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
  
		<link rel="icon" href="/favicon.ico" />
	  </>
	);
};