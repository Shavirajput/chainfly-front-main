
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Chainfly',
    description: 'AI Image Analysis for industries.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        
      </>
    ),
    links: [
      {
        href: 'https://calendly.com/lakshaytaneja53/30min?month=2024-11',
        label: 'Contact',
      },
      {
        href: 'https://xd.adobe.com/view/c67b09cd-889e-4d3a-8850-2f37a1f13712-9328/?fullscreen',
        label: 'Demo',
      }
    ],
  },
}

export default siteConfig
