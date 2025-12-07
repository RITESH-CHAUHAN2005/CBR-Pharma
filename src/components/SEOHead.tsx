import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "CBR Pharma - Clinical Based Remedies | Your Trusted Healthcare Partner",
  description = "CBR Pharma offers genuine medicines, health supplements, and wellness products. Your trusted partner in quality healthcare with fast delivery across India.",
  keywords = "CBR Pharma, Clinical Based Remedies, online pharmacy, medicines, health supplements, prescription medicines, OTC medicines, healthcare products, genuine medicines, trusted pharmacy India",
  image = "https://cbrpharm.com/og-image.jpg",
  url = "https://cbrpharm.com",
  type = "website",
}: SEOHeadProps) => {
  const fullTitle = title.includes("CBR Pharma") ? title : `${title} | CBR Pharma`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="CBR Pharma" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CBR Pharma" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@CBRPharma" />

      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#1e4d8c" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CBR Pharma",
          "alternateName": "Clinical Based Remedies",
          "url": "https://cbrpharm.com",
          "logo": "https://cbrpharm.com/logo.png",
          "description": "Your trusted partner in quality healthcare. CBR Pharma offers genuine medicines and health products.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9555559919",
            "email": "abhishek@cbrpharm.com",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://facebook.com/cbrpharma",
            "https://twitter.com/cbrpharma",
            "https://instagram.com/cbrpharma"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
