import Styled from "styled-components";

const Wrapper = Styled.div`
width: 558px;

 display: flex;
 flex-direction: column;
 gap:5px;
 padding-top:100px;
 border: 3px solid green;`
const Hello = Styled.div`
color: #000;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px;
`
const Name = Styled.div`
color: #FD5956;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 32px; 

`
const Proffession = Styled.div`
color: #000;
font-family: Poppins;
font-size: 50px;
font-style: normal;
font-weight: 600;


` 
const Description = Styled.div`
color: #000;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;`
const CvBtn = Styled.div`
width: 94px;
height: 26px; 
background: #FD5956;
box-shadow: 0px 24px 48px 6px rgba(253, 89, 86, 0.08), 0px 12px 24px 6px rgba(253, 89, 86, 0.08);
color: #FFFEFD;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal; 
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

export default function HeaderDetails(params) {
return(
    <Wrapper>
        <Hello>Hello, i`m</Hello>
      <Name>Omar Fertat</Name> 
      <Proffession>Full Stack</Proffession>
      <Proffession style={{marginLeft:"60px"}}>Developer</Proffession> 
      <Description>Since creative designers often interact with creative teams, managers and clients, they need strong communication skills.</Description>
      <CvBtn>CV Here</CvBtn>
    </Wrapper>
)
    
}