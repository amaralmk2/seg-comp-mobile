import styled from 'styled-components/native';

export const Container = styled.View`
    width: 388px;
    height: 563px;
    margin-top: 25px;
    flex: 1;
`;

export const ContainerForm = styled.TouchableOpacity`
    width: 388px;
    height: 63px;
    padding: 8px;
    border-radius: 8px;
    margin-left: 10px;
    margin-top: 25px;
    align-items: center;
    border-color: black;
    border-width: 0.6px;
    flex-direction: row;
`;

export const TextForm = styled.Text`

    color: #00274D;
    font-size: 25px;
    font-family: 'Roboto';
    margin-left: 12px;

`;

export const SearchContainer = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  width: 388px;
  height: 63px;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
  align-items: center;
  padding: 0 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 16px;
  padding-left: 10px;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

