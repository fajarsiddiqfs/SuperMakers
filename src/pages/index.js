import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import SectionOne from '../components/sectionOne'
import SectionTwo from '../components/sectionTwo'
import SectionThree from '../components/sectionThree'
import SectionFour from '../components/sectionFour'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </Layout>
)

export default IndexPage
