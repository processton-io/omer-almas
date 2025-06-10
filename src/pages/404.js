import * as React from "react"
import { Link } from "gatsby"
import {Seo} from '../components/Seo'


// markup
const NotFoundPage = () => {
  return (
    <main className="max-w-7xl mx-auto py-24 md:py-36 lg:py-48">
      <h1 className="text-7xl mb-12">Page not found</h1>
      <p className="text-md mb-8">
        Sorry, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="bg-red-100 text-red-900 p-1 rounded-md">src/pages</code>.
            <br />
          </>
        ) : null}
        <br />
      </p>
      <Link to="/" className="p-3 px-4 rounded-md">Go home</Link>
    </main>
  )
}

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
