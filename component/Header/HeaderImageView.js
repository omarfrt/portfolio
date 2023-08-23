import Image from "next/image"
import  Styled  from "styled-components"
import Vectorgrey from "../../public/Vector-grey.svg"
import VectorOrange from "../../public/Vector-orange.svg"
import overlay from "../../public/overlay.svg"
import jlo from "../../public/jlo-nobg.png"

const Wrapper = Styled.div`
width: 553px;
height: 360px; 
`
const VectGrey = Styled(Image)`
position: absolute;
z-index: -2;
width: 344px;
height: 380px;
padding-left:160px; 
padding-top:60px
`
const VectOrange = Styled(Image)`
position: absolute;
z-index: -1;
width: 344px;
height: 380px;
padding-left:150px; 
padding-top:65px
`
const OverLay = Styled(Image)`
position:absolute;
z-index: 1;
padding-left:140px;
width: 360px;
height: 600px; 
`
const Jlo = Styled(Image)`
position:absolute;
z-index: 1;
margin-top: 95px;
margin-left:33px;
width :590px;
height:340px;
`
export default function HeaderImageView(params) {
    return(
        <Wrapper>
            <Jlo priority
            src={jlo}
            alt="jlo"
             />
             <VectOrange src={VectorOrange} alt="vec orange"/>
            <VectGrey src={Vectorgrey} alt="vec grey"/>
            <OverLay src={overlay} alt="overlay"/>
        </Wrapper>
    )
    
}