import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/custom.css";
import React, { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>

			<Component {...pageProps} />
		</React.Fragment>
	);
}
export default MyApp;
