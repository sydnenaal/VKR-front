import { path } from 'ramda'

import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

export const useStyles = makeStyles((theme) => {
  const mainColor = path(['palette', 'primary', 'main'], theme)
  const background = path(['palette', 'action', 'disabledBackground'], theme)

  return {
    todayCell: {
      backgroundColor: fade(mainColor, 0.1),
      '&:hover': { backgroundColor: fade(mainColor, 0.14) },
      '&:focus': { backgroundColor: fade(mainColor, 0.16) },
    },
    weekendCell: {
      backgroundColor: fade(background, 0.04),
      '&:hover': { backgroundColor: fade(background, 0.04) },
      '&:focus': { backgroundColor: fade(background, 0.04) },
    },
    today: { backgroundColor: fade(mainColor, 0.16) },
    weekend: { backgroundColor: fade(background, 0.06) },
  }
})
