import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 1.5%;
  height: 80%;
  display: flex;
`

export const ChartSection = styled.div`
  width: 35%;
  height: 50%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const Percents = styled.span`
  font-weight: 400;
`

export const TasksSection = styled.div`
  width: 65%;
  height: 100%;
`

export const ColorIndicator = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: ${({ color }) => color || 'transparent'};
`

export const TaskName = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-left: 15px;
  color: black;
`

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 0 3%;
`
