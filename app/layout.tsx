import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './components/loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS — CONTENT-FIRST, REGION-AGNOSTIC
// ---------------------------------------------------------------------------
const SEO_TITLE = clampTitle(
  `${CONSTANTS.BRAND_NAME} - Premium IPTV Provider & Subscription`
);

const SEO_DESCRIPTION = clampDescription(
  `${CONSTANTS.BRAND_NAME} delivers a full live channel lineup and an extensive on-demand library in 4K Ultra HD. Instant setup, free trial, no contract.`
);

const SEO_OG_TITLE = SEO_TITLE;
const SEO_OG_DESCRIPTION = SEO_DESCRIPTION;
const SEO_TWITTER_TITLE = clampTitle(SEO_TITLE, 70);
const SEO_TWITTER_DESCRIPTION = clampDescription(SEO_DESCRIPTION, 200);

// ---------------------------------------------------------------------------
// VIEWPORT
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6934B8',
};

// ---------------------------------------------------------------------------
// GLOBAL METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: SEO_DESCRIPTION,
  authors: [{ name: CONSTANTS.BRAND_NAME }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
    languages: {
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: SEO_OG_TITLE,
    description: SEO_OG_DESCRIPTION,
    url: SITE_URL,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} - Live TV Channels in 4K Ultra HD`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TWITTER_TITLE,
    description: SEO_TWITTER_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#6934B8',
      },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: CONSTANTS.BRAND_NAME,
    statusBarStyle: 'black-translucent',
  },
  other: {
    'msapplication-TileColor': '#6934B8',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,
    CONSTANTS.TERTIARY_FOCUS_KEYWORD,
    'IPTV Subscription',
    'IPTV services',
    'Buy IPTV',
    '4K IPTV',
    'Premium IPTV',
    'Free IPTV Trial',
    'Sports IPTV Provider',
    'Live TV Streaming Provider',
    'IPTV Firestick',
    'IPTV Smart TV',
    'IPTV Extreme Pro',
    'Ultra HD IPTV',
    'Anti-freeze IPTV',
  ],
};

// ---------------------------------------------------------------------------
// SITE-WIDE SCHEMAS
// Only Organization + WebSite live here. Everything else is page-scoped
// (Product/FAQPage on home, WebPage/Breadcrumb on each page, etc.) to
// avoid duplicate JSON-LD across the whole site.
// ---------------------------------------------------------------------------
const SiteWideSchema = () => (
  <script
    type="application/ld+json"
    id="site-wide-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: CONSTANTS.BRAND_NAME,
            alternateName: `${CONSTANTS.BRAND_NAME} Streaming`,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              '@id': `${SITE_URL}/#logo`,
              url: `${SITE_URL}/img/iptv-logo.webp`,
              contentUrl: `${SITE_URL}/img/iptv-logo.webp`,
              caption: `${CONSTANTS.BRAND_NAME} Logo`,
            },
            image: {
              '@type': 'ImageObject',
              '@id': `${SITE_URL}/#primaryimage`,
              url: `${SITE_URL}/img/structer.webp`,
              contentUrl: `${SITE_URL}/img/structer.webp`,
              width: 1200,
              height: 630,
            },
            description: `${CONSTANTS.BRAND_NAME} is a premium IPTV provider delivering a full live channel lineup and an extensive on-demand library in 4K Ultra HD. Instant WhatsApp setup, free trial available, and flexible pricing with no contract.`,
            address: {
              '@type': 'PostalAddress',
              addressCountry: CONSTANTS.ADDRESS_COUNTRY,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: CONSTANTS.CONTACT.phone,
              email: CONSTANTS.CONTACT.email,
              contactType: 'customer service',
              availableLanguage: ['English'],
              areaServed: [CONSTANTS.ADDRESS_COUNTRY],
            },
            sameAs: [
              CONSTANTS.SOCIALS.twitter,
              CONSTANTS.SOCIALS.instagram,
              CONSTANTS.SOCIALS.facebook,
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: CONSTANTS.BRAND_NAME,
            alternateName: `${CONSTANTS.BRAND_NAME} - Premium IPTV Provider`,
            publisher: { '@id': `${SITE_URL}/#organization` },
            inLanguage: CONSTANTS.LANGUAGE || 'en-US',
          },
        ],
      }),
    }}
  />
);

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-white text-[#341766] selection:bg-[#FFC300] selection:text-[#341766]`}
        suppressHydrationWarning
      >
        <SiteWideSchema />

        <Loading />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />

        <GoogleAnalytics gaId="G-WF2QTPGT4L" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}