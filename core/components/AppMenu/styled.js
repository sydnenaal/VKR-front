import styled from 'styled-components'

export const MenuItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  cursor: pointer;

  :hover {
    background: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 8%, rgba(2, 0, 36, 0.1) 100%);
  }
`

export const MenuItemIcon = styled.div`
  width: 70px;
  min-width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuItemTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;

  height: 100%;
  width: 180px;
  font-family: 'Roboto Mono', monospace;
`
