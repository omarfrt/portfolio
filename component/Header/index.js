import Styled from "styled-components";
import HeaderImageView from "./HeaderImageView";
import HeaderDetails from "./HeaderDetails";

const Wrapper = Styled.div`
display: flex;
justify-content: space-between;
`

export default function Header(params) {
    return(
        <Wrapper>
            <HeaderDetails/>
            <HeaderImageView/>
        </Wrapper>
    )
}