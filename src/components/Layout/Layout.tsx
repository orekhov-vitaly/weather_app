import { useNavigate } from "react-router-dom"
import {
  LayoutComponent,
  Header,
  Main,
  Logo,
  NavContainer,
  HeaderLogoWrapper,
} from "./styles"
import type { LayoutProps, NavLink } from "./types"
import { navLinksData } from "./data"
import NavigationLink from "components/NavigationLink/NavigationLink"
import { v4 } from "uuid"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const navLinks = navLinksData.map(({ path, name }: NavLink) => {
    return <NavigationLink key={v4()} path={path} name={name} />
  })

  const goToAboutPage = () => {
    navigate("/")
  }

  return (
    <LayoutComponent>
      <Header>
        <HeaderLogoWrapper>
          <Logo onClick={goToAboutPage}>Weather App</Logo>
        </HeaderLogoWrapper>
        <NavContainer>{navLinks}</NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutComponent>
  )
}

export default Layout
