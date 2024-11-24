import styled from "styled-components/native";

export const Container = styled.View`
      flex: 1;
      padding: 8px;
`

export const MapContainer = styled.View`
    border-radius: 8px;
    overflow: hidden;
    height: 450px;
`;

export const TitleMapContainer = styled.Text`
    color: #00274D;
    font-size: 20px;
    font-family: 'Roboto';
    text-align: center;
    margin-bottom: 20px;
`

export const ButtonZoomContainer = styled.View `
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    flex-direction: row;
    justify-content: space-around;
`

export const ButtonZoom = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: #00274D;
` 

export const ButtonZoomText = styled.Text`
    color: #FFFFFF;
    text-align: center;
`

export const PinImage = styled.Image`
    width: 30px;
    height: 30px;
`