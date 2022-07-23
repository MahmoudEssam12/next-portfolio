import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Mahmoud Essam" />
                <meta name="description"
                    content="Mahmoud Essam portfolio, you will see my latest projects , my skills and my resume . here you will find my frontend , backend and fullstack projects . and you can contact me from the form in the bottom of the page." />
                <meta name="keywords"
                    content="mahmoud,essam,mamoudessam,react,portfolio,essaminreact,previous work, frontend developer, backend developer, fullstack web developer, restful api, rest api, react.js, angular, node.js, mongodb, express.js, MEARN stack developer." />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet" />
                <meta name="google-site-verification" content="yYw-a3fG0zSen4-ZpIHSTucuJ_X_0OM8lRmkFMVm-yQ" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}