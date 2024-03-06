import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerContainer,
  LogoAndClose,
  BannerLogo,
  CloseButton,
  BannerText,
  GetItNowButton,
} from './styledComponents'

const PremiumBanner = props => {
  const {closeBanner} = props
  const onClickClose = () => {
    closeBanner()
  }

  return (
    <BannerContainer data-testid="banner">
      <LogoAndClose>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseButton type="button" data-testid="close" onClick={onClickClose}>
          <AiOutlineClose />
        </CloseButton>
      </LogoAndClose>
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <GetItNowButton type="button">GET IT NOW</GetItNowButton>
    </BannerContainer>
  )
}

export default PremiumBanner
