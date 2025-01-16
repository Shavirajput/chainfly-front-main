'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { Carousel } from '#components/Carousel'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

// export const meta: Metadata = {
//   title: 'Chainfly',
//   description: 'Free SaaS landingspage starter kit',
// }

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      {/* <FeaturesSection /> */}

      {/* <TestimonialsSection /> */}

      {/* <PricingSection /> */}

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={<FallInPlace> At Chainfly, we redefine how industries leverage AI image analysis for actionable insights</FallInPlace>}
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Chainfly leverages drone technology and AI-driven data analytics
                to transform infrastructure management.
              </FallInPlace>
            }
          >
            {/* Commented out the Drone3d component */}
            {/* <Box
              height="600px"
              position="absolute"
              display={{ base: 'none', lg: 'block' }}
              left={{ lg: '60%', xl: '55%' }}
              width="80vw"
              maxW="800px"
              margin="0 auto"
            >
              <Canvas>
                <Environment preset="sunset" />
                <OrbitControls autoRotate={true} />
                <Drone3d />
              </Canvas>
            </Box> */}
          </Hero>
        </Stack>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 3]}
        title="Transforming Industries"
      >
        <VStack alignItems="flex-start" spacing="6">
          <Text color="muted" fontSize="xl">
          At Chainfly, we are transforming industries with innovative drone technology and advanced AI-powered data analytics. Our mission is to deliver high-precision insights that empower businesses to optimize operations, enhance safety, and drive efficiency across a wide range of applications. From asset monitoring and predictive maintenance to environmental surveillance and logistics, our solutions are designed to meet the unique demands of modern industries. By combining cutting-edge technology with tailored strategies, we streamline workflows, reduce costs, and enable smarter decision-making, shaping a more connected and resilient future for businesses worldwide.
          </Text>
        </VStack>
      </HighlightsItem>
    </Highlights>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home;
