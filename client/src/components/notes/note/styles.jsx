import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    noteClip: {
        transform: 'rotate(-45deg)',
        marginLeft: '-36px',
        marginTop: '-30px'
    },

    actionButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 50px',
    },

    mainPaper: {
        borderRadius: '10px',
        backgroundColor:'#d9dede'
    }

}));