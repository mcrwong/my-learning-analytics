import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

function UserSettingSnackbar (props) {
  const {
    saved,
    response,
    successMessage = 'Setting saved successfully!',
    failureMessage = 'Setting not saved.'
  } = props

  const [savedSnackbarOpen, setSavedSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  useEffect(() => {
    if (saved) {
      if (response.default === 'success') {
        setSnackbarMessage(successMessage)
      } else {
        setSnackbarMessage(failureMessage)
      }
      setSavedSnackbarOpen(true)
    }
  }, [saved])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={savedSnackbarOpen}
      autoHideDuration={3000}
      onClose={() => setSavedSnackbarOpen(false)}
      message={<span>{snackbarMessage}</span>}
      action={[
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          onClick={() => setSavedSnackbarOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  )
}

export default UserSettingSnackbar