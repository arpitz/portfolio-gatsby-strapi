import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div className="underline"></div>
        <h1>i'm arpit</h1>
        <h4>freelance web and mobile UI/UX designer</h4>
        <Link to="/contact" className="btn">
          contact me
          </Link>
        <SocialLinks />
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
