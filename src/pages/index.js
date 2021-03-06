import React from "react"

import Covid from "../components/covid/covid"
import Events from "../components/events/events"
import Intro from "../components/intro/intro"
import IPO from "../components/ipo/ipo"
import Layout from "../components/layout/layout"
import Market from "../components/market/market-main"
import Podcast from "../components/podcast/podcast-main"
import Political from "../components/political/political"
import SEO from "../components/seo"
import Tech from "../components/tech/tech-main"
import TopTickers from "../components/top-tickers/top-main"

import Icon from "../assets/comment.svg"
import "./mystyles.scss"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container is-fullhd">
      <h1 className="on-heading-title on-heading-style is-size-3-mobile">
        Heedful
      </h1>
      <div className="mb-6 subheading-container">
        <span className="mt-1 comment-icon">
          <Icon />
        </span>
        <span className="subheading">- start a discussion.</span>
      </div>
      <Intro />
      <Market />
      <Covid />
      <Events />
      <section className="multi-section">
        <div className="columns">
          <div className="column is-8">
            <Podcast />
          </div>
          <div className="column is-4">
            <TopTickers />
          </div>
        </div>
      </section>
      <Tech />
      <Political />
      <IPO />
    </div>
  </Layout>
)

export default IndexPage
