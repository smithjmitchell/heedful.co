import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container is-fullhd">
      <h1 className="on-heading-title on-heading-style is-size-3-mobile">
        Heedful
      </h1>
      <section id="Disclaimer" className="mt-6">
        <h2 className="on-main-title">Disclaimer</h2>
        <p className="on-about-text">
          <br />
          All the information on this website is published in good faith and for
          general information purposes only.
          <br />
          <br />
          Heedful.co does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (Heedful.co), is strictly at
          your own risk. We will not be liable for any losses and/or damages in
          connection with the use of our website.
          <br />
          <br />
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone ‘bad'.
          <br />
          <br />
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business.
          <br />
        </p>
      </section>
      <section id="Privacy" className="mt-6">
        <h2 className="on-main-title">Privacy</h2>
        <p className="on-about-text">
          <br />
          Heedful.co does <strong>not</strong> store, gather, or interpret your
          personal data in any way.
          <br />
          <br />
          We currently utilize{" "}
          <strong>
            <a
              href="https://hyvor.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hyvor
            </a>
          </strong>{" "}
          for our commenting forms. By using this utility, you agree to their{" "}
          <strong>
            <a
              href="https://hyvor.com/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
            >
              Privacy Policy
            </a>
          </strong>
          . Hyvor allows for account creation or guest commenting.
        </p>
      </section>
      <div className="pb-6" />
    </div>
  </Layout>
)

export default About
