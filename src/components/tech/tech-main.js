import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import MarketSingle from "../market/market-single"
import SectionHeader from "../card-items/section-header"
import TitleCard from "../vertical-card/title-card"

const Tech = props => {
  const data = useStaticQuery(graphql`
    query TechnologyQuery {
      titleCard: allMongodbCluster0Technologies(
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
      bottomCards: allMongodbCluster0Technologies(
        limit: 4
        sort: { fields: [mongodb_id], order: DESC }
      ) {
        edges {
          node {
            id
            text
            source_name
            news_url
            title
            localImage {
              childImageSharp {
                fluid(maxWidth: 248) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  const titleCardData = data.titleCard.edges[0].node
  const bottomCardsData = data.bottomCards.edges

  const bottomCards = bottomCardsData
    .slice(1)
    .map(({ node }) => <MarketSingle node={node} loading={"lazy"} />)

  return (
    <section id="Technology">
      <SectionHeader title={"Technology"} />
      <TitleCard node={titleCardData} loading={"lazy"} />
      <div className="columns">
        <div className="column">{bottomCards.slice(0, 2)}</div>
        <div className="column">{bottomCards.slice(2, 4)}</div>
      </div>
    </section>
  )
}

export default Tech
