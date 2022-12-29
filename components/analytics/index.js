import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import Umami from './Umami'
import Posthog from './Posthog'
import siteMetadata from '@/data/siteMetadata'
import { Analytics } from '@vercel/analytics/react'

const isProduction = process.env.NODE_ENV === 'production'

const Analytic = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
      {isProduction && <Analytics />}
      {isProduction && siteMetadata.analytics.posthogAnalyticsId && <Posthog />}
    </>
  )
}

export default Analytic
