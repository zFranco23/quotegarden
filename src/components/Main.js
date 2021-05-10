import { makeStyles } from '@material-ui/core';
import React from 'react';

import Loader from 'react-loader-spinner';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Zoom from 'react-reveal';

import Quote from './Quote';

import {Link} from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    root:{
        marginTop:"1rem",
        [theme.breakpoints.down("xs")]:{
            width:"70%",
        }
    },
    containerQuote:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    details:{
        textDecoration:"none",
        flexWrap:"wrap",
        display:"flex",
        justifyContent:"space-between",
        cursor:"pointer",
        marginTop:"4rem",
        paddingLeft:"calc(4rem + 8px)",
        paddingTop:"1.2rem",
        paddingBottom:"1.2rem",
        paddingRight:"1rem",
        alignItems:"center",
        transition:"0.5s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            paddingLeft:"calc(1rem + 8px)",
        },
        "&:hover":{
            backgroundColor:"#333333",
            "& p:first-child":{
                color:"#F2F2F2",
                transition:"0.6s ease-in-out",
            },
            "& span":{
                opacity:1,
                color:"#F2F2F2",
                transition:"0.6s ease-in-out",
            },

        }
    },
    textAuthor:{
        margin:0,
        marginBottom:"10px",
        color:"#4F4F4F",
        fontWeight:"700",
        fontSize:"20px",
    },
    textGenre:{
        margin:0,
        color:"#828282",
        fontSize:"12px",
    },
    arrow:{
        opacity:0,
    },
    arrowIcon:{
        fontSize:"2rem",
    }
}))
function Main({quote}) {

    const classes=useStyles();
    return (
        <>
        {quote ? 
        <Zoom left cascade>
            <div className={classes.root}>
                <div className={classes.containerQuote}>
                    <Quote text={quote.quoteText} />
                    <Link to={`/${quote.quoteAuthor}`} className={classes.details}> 
                        <div>
                            <p className={classes.textAuthor}>{quote.quoteAuthor}</p>
                            <p className={classes.textGenre}>{quote.quoteGenre}</p>
                        </div>
                        <span className={classes.arrow}>
                            <ArrowRightAltIcon className={classes.arrowIcon} />
                        </span>
                        
                    </Link>
                </div>
            </div>
        </Zoom>  :
        <Loader type="ThreeDots" color="#333333" height={80} width={80} />
        }
        </>
    )
}

export default Main
