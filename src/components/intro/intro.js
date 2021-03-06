import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TitleCard from "../vertical-card/title-card"

export default function Intro() {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      allMongodbCluster0Intros(
        limit: 1
        sort: { fields: [mongodb_id], order: DESC }
      ) {
        edges {
          node {
            id
            text
            source_name
            news_url
            title
            desktopImage: localImage {
              childImageSharp {
                fluid(maxWidth: 540, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            mobileImage: localImage {
              childImageSharp {
                fluid(maxWidth: 340) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  const titleCardData = data.allMongodbCluster0Intros.edges[0].node

  return (
    <section id="Intro">
      <TitleCard node={titleCardData} loading={"eager"} />
    </section>
  )
}
