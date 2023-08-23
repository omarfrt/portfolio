import  Styled  from "styled-components"
const Wrapper = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 30px;
padding-right:40px;
cursor:default;
`
const NavigationItemsWrapper = Styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`
const NavigationItems= Styled.div`

color: #000;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 20px;
&:hover {
    color: #FD5956;
  }
`
const PortrfolioBtn = Styled.div`
width: 140px;
height: 52px;
background: #000;
color: #FFFEFD;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
&:hover {
    color:#000;
    background: #FD5956;
  }
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export default function NavBar(params) {
    return(
        <Wrapper>
            <h1>jlo</h1>
        <NavigationItemsWrapper>
        <NavigationItems>Home</NavigationItems>
        <NavigationItems>About me</NavigationItems>
        <NavigationItems>Services</NavigationItems>
        <NavigationItems>Portfolio</NavigationItems>
        <NavigationItems>Contact</NavigationItems>
        </NavigationItemsWrapper>
        <PortrfolioBtn>Portfolio Here</PortrfolioBtn>
        </Wrapper>
        
    )
}