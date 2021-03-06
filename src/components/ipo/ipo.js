import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import VerticalCard from "../vertical-card/vertical-card"
import SectionHeader from "../card-items/section-header"

export default function IPO() {
  const data = useStaticQuery(graphql`
    query IposQuery {
      allMongodbCluster0Ipos(
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

  const queryData = data.allMongodbCluster0Ipos.edges

  const links = queryData.map(({ node }, index) => <VerticalCard node={node} />)

  return (
    <section id="IPO">
      <SectionHeader title={"Monthly IPO"} />
      <div className="columns">{links}</div>
    </section>
  )
}
