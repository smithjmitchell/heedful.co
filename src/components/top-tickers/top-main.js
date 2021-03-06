import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SectionHeader from "../card-items/section-header"
import TopSingle from "./top-single"

export default function TopTickers() {
  const data = useStaticQuery(graphql`
    query tickerQuery {
      allMongodbCluster0Tickers(
        limit: 5
        sort: { fields: [mongodb_id], order: DESC }
      ) {
        edges {
          node {
            id
            date
            news_url
            title
            source_name
          }
        }
      }
    }
  `)

  const queryData = data.allMongodbCluster0Tickers.edges

  const links = queryData.map(({ node }, index) => (
    <TopSingle node={node} key={index} />
  ))

  return (
    <section id="Tickers">
      <SectionHeader title={"Top Tickers"} full={true}/>
      <ul>{links}</ul>
    </section>
  )
}
