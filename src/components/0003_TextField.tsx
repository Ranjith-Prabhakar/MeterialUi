import { InputAdornment, Stack, TextField ,InputAdornmentClassKey} from "@mui/material"

const MuiTextField = () => {
  return (
    <Stack spacing={2} >
      <Stack direction={'row'} spacing={2}>
        <TextField label="outline(by default it would be outlined)" variant="outlined" size="small" color="secondary"/>
        <TextField label="filled" variant="filled" size="small" color="secondary"/>
        <TextField label="standard" variant="standard" size="small" color="secondary"/>
        <TextField label="required prop" required variant="standard" size="small" color="secondary"/>

        <TextField label="Price" InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}} variant="standard" size="small" color="secondary"/>

        <TextField label="Type prop" type="password" required variant="standard" size="small" color="secondary"/>
        <TextField label="disabled prop" disabled type="password" required variant="standard" size="small" color="secondary"/>
        <TextField label="readonly prop" InputProps={{readOnly:true}} type="password" required variant="standard" size="small" color="secondary"/>
        <TextField label="helperText" helperText='do not share the password' variant="standard" size="small" color="secondary"/>
      </Stack>
    </Stack>
  )
}

export default MuiTextField