import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      paper: {
        padding: theme.spacing(2),
        display:'flex'
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      messageBox: {
        border: 'none',
        width: '100%',
        outline: 'none',
        marginTop: '15px'
      }
}));