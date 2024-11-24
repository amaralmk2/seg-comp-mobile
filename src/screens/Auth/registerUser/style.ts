import styled from 'styled-components/native';

export const FormContainer = styled.View`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

interface InputProps {
    hasError: boolean;
  }
  
export const StyledInput = styled.TextInput<InputProps>`
  border: 1px solid ${(props: any) => (props.hasError ? 'red' : '#ccc')};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const PickerContainer = styled.View`
  border: 1px solid ${({ hasError }: { hasError: boolean }) => (hasError ? "red" : "#ccc")};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`

export const SubmitButton = styled(Button)`
  background-color: #FF7733;
`;

export const ReturnScreenButton = styled(Button)`
  background-color: #6D9DFC;
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const PasswordRequirementContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`

export const RequimentsText = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`

export const PrivacyPolicyContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px;
  overflow: hidden;
`

export const PrivacyPolicyScrollView = styled.ScrollView`
  padding: 10px;
`

export const PrivacyPolicyText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #333;
`
