import type { Metadata } from 'next'
import PortfolioPageIT from './PortfolioPageIT'

export const metadata: Metadata = {
  title: "King Osei — Video Editor",
  description: "Editing long form e short per creator e founder.",
}

export default function HomeIT() {
  return <PortfolioPageIT />
}
