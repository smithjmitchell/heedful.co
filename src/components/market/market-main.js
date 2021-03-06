import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import MarketSingle from "./market-single"
import SectionHeader from "../card-items/section-header"

export default function Market() {
  const data = useStaticQuery(graphql`
    query HealthcareQuery {
      allMongodbCluster0Markets(
        limit: 5
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

  const queryData = data.allMongodbCluster0Markets.edges

  const links = queryData.map(({ node }, index) => (
    <MarketSingle node={node} />
  ))

  return (
    <section id="Market">
      <SectionHeader title={"Market News"} />
      <div className="columns is-variable is-3">
        <div className="column is-6">{links.slice(0, 3)}</div>
        <div className="column is-6">{links.slice(3, 5)}</div>
      </div>
    </section>
  )
}
