// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: '2025-01-01',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['US'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0.00',
        currency: CONSTANTS.CURRENCY,
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: ['US'],
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product`,
    name: `${CONSTANTS.BRAND_NAME} Subscription`,
    sku: `${CONSTANTS.BRAND_NAME.toUpperCase().replace(/\s+/g, '-')}-SUBSCRIPTION`,
    category: 'Streaming Service',
    description: `Experience ${CONSTANTS.FOCUS_KEYWORD} from ${CONSTANTS.BRAND_NAME}. Stream a full live TV channel lineup and an extensive on-demand library in crisp 4K Ultra HD. Built as a dependable ${CONSTANTS.SECONDARY_FOCUS_KEYWORD} for ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} entertainment — with fast WhatsApp support and a free no-obligation trial.`,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/img/structer.webp`,
      contentUrl: `${SITE_URL}/img/structer.webp`,
      width: { '@type': 'QuantitativeValue', value: 1200 },
      height: { '@type': 'QuantitativeValue', value: 630 },
      caption: `${CONSTANTS.BRAND_NAME} - ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} Streaming Service`,
      representativeOfPage: true,
    },
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1255',
      bestRating: '5',
      worstRating: '1',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Device 1 - 3 Months',
        price: '39.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 1 - 6 Months',
        price: '49.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 1 - 12 Months',
        price: '79.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 2 - 3 Months',
        price: '59.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 2 - 6 Months',
        price: '79.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 2 - 12 Months',
        price: '119.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 3 - 3 Months',
        price: '79.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 3 - 6 Months',
        price: '99.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Device 3 - 12 Months',
        price: '149.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What makes ${CONSTANTS.BRAND_NAME} a reliable ${CONSTANTS.SECONDARY_FOCUS_KEYWORD}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${CONSTANTS.BRAND_NAME} delivers dependable ${CONSTANTS.FOCUS_KEYWORD} TV streaming. Instead of traditional cable or satellite connections, we transmit live channels and on-demand titles directly over your high-speed internet connection. Enjoy 4K quality on smart TVs, streaming sticks, and mobile devices.`,
        },
      },
      {
        '@type': 'Question',
        name: `What can ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} customers expect from ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a specialist for ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} content, we offer a broad channel lineup covering major sport, movie, and TV show categories. From live sports events to the latest cinema highlights, customers benefit from anti-freeze servers for greater stability.`,
        },
      },
      {
        '@type': 'Question',
        name: `Which devices can I use with ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service is compatible with Amazon Fire TV Stick, Samsung & LG Smart TVs, Android TV, Apple TV, MAG boxes, Formuler, as well as smartphones and tablets (iOS/Android). Our technical support team is happy to help you choose the right device.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the setup process work after ordering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After selecting your preferred plan, we contact you directly via WhatsApp. Our team supports you step by step with the installation of common player apps (such as TiviMate, IBO Player, or Smart IPTV) and activates your access credentials immediately.',
        },
      },
      {
        '@type': 'Question',
        name: `Does ${CONSTANTS.BRAND_NAME} offer a no-obligation trial?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! You can secure a free 24-hour trial access via WhatsApp. Experience the picture quality, the broad channel selection, and smooth playback before committing to a subscription.',
        },
      },
      {
        '@type': 'Question',
        name: `Which apps are best for ${CONSTANTS.FOCUS_KEYWORD} streaming?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For the best experience, we recommend high-quality players such as TiviMate, IPTV Smarters Pro, IBO Player, or IPTV Extreme. If you need help with setup, our WhatsApp support team is always available.',
        },
      },
      {
        '@type': 'Question',
        name: `Which payment options are available at ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept secure payments via PayPal, credit card, and cryptocurrencies. All plans are transparently priced with no hidden fees and do not commit you to automatic contract renewal.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get help with technical questions or connection issues?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our customer support team is reachable 7 days a week directly via WhatsApp. Whether it is setup questions, app recommendations, or server updates — we provide immediate and helpful support for your streaming experience.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}