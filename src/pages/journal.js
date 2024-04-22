import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Journal">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={ node.name }>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const journalPosts = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <Seo title="My Journal" />

export default BlogPage