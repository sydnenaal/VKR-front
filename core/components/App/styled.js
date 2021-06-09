import styled from 'styled-components'

import { COLORS_PRIMARY } from '@vkr/app-constants'

export const PageContainer = styled.div`
  padding: 0 30px 30px 30px;
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS_PRIMARY.background};

  body {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
`
