import React from 'react';
const Home=React.lazy(()=>import("./Home"));
const Author=React.lazy(()=>import("./Author"));


export const routes=[
    {path:"/",component:Home},
    {path:"/:nameAuthor" , component:Author}
]