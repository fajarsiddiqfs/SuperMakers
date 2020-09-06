/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="menu">
            <ul>
              <li><a href="https://medium.com/madewithkoji/how-a-professional-yo-yoer-built-launched-and-made-it-1-on-product-hunt-in-less-than-24-hours-e5c6fe4c6df3">Blog</a></li>
              <li><a href="https://t.me/fajarsiddiq">Telegram</a></li>
              <li><a href="https://getmakerlog.com/products/supermakers">Makerlog</a></li>
              <li><a href="https://withkoji.com/">Koji</a></li>
              </ul>
          </div>
          <div className="social">

          <ul>
              <li><a href="https://www.buymeacoffee.com/fajarsiddiq"><svg width="25" height="25" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.77818 31.9116C2.96366 33.097 4.39385 33.6898 6.06923 33.6898H36.4142C38.0897 33.6898 39.5201 33.097 40.705 31.9116C41.89 30.7267 42.4827 29.2962 42.4827 27.6208H0C0.000332138 29.2962 0.593032 30.7267 1.77818 31.9116Z" fill="white"/>
<path d="M11.3795 24.5862H28.069C29.5227 24.5862 30.7713 24.0649 31.8147 23.0217C32.8576 21.9785 33.3792 20.7299 33.3792 19.2759V18.5175H34.8961C37.4092 18.5175 39.5552 17.6287 41.3329 15.8505C43.1105 14.0724 44 11.9271 44 9.41419C44 6.90099 43.1105 4.7553 41.3329 2.97745C39.5553 1.1996 37.4092 0.310303 34.8961 0.310303H7.58621C7.17544 0.310303 6.81989 0.460761 6.51947 0.760681C6.21922 1.06102 6.06909 1.41682 6.06909 1.82767V19.2758C6.06909 20.7298 6.59055 21.9784 7.63371 23.0215C8.67687 24.0649 9.92546 24.5862 11.3795 24.5862ZM33.3792 4.8625H34.8966C36.1611 4.8625 37.2359 5.30507 38.1207 6.18997C39.0055 7.07511 39.4482 8.14966 39.4482 9.41428C39.4482 10.6782 39.0055 11.753 38.1207 12.6385C37.2359 13.5234 36.1611 13.9661 34.8966 13.9661H33.3792V4.8625Z" fill="white"/>
</svg>
</a></li>
              <li><a href="https://www.twitter.com/fajarsiddiqfs"><svg width="25" height="25" viewBox="0 0 47 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47 4.92706C45.2522 5.69375 43.3898 6.20194 41.4481 6.44869C43.4456 5.25606 44.9702 3.38194 45.6869 1.123C43.8246 2.23337 41.7683 3.01769 39.5769 3.45538C37.8086 1.57244 35.2882 0.40625 32.5387 0.40625C27.2042 0.40625 22.9096 4.73613 22.9096 10.0442C22.9096 10.8079 22.9742 11.5423 23.1328 12.2414C15.1222 11.8507 8.03406 8.01144 3.27237 2.16288C2.44106 3.60519 1.95344 5.25606 1.95344 7.03325C1.95344 10.3703 3.67188 13.3283 6.23338 15.0409C4.68531 15.0115 3.16663 14.5621 1.88 13.8541C1.88 13.8835 1.88 13.9217 1.88 13.9599C1.88 18.6423 5.21994 22.5315 9.59975 23.4274C8.81544 23.6419 7.96063 23.7447 7.0735 23.7447C6.45662 23.7447 5.83387 23.7094 5.24931 23.5802C6.49775 27.396 10.0404 30.2013 14.2528 30.2924C10.9745 32.8568 6.81206 34.4019 2.30594 34.4019C1.51575 34.4019 0.757875 34.3667 0 34.2697C4.26819 37.0222 9.32656 38.5938 14.7815 38.5938C32.5122 38.5938 42.206 23.9062 42.206 11.1751C42.206 10.7492 42.1913 10.3379 42.1707 9.92963C44.0831 8.5725 45.6899 6.87756 47 4.92706Z" fill="white"/>
</svg>
</a></li>
              <li><a href="https://www.fajarsiddiq.com/"><svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 32C9.8 32 8 33.8 8 36C8 38.2 9.8 40 12 40C14.2 40 16 38.2 16 36C16 33.8 14.2 32 12 32ZM0 0V4H4L11.2 19.2L8.4 24C8.2 24.6 8 25.4 8 26C8 28.2 9.8 30 12 30H36V26H12.8C12.6 26 12.4 25.8 12.4 25.6V25.3999L14.2 21.9999H29C30.6 21.9999 31.8 21.1999 32.4 19.9999L39.6 7C40 6.6 40 6.4 40 6C40 4.8 39.2 4 38 4H8.4L6.6 0H0ZM32 32C29.8 32 28 33.8 28 36C28 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36C36 33.8 34.2 32 32 32Z" fill="white"/>
</svg>
</a></li>
              <li><a href="https://www.supermakers.xyz"></a></li>
              </ul>
          </div>
          <div className="copyright">Copyright © {new Date().getFullYear()}, SuperMakers.xyz</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
