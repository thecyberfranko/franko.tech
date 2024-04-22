// Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Defina component
const AboutPage = () => {
    return (
        <main>
            <h1>About</h1>
            <Link to="/">Home</Link>
            <p>Hi, my name is franko and I am the architect of this website.</p>
        </main>
    )
}

//  Head component to apply metadata
export const Head = () => <title>About</title>
// Export component
export default AboutPage