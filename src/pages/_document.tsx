import {Head, Html, Main, NextScript} from 'next/document'
import * as React from 'react'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.default.min.css"
                    rel="stylesheet"
                />
            </Head>
            <body
                className="bg-white font-medium text-black selection:bg-magenta-500 selection:text-black dark:bg-black dark:text-white">

            <Main/>
            <NextScript/>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                async
            />

            <script src="https://code.jquery.com/jquery-3.6.0.min.js" async></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" async></script>


            </body>
        </Html>
    )
}