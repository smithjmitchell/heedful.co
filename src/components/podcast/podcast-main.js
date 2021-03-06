import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PodcastSingle from "./podcast-single"
import SectionHeader from "../card-items/section-header"

export default function Podcast() {
  const data = useStaticQuery(graphql`
    query PodcastQuery {
      allMongodbCluster0Podcasts(
        limit: 3
        sort: { fields: [mongodb_id], order: DESC }
      ) {
        edges {
          node {
            id
            text
            source_name
            news_url
            title
          }
        }
      }
    }
  `)

  const queryData = data.allMongodbCluster0Podcasts.edges

  const links = queryData.map(({ node }, index) => (
    <PodcastSingle node={node} />
  ))

  return (
    <section id="Podcasts">
      <SectionHeader title={"Podcasts"} />
      <div className="columns">{links}</div>
    </section>
  )
}
