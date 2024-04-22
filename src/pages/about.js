// Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Define component
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi, my name is franko and I am the architect of this website.</p>
        </Layout>
    )
}

//  Head component to apply metadata
export const Head = () => <title>About</title>
// Export component
export default AboutPage