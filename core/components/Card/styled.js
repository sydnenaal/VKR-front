import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 3px #bdbdbd;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  margin-left: ${({ marginLeft }) => marginLeft || '0'};
  margin-right: ${({ marginRight }) => marginRight || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`
export const Title = styled.div`
  width: 100%;
  font-size: 23px;
  font-weight: 500;
  margin-left: 1.5%;
`

export const Divider = styled.hr`
  width: 97%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  align: center;
`
