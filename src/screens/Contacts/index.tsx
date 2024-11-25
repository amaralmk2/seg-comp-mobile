import {ScrollView, View, Linking, StyleSheet } from "react-native";
import { Title, TextSubTitle, ContainerText, TitleInContainer, IconContainer, ContainerText2, TitleInContainer2, ButtonToLink, LinkText} from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import Map, { Marker, Region } from "react-native-maps";
import { useState } from "react";
import { ButtonZoom, ButtonZoomContainer, ButtonZoomText, PinImage } from "../Map-Ocurrences/style";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { NavBar } from "src/components/NavBar";

export default function Contact() {
    function openLink() {
        Linking.openURL("https://delegaciavirtual.sinesp.gov.br/portal/");
    }

    function makePhoneCall(phoneNumber: string) {
        Linking.openURL(`tel:${phoneNumber}`);
    }

    const [region, setRegion] = useState<Region>({
        latitude: -14.796643529927486,
        longitude: -39.03539670880389,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });

    const zoomIn = () => {
        setRegion((prevRegion) => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta / 2,
            longitudeDelta: prevRegion.longitudeDelta / 2,
        }));
    };

    const zoomOut = () => {
        setRegion((prevRegion) => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 2,
            longitudeDelta: prevRegion.longitudeDelta * 2,
        }));
    };

    return (
        <ScrollView>
            <NavBar />
            <Title>SITES</Title>
            <TextSubTitle>Registro de Boletim de Ocorrência</TextSubTitle>
            <ContainerText>
                <ButtonToLink onPress={openLink}>
                    <LinkText>https://delegaciavirtual.sinesp.gov.br/portal/</LinkText>
                </ButtonToLink>
            </ContainerText>
            <Title>CONTATOS</Title>
            <TextSubTitle>Emergência Policial</TextSubTitle>
            <ContainerText>
                <ButtonToLink onPress={() => makePhoneCall("190")}>
                    <TitleInContainer>190</TitleInContainer>
                </ButtonToLink>
            </ContainerText>
            <TextSubTitle>Serviço de atendimento móvel de urgência</TextSubTitle>
            <ContainerText>
                <ButtonToLink onPress={() => makePhoneCall("192")}>
                    <TitleInContainer>192</TitleInContainer>
                </ButtonToLink>
            </ContainerText>
            <TextSubTitle>Bombeiro Militar</TextSubTitle>
            <ContainerText>
                <ButtonToLink onPress={() => makePhoneCall("193")}>
                    <TitleInContainer>193</TitleInContainer>
                </ButtonToLink>
            </ContainerText>
            
            
            <TextSubTitle>Central de atendimento à Mulher</TextSubTitle>
            <ContainerText>
                <ButtonToLink onPress={() => makePhoneCall("180")}>
                    <TitleInContainer>180</TitleInContainer>
                </ButtonToLink>
            </ContainerText>
            <ContainerText2>
                <IconContainer>
                    <Ionicons name="location-sharp" size={40} color="black" />
                </IconContainer>
                <TitleInContainer2>Mapa - Unidades Policiais</TitleInContainer2>
            </ContainerText2>
            <View style={styles.container}>
                <Map style={StyleSheet.absoluteFill}
                     region={region} onRegionChangeComplete={setRegion}>
                    <Marker coordinate={{latitude: -14.826726285679761, longitude: -39.03203627476778}} title="68ª CIPM (Policia Militar)" description="Rua Dom Bendito Zorzi, nº145, R. dos Carilos - Conquista">
                        <PinImage source={require('../../../assets/images/68cipm.png')} />
                    </Marker>
                    <Marker coordinate={{latitude: -14.795648300942316, longitude: -39.04941153243904}} title="69ª CIPM (Policia Militar)" description="Caminho 20 - Hernani Sá">
                        <PinImage source={require('../../../assets/images/69cipm.png')} />
                    </Marker>
                    <Marker coordinate={{latitude: -14.752989059293476, longitude: -39.06709829011095}} title="70ª CIPM (Policia Militar)" description="Km 03, 335, BA-262 - Distrito Industrial">
                        <PinImage source={require('../../../assets/images/70cipm.png')} />
                    </Marker>
                    <Marker coordinate={{latitude: -14.77315094735934, longitude: -39.05926774833887}} title="5ª GBM (Bombeiro Militar)" description="Av. Ver. Amilton de Castro, 1011 - Barra do Itaípe">
                        <PinImage source={require('../../../assets/images/gbm.png')} />
                    </Marker>
                    <Marker coordinate={{latitude: -14.798929383387037, longitude: -39.03623333243897}} title="7ª COORPIN (Policia Civil)" description="Av. Cel. Misael Tavares, 253 - Centro">
                        <PinImage source={require('../../../assets/images/dpilheus.png')} />
                    </Marker>
                    <Marker coordinate={{latitude: -14.78229843000379, longitude: -39.23788937825044}} title="Policia Rodoviária Estadual (Policia Militar)" description="Rod. Jorge Amado, 112 - Ilhéus, BA">
                        <PinImage source={require('../../../assets/images/pre.png')} />
                    </Marker>
                </Map>
                <ButtonZoomContainer>
                    <ButtonZoom onPress={zoomIn}>
                        <ButtonZoomText>
                            <FontAwesome6 name="plus" size={25} color="#FFFFFF" />
                        </ButtonZoomText>
                    </ButtonZoom>
                    <ButtonZoom onPress={zoomOut}>
                        <ButtonZoomText>
                            <FontAwesome6 name="minus" size={25} color="#FFFFFF" />
                        </ButtonZoomText>
                    </ButtonZoom>
                </ButtonZoomContainer>
            </View>
            <Title>UNIDADES FISICAS</Title>
            <TextSubTitle>Delegacia Polícia Civil Ilhéus BA</TextSubTitle>
            <ContainerText>
                <TitleInContainer>Av. Cel. Misael Tavares, 253 - Centro</TitleInContainer>
            </ContainerText>
            <TextSubTitle>69ª CIPM - Companhia Independente de Policia Militar</TextSubTitle>
            <ContainerText>
                <TitleInContainer>Caminho 20 - Hernani Sá</TitleInContainer>
            </ContainerText>
            <TextSubTitle>68ª CIPM - Companhia Independente de Policia Militar</TextSubTitle>
            <ContainerText>
                <TitleInContainer>Rua Dom Bendito Zorzi, nº145, R. dos Carilos - Conquista</TitleInContainer>
            </ContainerText>
            <TextSubTitle>70ª CIPM - Companhia Independente de Policia Militar</TextSubTitle>
            <ContainerText>
                <TitleInContainer>Km 03, 335, BA-262 - Distrito Industrial</TitleInContainer>
            </ContainerText>
            <TextSubTitle>5° Grupamento de Bombeiros Militar de Ilhéus</TextSubTitle>
            <ContainerText>
                <TitleInContainer>Av. Ver. Amilton de Castro, 1011 - Barra do Itaípe</TitleInContainer>
            </ContainerText>
            <TextSubTitle>Polícia Rodoviária Estadual</TextSubTitle>
            <ContainerText>
                <TitleInContainer>Rod. Jorge Amado, 112 - Ilhéus, BA</TitleInContainer>
            </ContainerText>
            <View style={styles.space} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 381,
        height: 418,
        marginLeft: 15,
        marginTop: 15,
    },
    space: {
        height: 55,
    },
});
