import { TextInputMask } from 'react-native-masked-text';
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

export const StyledMaskedInput = styled(TextInputMask)<{ hasError: boolean }>`
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

export const SubmitButton = styled.TouchableOpacity`
  background-color: #4a90e2;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
