import React, { useEffect, useMemo, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Subject } from 'rxjs'

import Toggle from './Toggle'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import { rhythm } from '../utils/typography'
import moment from 'moment'

const defaultTheme = createTheme({})

const Head = () => <>
  <meta name='theme-color'
    content='#282c35' />
</>

const Layout = props => {
  const { title, children } = props
  const [theme, setTheme] = useState(null)
  const themeSubject = useMemo(() => new Subject(), [])

  useEffect(() => {
    setTheme(
      (document.body.className =
        (window.localStorage.getItem('theme')) ||
        'light')
    )
    themeSubject.subscribe(themeKey => {
      try {
        window.localStorage.setItem('theme', themeKey)
      } catch (err) {
      } finally {
        document.body.className = themeKey
        setTheme(themeKey)
      }
    })
  }, [])
  
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        buildTime
      }
    }
  `)

  const header = (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
        }}
        to={'/'}
      >
        {title}
      </Link>
    </h3>
  )
  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Head />
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.625rem',
          }}
        >
          {header}
          {theme != null ? (
            <Toggle
              icons={{
                checked: (
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />
                ),
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />
                ),
              }}
              checked={theme === 'dark'}
              onChange={e =>
                themeSubject.next(e.target.checked ? 'dark' : 'light')
              }
            />
          ) : (
            <div style={{ height: '24px' }} />
          )}
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built on{' '}
          {moment(data.site.buildTime)
            .local()
            .format('YYYY-MM-DD HH:mm')}{' '}
          with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout