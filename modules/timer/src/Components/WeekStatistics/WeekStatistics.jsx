import React, { useMemo, memo } from 'react'
import randomColor from 'randomcolor'

import { Card } from '@vkr/app-ui-components'
import { useTasks } from '@vkr/app-tasks'

import { PieChart } from 'react-minimal-pie-chart'

import { Container, ChartSection, TasksSection, ColorIndicator, TaskName, TaskContainer } from './styled'

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const WeekStatistics = memo(({ common = 90 }) => {
  const { tasks } = useTasks()

  const coloredTasks = useMemo(
    () =>
      tasks.map((item) => ({
        ...item,
        value: 0,
        description: `${item.code}: ${item.title}`,
        color: randomColor({ luminosity: 'dark', format: 'rgb' }),
      })),
    [tasks],
  )

  return (
    <Card title="Week statistics" width="49%" marginLeft="1%">
      <Container>
        <ChartSection>
          <PieChart animate data={coloredTasks} lineWidth={30} radius={43} />
        </ChartSection>
        <TasksSection>
          {coloredTasks.map(({ color, description, value = 0, key }) => (
            <TaskContainer key={key}>
              <ColorIndicator color={color} />
              <TaskName>
                <span style={{ fontWeight: 400 }}>{(value / common).toFixed(1) * 100}%</span> {description}
              </TaskName>
            </TaskContainer>
          ))}
        </TasksSection>
      </Container>
    </Card>
  )
})

WeekStatistics.displayName = 'WeekStatistics'
