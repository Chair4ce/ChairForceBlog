import { Analytics } from '@vercel/analytics/react'

const isProduction = process.env.NODE_ENV === 'production'

const Analytic = () => {
  return <>{isProduction && <Analytics />}</>
}

export default Analytic
