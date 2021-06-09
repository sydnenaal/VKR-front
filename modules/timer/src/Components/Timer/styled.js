import styled from 'styled-components'

import { COLORS_PRIMARY } from '@vkr/app-constants'

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StaticButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  margin: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Indicator = styled.div`
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 20px 0 20px;
`

export const TimerButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 2px 2px 3px #bdbdbd;
  border-radius: 50%;
  background-color: ${COLORS_PRIMARY.background};

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    width: 48px;
    height: 48px;
  }

  &:focus {
    outline: none;
  }
`

export const TimerSection = styled.div`
  width: auto;
  min-width: 300px;
  margin-right: 1.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const TaskSection = styled.div`
  width: auto;
  margin: 0 1.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 50px;
  font-size: 23px;

  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`
