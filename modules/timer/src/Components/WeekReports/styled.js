import styled from 'styled-components'

export const WeekReportsContainer = styled.div`
  margin: 0 1.5%;
`

export const TotalWorked = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  margin: 15px 0 30px 0;

  & span {
    color: ${({ isLess }) => (isLess ? 'red' : 'green')};
  }
`

export const WeekDay = styled.div`
  width: 100%;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 15px;
  margin: 0;
  padding: 5px 5px;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & div {
    outline: none;
  }
`

export const WeekDayName = styled.span`
  width: 60px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ isWeekend }) => (isWeekend ? 'red' : 'black')};
`

export const TimeProgressIndicator = styled.div`
  width: 82%;
  padding: 0 30px;
`

export const Percents = styled.div`
  width: 50px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ isCollapsed }) => (isCollapsed ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.2s;
  -webkit-transition: transform 0.2s;
  -moz-transition: transform 0.2s;
`
