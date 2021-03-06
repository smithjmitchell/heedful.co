import React from "react"
import { graphql } from "gatsby"
import HyvorTalk from 'hyvor-talk-react'

import Layout from "../components/layout/layout"
import SectionHeader from "../components/card-items/section-header"
import SEO from "../components/seo"

import "./product-graphql.css"

export const query = graphql`
  query($id: String) {
    mongodbCluster0Markets(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Podcasts(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Tickers(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Technologies(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Events(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Covids(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Intros(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Ipos(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
    mongodbCluster0Politics(id: { eq: $id }) {
      text
      source_name
      news_url
      title
      id
    }
  }
`

const Product = ({ data }) => {
  Object.keys(data).forEach(key => data[key] == null && delete data[key])

  for (const schema in data) {
    const product = data[schema]

    return (
      <Layout>
        <SEO title="Article Comments" />
        <div className="container mt-5">
          <div className="on-main-source">
            <a href={product.news_url} target="_blank" rel="noreferrer noopener">
              <span className="by">via </span>
              {product.source_name}
            </a>
          </div>
          <div className="on-main-title">
            <a href={product.news_url} target="_blank" rel="noreferrer noopener">
              {product.title}
            </a>
          </div>
          <div className="on-main-text">
            <a href={product.news_url} target="_blank" rel="noreferrer noopener">
              {product.text}
            </a>
          </div>

          <div className="article-discussion">
            <SectionHeader title={"Discussion"} />
            <HyvorTalk.Embed websiteId={process.env.HYVOR_WEB_ID} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Product
