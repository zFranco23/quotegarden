import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles=makeStyles((theme)=>({
    text:{
        marginTop:"1rem",
        borderLeft:"8px solid #F7DF94",
        paddingLeft:"4rem",
        width:"500px",
        height:"100%",
        fontSize:"28px",
        fontWeight:"500",
        lineHeight:"120%",
        "& p":{
            margin:0
        },
        [theme.breakpoints.down("xs")]:{ 
            fontSize:"25px",
            paddingLeft:"1rem",
            maxWidth:"90%",
        }
    },
}))
function Quote({text}) {

    const classes=useStyles();
    return (
        <div className={classes.text}>
            <p>“{text}”</p>
        </div>
    )
}

export default Quote
