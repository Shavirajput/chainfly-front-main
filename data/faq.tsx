import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: '1. What industries does Chainfly primarily serve?',
      a: (
        <>
          Chainfly specialises in providing image analysis solutions for a range of industries. Our primary
focus is on Solar Energy, ensuring efficient operation and maintenance. Additionally, we cater to
the real estate and construction industries, as well as waste management and agriculture. We
also offer custom solutions tailored to unique business needs
        </>
      ),
    },
    {
      q: '2. How does Chainfly utilise drone technology and satellite data in its solutions?',
      a: "Chainfly leverages cutting-edge drone technology for data collection, offering it as an optional service For broader analysis we integrate GIS mapping using satellite data enabling comprehensive insights and precise decision-making for clients.",
    },
    {
      q: '3. What advanced technology integrations does Chainfly offer?',
      a: 'Our platform supports building 3D models, digital twins, AR/VR applications, and even NFT integration, making it a versatile solution for modern businesses seeking advanced visualisation and asset management tools.',
    },
    {
      q: '4. Can Chainfly’s solutions be customised for specific business needs?',
      a: 'Yes, Chainfly specialises in custom solutions to address unique challenges across industries. Our team works closely with clients to deliver tailored outcomes, whether it’s advanced modelling, data visualisation, or integration with existing workflows.',
    },
    {
      q: '5. How does Chainfly help businesses improve efficiency and decision-making?',
      a: 'Chainfly transforms raw image data into actionable insights through advanced analytics and visualisation tools. By providing detailed reports and interactive models, we empower businesses to optimise operations, reduce costs, and confidently make informed decisions'
    }
  ],
}

export default faq
