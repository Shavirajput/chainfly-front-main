import { NextSeo, NextSeoProps } from 'next-seo';

import React from 'react'

import siteConfig from '#data/config'

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title, description, ...props }: any) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ ...siteConfig.seo.openGraph, title, description }}
    titleTemplate={siteConfig.seo.titleTemplate}
    twitter={siteConfig.seo.twitter}
    {...props}
  />
)
