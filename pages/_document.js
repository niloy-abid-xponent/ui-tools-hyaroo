/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
 import React from 'react';
 import Document, { Html, Head, Main, NextScript } from 'next/document';
 
 export default class MyDocument extends Document {
   render() {
     return (
       <Html lang="en">
         <Head>
           <meta charSet="utf-8" />
       
           <meta
             name="robots"
             content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
           />
           {/* Preload fonts */}
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-Black.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-Bold.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-ExtraBold.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-ExtraLight.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-Light.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-Medium.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-Regular.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-SemiBold.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/worksans/WorkSans-Thin.ttf"
              as="font"
              crossOrigin=""
            />
            
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
 }