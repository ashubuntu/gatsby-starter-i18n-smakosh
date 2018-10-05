import React from 'react'
import Helmet from 'react-helmet'
import { Context } from '../Context'
import {
	url,
	description,
	social,
	title,
	socialLinks,
	address,
	contact,
	legalName,
	foundingDate,
	logo,
	favicon,
	cover,
	googleVerification
} from '../../../../data/config'

const SEO = ({ location = '' }) => (
	<Context.Consumer>
		{({ lang }) => {
			const structuredDataOrganization = `{ 
				"@context": "http://schema.org",
				"@type": "Organization",
				"legalName": "${legalName}",
				"url": "${url}",
				"logo": "${logo}",
				"foundingDate": "${foundingDate}",
				"founders": [{
					"@type": "Person",
					"name": "${legalName}"
				}],
				"contactPoint": [{
					"@type": "ContactPoint",
					"email": "${contact.email}",
					"telephone": "${contact.phone}",
					"contactType": "customer service"
				}],
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "${address.city}",
					"addressRegion": "${address.region}",
					"addressCountry": "${address.country}",
					"postalCode": "${address.zipCode}"
				},
				"sameAs": [
					"${socialLinks.twitter}",
					"${socialLinks.google}",
					"${socialLinks.youtube}",
					"${socialLinks.linkedin}",
					"${socialLinks.instagram}",
					"${socialLinks.github}"
				]
			}`
			return (
				<Helmet>
					<html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
					<meta name="google-site-verification" content={googleVerification} />
					<link rel="shortcut icon" href={favicon} />

					<meta name="robots" content="index, follow" />
					<meta name="description" content={description} />
					<meta name="image" content={cover} />

					<meta property="og:url" content={`${url}${location}`} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="og:image" content={cover} />
					<meta property="fb:app_id" content={social.facebook} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content={social.twitter} />
					<meta name="twitter:site" content={socialLinks.twitter} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					<meta name="twitter:image:src" content={cover} />
					<script type="application/ld+json">{structuredDataOrganization}</script>
					<link rel="publisher" href={socialLinks.google} />
					<title>{title}</title>
				</Helmet>
			)
		}}
	</Context.Consumer>
)

export { SEO }
