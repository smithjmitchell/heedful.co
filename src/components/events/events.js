import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SectionHeader from "../card-items/section-header"
import VerticalCardLarge from "../vertical-card/vertical-card-large"
import "./events.css"

export default function Events() {
  const data = useStaticQuery(graphql`
    query TrendingQuery {
      allMongodbCluster0Events(
        limit: 3
        sort: { fields: [mongodb_id], order: DESC }
      ) {
        edges {
          node {
            id
            text
            news_url
            source_name
            title
            localImage {
              childImageSharp {
                fluid(maxWidth: 440) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  const queryData = data.allMongodbCluster0Events.edges

  const links = queryData.map(({ node }, index) => (
    <VerticalCardLarge node={node} />
  ))

  return (
    <section id="Trending">
      <div className="events-background">
        <SectionHeader title={"Trending Events"} light={true} />
        <div className="columns is-variable is-3">{links}</div>
      </div>
    </section>
  )
}
