import styled from 'styled-components'

import { COLORS_PRIMARY } from '@vkr/app-constants'

export const PreloaderContainer = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS_PRIMARY.background};

  p {
    margin-top: -200px;
  }
`
