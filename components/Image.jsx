import styled,{css} from "styled-components";
export const Image = styled.img`
width:${(props) => (props.width ? props.width : "auto")};
height:${(props) => (props.height ? props.height : "auto")};
${(props)=>props.opacity && css`
cursor:pointer;
:hover{
    opacity:0.8;
}
`}
`;

