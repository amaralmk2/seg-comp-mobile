import { StyleSheet, ScrollView} from "react-native";
import Map, { Region, Marker } from 'react-native-maps';
import { NavBar } from "src/components/NavBar";
import { ButtonZoomContainer, MapContainer, ButtonZoom, ButtonZoomText, Container, TitleMapContainer, PinImage } from './style';
import { useEffect, useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { api } from "src/api/api";

interface Ocurrences {
    id: number;
    type: string;
    coordinates: {
        lat: number;
        lon: number;
    }
    address: string;
    neighborhood: string;
    hour: string;
    date: string;
}

export function OcurrencesMap() {
    const [ocurrences, setOcurrences] = useState<Ocurrences[]>([])    

    const [region, setRegion] = useState<Region>({
        latitude: -14.796643529927486,
        longitude: -39.03539670880389,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
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

      useEffect(() => {
        async function loadOcurrences () {
           const response = await api.get('/ocurrences')
           setOcurrences(response.data)
        }

        loadOcurrences()
      }, [])

      function getIconByType(type: string) {
        if (type === 'Roubo') {
          return require('../../../assets/images/theft.png');
        } else if (type === 'Homicídio') {
          return require('../../../assets/images/murder.png');
        }
      }

    return (
        <ScrollView>
        <NavBar />
        <Container>
            <TitleMapContainer>
                Mapa de Ocorrências
            </TitleMapContainer>
            <MapContainer>
            <Map style={StyleSheet.absoluteFillObject}
                region={region} onRegionChangeComplete={setRegion}>
                {ocurrences.map((ocurrence) => (
                    <Marker
                        key={ocurrence.id}
                        coordinate={{
                            latitude: ocurrence.coordinates.lat,
                            longitude: ocurrence.coordinates.lon,
                        }}
                        title={ocurrence.type}
                        description={`${ocurrence.address}, ${ocurrence.neighborhood}, dia ${ocurrence.date} ,às ${ocurrence.hour}`}>
                        <PinImage source={getIconByType(ocurrence.type)} />
                    </Marker>
                ))}
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
            </MapContainer>
        </Container>
        </ScrollView>
    )
}