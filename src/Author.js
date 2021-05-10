import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Quote from './components/Quote';

import Loader from 'react-loader-spinner';
import Zoom from 'react-reveal';
import { IconButton, makeStyles } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';


const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        overflow:"hidden",
    },
    header:{
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
    },
    containerQuotes:{
        display:"flex",
        flexDirection:"column",  
    },
    contentCenter:{
        margin:"auto",
        maxWidth:"90%",
    },
    containerName:{
        width:"500px",
        paddingLeft:"calc(4rem + 8px)",
        [theme.breakpoints.down("xs")]:{
            paddingLeft:"calc(1rem + 8px)",
        }
    },
    nameAuthor:{
        margin:0,
        padding:0,
        fontWeight:"700",
        fontSize:"25px"
    },
    singleQuote:{
        marginTop:"2rem",
        marginBottom:"2rem",
    }
}))

function Author() {

    const classes=useStyles();
    const {nameAuthor} =useParams();
    
    const [quotes,setQuotes]=useState([]);

    const getQuoteAuthor = async() =>{
        const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${nameAuthor}`);
        const {data}= await response.json();

        setQuotes(data);
    }

    useEffect(()=>{
        getQuoteAuthor();
    },[])
    return (
        <>
            <div className={classes.root}>
                <div className={classes.header}>
                    <p>random</p>
                    <Link to="/" className={classes.containerBtn}>
                        <IconButton>
                            <AutorenewIcon />
                        </IconButton>         
                    </Link>
                </div>
                <div className={classes.contentCenter}>

                    {quotes.length>0 
                    ?
                    <>
                        <div className={classes.containerName}>
                            <p className={classes.nameAuthor}>
                                {nameAuthor}
                            </p>
                        </div>
                        <div className={classes.containerQuotes}>
                            {quotes.map((quote,index)=>(
                                <Zoom key={index} left={index % 2 ===0 && true} right={index %2 !==0 && true}>
                                    <div className={classes.singleQuote}>
                                        <Quote text={quote.quoteText}/>
                                    </div>
                                    
                                </Zoom> 
                            ))}
                        </div>
                    </>
                    :
                    <Loader type="ThreeDots" width={80} height={80} color="#333333" />
                    }
                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Author
