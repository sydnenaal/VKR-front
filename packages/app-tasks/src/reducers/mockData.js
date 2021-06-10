import { v4 as uuidv4 } from 'uuid'

export const mockTasks = [
  {
    key: uuidv4(),
    code: 'TMR-3267',
    title: 'implement timer page',
    timings: [{ date: '11.06.2021', time: '01:05:03' }],
  },
  {
    key: uuidv4(),
    code: 'TMR-3251',
    title: 'add statistics charts',
    timings: [{ date: '11.06.2021', time: '01:03:00' }],
  },
  {
    key: uuidv4(),
    code: 'TMR-3269',
    title: 'fix timer indicator',
    timings: [{ date: '11.06.2021', time: '05:03:00' }],
  },
  {
    key: uuidv4(),
    code: 'TMR-3167',
    title: 'fix inline indicator',
    timings: [{ date: '11.06.2021', time: '02:04:30' }],
  },
  {
    key: uuidv4(),
    code: 'TMR-3169',
    title: 'integrate timer page',
    timings: [{ date: '11.06.2021', time: '07:04:30' }],
  },
  {
    key: uuidv4(),
    code: 'TMR-3451',
    title: 'implement timer button',
    timings: [{ date: '11.06.2021', time: '04:05:30' }],
  },
]
