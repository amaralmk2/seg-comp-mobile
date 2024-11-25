import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Container, TipBox, TipText, Title } from "./style";
import { NavBar } from "src/components/NavBar";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const safetyTips = [
  "Mantenha seus pertences sempre à vista e próximos de você.",
  "Evite utilizar o celular em locais movimentados e com pouca segurança.",
  "Nunca revele informações pessoais para desconhecidos.",
  "Sempre trave as portas e janelas de sua casa, mesmo quando estiver presente.",
  "Evite saídas tarde da noite sem companhia ou sem avisar alguém.",
  "Prefira trajetos conhecidos e bem iluminados ao caminhar à noite.",
  "Não reaja em casos de assalto, preserve sua integridade física.",
  "Informe sempre a familiares ou amigos sobre sua localização e planos.",
  "Cuidado ao realizar saques em caixas eletrônicos, prefira locais movimentados.",
  "Evite compartilhar sua localização em redes sociais em tempo real.",
  "Ao estacionar, verifique se as portas estão trancadas e evite locais isolados.",
  "Ao sair de um estabelecimento, observe se há pessoas suspeitas ao redor.",
  "No transporte público, fique atento aos seus pertences e evite aglomerações.",
  "Desconfie de ofertas que parecem boas demais para serem verdadeiras.",
  "Tenha sempre os contatos de emergência salvos no seu celular.",
  "Informe qualquer atividade suspeita às autoridades locais.",
];

export function DailyTips() {
  const [currentTips, setCurrentTips] = useState<string[]>([]);

  useEffect(() => {
    const updateTips = () => {
      const hour = new Date().getHours();
      const startIndex = hour % safetyTips.length;
      const tipsToShow = [];

      for (let i = 0; i < 4; i++) {
        const index = (startIndex + i) % safetyTips.length;
        tipsToShow.push(safetyTips[index]);
      }

      setCurrentTips(tipsToShow);
    };

    updateTips();
    const interval = setInterval(updateTips, 3600000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <NavBar />
    <Container>
      <Title>
         Dicas de Segurança
         <FontAwesome6 name="lightbulb" size={35} color="#FF7733" />
      </Title>
      <ScrollView>
        {currentTips.map((tip, index) => (
          <TipBox key={index}>
            <TipText>{tip}</TipText>
          </TipBox>
        ))}
      </ScrollView>
    </Container>
    </>
  );
}

