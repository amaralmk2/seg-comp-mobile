import styled from "styled-components/native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Header = styled.View`
    background-color: #00274D;
    width: 100%;
    height: 152px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: 20px 20px 0 0;
`;

export const TitleHeader = styled.Text`

    font-size: 24px;
    font-family: 'Roboto-Bold';
    color: white;
    padding-top: 32px;
    padding-left: 12px;

`;

export const IconContainer = styled.View`
  margin-top: 10px; // Adicione a margem desejada aqui
`;
