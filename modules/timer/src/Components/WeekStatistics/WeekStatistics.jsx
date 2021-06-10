import React, { useMemo, memo } from 'react'
import randomColor from 'randomcolor'

import { Card } from '@vkr/app-ui-components'
import { useTasks } from '@vkr/app-tasks'

import { PieChart } from 'react-minimal-pie-chart'

import { Container, ChartSection, TasksSection, ColorIndicator, TaskName, TaskContainer, Percents } from './styled'

export const WeekStatistics = memo(({ common = 90 }) => {
  const { tasks } = useTasks()

  const coloredTasks = useMemo(() => {
    const getHandledTask = (item) => ({
      ...item,
      value: 0,
      description: `${item.code}: ${item.title}`,
      color: randomColor({ luminosity: 'dark', format: 'rgb' }),
    })

    return tasks.map(getHandledTask)
  }, [tasks])

  return (
    <Card title="Week statistics" width="49%" marginLeft="1%">
      <Container>
        <ChartSection>
          <PieChart animate data={coloredTasks} lineWidth={30} radius={43} />
        </ChartSection>
        <TasksSection>
          {coloredTasks.map(({ color, description, value = 0, key }) => {
            const percentsValue = (value / common).toFixed(1) * 100

            return (
              <TaskContainer key={key}>
                <ColorIndicator color={color} />
                <TaskName>
                  <Percents>{percentsValue}%</Percents> {description}
                </TaskName>
              </TaskContainer>
            )
          })}
        </TasksSection>
      </Container>
    </Card>
  )
})

WeekStatistics.displayName = 'WeekStatistics'
