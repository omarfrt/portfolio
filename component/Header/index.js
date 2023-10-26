import Image from "next/image";
import Styled from "styled-components";
import HeaderImageView from "./HeaderImageView";
import HeaderDetails from "./HeaderDetails";
import Accaro from "../../public/accaro.svg"
const Wrapper = Styled.div`
display: flex;
justify-content: space-between;
margin: 10px 100px 0px 100px;
`
const BgVector = Styled(Image)`
position: absolute;
width: 100vw;
height: 380px;
z-index:-9;
`
export default function Header(params) {
    return(
        <Wrapper>
            <HeaderDetails/>
            <HeaderImageView/>
            <BgVector src={Accaro} alt="accaro"/>
        </Wrapper>
    )
}