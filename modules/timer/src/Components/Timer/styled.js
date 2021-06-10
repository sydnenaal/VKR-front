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
  font-size: 21px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
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

export const TasksContainer = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
  margin-top: 20px;
  width: 100%;
`

export const Task = styled.div`
  cursor: pointer;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;
  background-color: ${({ active }) => (active ? 'rgba(0, 0, 0, 0.12)' : 'white')};

  :hover {
    background-color: ${({ active }) => (active ? 'rgba(0, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.05)')};
  }
`

export const TaskDescription = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: black;
`

export const TaskTimings = styled.div`
  height: 80%;
  display: flex;
`

export const TaskTiming = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
`

export const TimingDescription = styled.div`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
`

export const TimingTime = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: black;
`

export const Divider = styled.hr`
  width: 97%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  align: center;
`
