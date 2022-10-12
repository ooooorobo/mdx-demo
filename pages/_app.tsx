import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import BlockQuote from "../components/Blockquote";

function MyApp({ Component, pageProps }: AppProps) {
  const mdxComponents = {
    blockquote: BlockQuote
  }
  return <MDXProvider components={mdxComponents}>
    <Component {...pageProps} />
  </MDXProvider>
}

export default MyApp
