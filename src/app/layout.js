import "./globals.css";
import { Inter, Syne } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Espacio Tec</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "image": "https://espaciotec.com.ar/bg-img-01.jpg",
              "url": "https://espaciotec.com.ar",
              "logo": "https://espaciotec.com.ar/logo-et.png",
              "name": "Espacio Tec",
              "alternateName": "Museo de Informática",
              "description": "Museo de Informática. Explora la historia y evolución de la informática en armonía con el medio ambiente.",
              "email": "info@espaciotec.com.ar",
              "telephone": "+54 291 427 9120",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thompson 665",
                "addressLocality": "Bahía Blanca",
                "addressCountry": "AR",
                "addressRegion": "Buenos Aires",
                "postalCode": "8000"
              }
            }`,
          }}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
