'use client'

import {
  Box,
  Circle,
  Heading,
  Icon,
  SystemProps,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { Section, SectionTitle, SectionTitleProps } from 'components/section'
import Slider from 'react-slick'
// Import the CSS for react-slick
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import * as React from 'react'

import './style.css'

export interface FeaturesProps
  extends Omit<SectionTitleProps, 'title' | 'variant'> {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  iconSize?: SystemProps['boxSize']
}

export interface FeatureProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconSize?: SystemProps['boxSize']
  variant?: string
}

const Feature: React.FC<FeatureProps> = (props) => {
  const { title, description, icon, iconSize = 8, variant } = props
  const styles = useMultiStyleConfig('Feature', { variant })

  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <VStack align="center" sx={styles.container} spacing={4} p={6}>
      {icon && !isMobile && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box textAlign="center">
        <Heading sx={styles.title}>{title}</Heading> <br />
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </VStack>
  )
}

export const Carousel: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
    iconSize = 8,
    align = 'center',
    ...rest
  } = props

  const { colorMode } = useColorMode()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Section {...rest}>
      <VStack spacing={8} alignItems="stretch">
        {(title || description) && (
          <SectionTitle title={title} description={description} align={align} />
        )}
        <Box>
          <Slider {...settings}>
            {features.map((feature, i) => (
              <Feature key={i} iconSize={iconSize} {...feature} />
            ))}
          </Slider>
        </Box>
      </VStack>
    </Section>
  )
}
