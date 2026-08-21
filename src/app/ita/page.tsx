import PortfolioPageIT from './PortfolioPageIT'
import portfolioData from '@/data/portfolio.json'
import { copyIT } from '@/data/copy'

export default function HomeIT() {
  return <PortfolioPageIT copy={copyIT} videos={portfolioData.longFormVideosIT} />
}
