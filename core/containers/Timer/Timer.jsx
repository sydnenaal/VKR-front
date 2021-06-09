import React, { memo, useMemo } from 'react'

import PlayIcon from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu'

import { useToggler } from '../../hooks'
import { Card } from '../../components'

import {
  TimerSection,
  TaskSection,
  TimerContainer,
  TimerButton,
  Counter,
  StaticButtonContainer,
  Indicator,
} from './styled'

export const Timer = memo(() => {
  const [isPlay, playToggle] = useToggler()

  return (
    <Card title="Timer" marginBottom="30px">
      <TimerContainer>
        <TaskSection>
          <DropdownMenu trigger="TMR-3267: improve timer page" triggerType="button">
            <DropdownItemGroup>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Share</DropdownItem>
              <DropdownItem>Move</DropdownItem>
              <DropdownItem>Clone</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
              <DropdownItem>Report</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        </TaskSection>
        <TimerSection>
          {isPlay && <Indicator />}
          <Counter>00:00:00</Counter>
          <StaticButtonContainer>
            <TimerButton onClick={playToggle}>
              {isPlay ? <Pause fontSize="large" /> : <PlayIcon fontSize="large" />}
            </TimerButton>
          </StaticButtonContainer>
        </TimerSection>
      </TimerContainer>
    </Card>
  )
})

Timer.displayName = 'Timer'
