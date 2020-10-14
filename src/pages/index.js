import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityPost {
    edges{
      node{
        title
        slug{
          current
        }
        author {
          id
        }
        mainImage{
          asset{
            fluid{
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}`;

function saveFile() {
  console.log('hi');
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <h1>News</h1>
    <p>Welcome to your new Gatsby site.</p>
    <ul>
      {data.allSanityPost.edges.map(({ node: post }) => (
        <li key={post.slug.current}>
          <h2>{post.title}</h2>
        </li>
      ))}
    </ul>
    <input type='button' onClick={() => saveFile()} value='Save Text Box' /> 
  </Layout>
)

export default IndexPage
