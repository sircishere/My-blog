import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"


const Animation = ({text}) => (
  <ScrollAnimation className="portfolio-header" animateOut="fadeOut" duration={1} offset={250} initiallyVisible="true">{text}</ScrollAnimation>
);



const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes


  return (
    <div>
      <Animation text="a new destination"/>

      <h2 className="view-me">
        view me
      </h2>
      
    </div>
  )
}

export default Portfolio

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
