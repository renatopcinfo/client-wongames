import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighLight: HighlightProps
}

const WishList = ({
   recommendedGames,
   recommendedHighLight 
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">Wishlist</Heading>
    </Container>

    <Showcase 
      title="You may like these games" 
      games={recommendedGames} 
      highlight={recommendedHighLight}
   />
  </Base>
)

export default WishList
