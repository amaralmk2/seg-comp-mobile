import { PrivacyPolicyContainer, PrivacyPolicyScrollView, PrivacyPolicyText } from "../style";
export function PrivacyPolicy() {
    return (
        <PrivacyPolicyContainer>
          <PrivacyPolicyScrollView>
            <PrivacyPolicyText>
              Termos de Uso e Política de Privacidade:

              1. Aceitação dos Termos
              Ao usar este aplicativo, você concorda com os termos descritos neste documento.

              2. Coleta de Dados
              Este aplicativo coleta informações para melhorar sua experiência.

              3. Compartilhamento de Dados
              Não compartilhamos seus dados com terceiros sem seu consentimento.

              4. Modificações nos Termos
              Reservamo-nos o direito de modificar estes termos a qualquer momento.

              5. Contato
              Para dúvidas sobre sua privacidade, entre em contato conosco.

              Por favor, role para ler todos os termos.
            </PrivacyPolicyText>
         </PrivacyPolicyScrollView>
        </PrivacyPolicyContainer>
    )
}