import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import randomColor from 'randomcolor'

import { Card } from '@vkr/app-ui-components'

import { PieChart } from 'react-minimal-pie-chart'

import { Container, ChartSection, TasksSection, ColorIndicator, TaskName, TaskContainer } from './styled'

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const dataMock = [
  { key: uuidv4(), title: 'TMR-3267: improve timer page', value: 10 },
  { key: uuidv4(), title: 'TMR-3269: fix timer indicator', value: 15 },
  { key: uuidv4(), title: 'TMR-3251: add charts', value: 20 },
  { key: uuidv4(), title: 'TMR-3167: fix inline indicator', value: 10 },
  { key: uuidv4(), title: 'TMR-3169: integrate timer page', value: 15 },
  { key: uuidv4(), title: 'TMR-3451: implement timer button', value: 20 },
].map((item) => ({ ...item, color: randomColor({ luminosity: 'dark', format: 'rgb' }) }))

export const WeekStatistics = memo(({ common = 90 }) => {
  return (
    <Card title="Week statistics" width="49%" marginLeft="1%">
      <Container>
        <ChartSection>
          <PieChart animate data={dataMock} lineWidth={30} radius={43} />
        </ChartSection>
        <TasksSection>
          {dataMock.map(({ color, title, value, key }) => (
            <TaskContainer key={key}>
              <ColorIndicator color={color} />
              <TaskName>
                <span style={{ fontWeight: 400 }}>{(value / common).toFixed(1) * 100}%</span> {title}
              </TaskName>
            </TaskContainer>
          ))}
        </TasksSection>
      </Container>
    </Card>
  )
})

WeekStatistics.displayName = 'WeekStatistics'
