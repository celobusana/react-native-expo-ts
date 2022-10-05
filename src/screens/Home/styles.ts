import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
  color:${({ theme }) => theme.colors.text };
  font-family: ${({ theme }) => theme.fonts.medium };
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_highlight};
  font-size: ${({ theme }) => theme.fonts.size.xlarge};
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 543px;
  justify-content: flex-end;
   padding: 0 24px 16px;
`;