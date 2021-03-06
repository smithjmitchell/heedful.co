import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SectionHeader from "../card-items/section-header"
import HorizontalCard from "../horizontal-card/horizontal-card"

export default function Political() {
  const data = useStaticQuery(graphql`
    query PoliticsQuery {
      allMongodbCluster0Politics(
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
                fluid(maxWidth: 480) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG 
                }
              }
            }
          }
        }
      }
    }
  `)

  const queryData = data.allMongodbCluster0Politics.edges

  const links = queryData.map(({ node }, index) => (
    <HorizontalCard node={node} />
  ))

  return (
    <section id="Political">
      <SectionHeader title="Political" />
      <div className="columns">
        <div className="column is-6">{links[0]}</div>
        <div className="column is-6">{links[1]}</div>
      </div>
      <div className="columns">
        <div className="column is-4">{links[2]}</div>
        <div className="column is-4">{links[3]}</div>
        <div className="column is-4">{links[4]}</div>
      </div>
      <div className="mb-6" />
    </section>
  )
}
