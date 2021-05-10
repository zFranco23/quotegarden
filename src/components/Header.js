import React from 'react';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles= makeStyles((theme)=>({
    root:{
        marginRight:"5rem",
        width:"100%",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        "& p":{
            fontSize:"18px",
            padding:0,
            margin:0,
        },
        [theme.breakpoints.down("xs")]:{
            justifyContent:"center",
            margin:0,
        }
    }
}))
function Header({newQuote}) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
                <p>random</p>
                <IconButton onClick={newQuote}>
                    <AutorenewIcon />
                </IconButton>         
        </div>
    )
}

export default Header
