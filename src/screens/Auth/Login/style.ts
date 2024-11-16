import styled from "styled-components/native";

export const Container = styled.View`
    width: 388px;
    height: 563px;
    margin-top: 25px;
    flex: 1;
`;

export const ContainerForm = styled.View`
    width: 388px;
    height: 463px;
    padding: 12px;
    border-radius: 18px;
    margin-left: 10px;
    align-items: center;
    border-color: black;
    border-width: 0.6px;
`;

export const TitleForm = styled.Text`
    font-size: 33px;
    color: #00274D;
    font-family: 'Roboto-Bold';
`;


export const SubTitle = styled.Text`
    font-size: 21px;
    color: #00274D;
    font-family: 'Roboto';
`;

export const EndSubTitle = styled.Text`
    font-size: 21px;
    color: #00274D;
    font-family: 'Roboto';
    text-decoration: underline;
    text-align: center;
`;

interface InputProps {
    hasError: boolean;
  }
  
  export const Input = styled.TextInput<InputProps>`
    background-color: #F5F5F5;
    width: 327px;
    height: 55px;
    margin-top: 6px;
    border-radius: 12px;
    padding: 8px;
    border-width: ${(props: any) => (props.hasError ? '1px' : '0px')};
    border-color: ${(props: any) => (props.hasError ? 'red' : 'transparent')};
  `;


export const ContainerField = styled.View`
    width: 327px;
    height: 89px;
    margin-top: 42px;
`;

export const BottomSend = styled.TouchableOpacity`
    margin-top: 42px;
    width: 327px;
    height: 53px;
    background-color: #FF7733;
    border-radius: 12px;
`;

export const TextBottom = styled.Text`
    font-family: 'Roboto';
    font-size: 19px;
    color: white;
    text-align: center;
    margin-top: 12px;
`;

export const TextErros = styled.Text`
    color: red;
    margin-bottom: 8px;
    font-size: 12px;
`;

export const Link = styled.TouchableOpacity`
    text-align: center;
    margin-top: 13.7px;
`;
