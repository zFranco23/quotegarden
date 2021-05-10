import { makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import Footer from './components/Footer';

import Header from './components/Header';
import Main from './components/Main';


const useStyles = makeStyles((theme)=>({
    root:{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        overflowY:"hidden",
    }
}))
function Home() {

    const classes=useStyles();

    const [quote,setQuote]=useState("");


    const getRandomQuote = async () =>{
        setQuote(null);
        const response= await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
        const {data}= await response.json();

        setQuote(data[0]);
    }

    useEffect(()=>{
        getRandomQuote();
    },[])

    return (
        <div className={classes.root}>
            <Header newQuote={getRandomQuote}/>
            <Main quote={quote} />
            <Footer />
        </div>
    )
}

export default Home
