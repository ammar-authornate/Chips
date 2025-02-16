import styled from 'styled-components';
export const Inputbox = styled.input`
padding-top: ${(props) => (props.pt ? props.pt : '14px')};
padding-bottom: ${(props) => (props.pb ? props.pb : '20px')};
padding-left: ${(props) => (props.pl ? props.pl : '20px')};
padding-right: ${(props) => (props.pr ? props.pr : '20px')};
background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
border-radius: ${(props) => (props.br ? props.br : '1px')};
color: ${(props) => (props.color ? props.color : 'white')};
width: ${(props) => (props.width ? props.width : '100%')};
height: ${(props) => (props.height ? props.height : '101px')};
border: '1px solid #FFFFFF';
`;
export function InputBox(props) {
  return (
    <Inputbox
      style={props.style}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
}