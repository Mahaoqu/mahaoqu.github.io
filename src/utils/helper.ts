import moment, { Moment } from 'moment'

type Rutabaga = {
  name: string
  value: number
}

export const renderRutabagas = (
  data: [number, number][], date: string): Rutabaga[] =>
  data.reduce<{
    currentDate: Moment
    data: [Rutabaga, Rutabaga][]
  }>(({ currentDate, data }, item) => {
    const [first, second] = item
    currentDate.add(1, 'day')
    data.push([
      { name: currentDate.set('hour', 5).format('do-a'), value: first },
      { name: currentDate.set('hour', 13).format('do-a'), value: second }
    ])
    return {
      currentDate,
      data
    }
  }, {
    currentDate: moment(date),
    data: []
  }).data.flatMap(item => item)