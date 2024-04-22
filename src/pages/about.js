// Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define component
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi, my name is franko and I am the architect of this website.</p>
        </Layout>
    )
}

//  Head component to apply metadata
export const Head = () => <Seo title="About" />
// Export component
export default AboutPage