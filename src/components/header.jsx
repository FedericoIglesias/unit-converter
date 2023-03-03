import React from "react";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';


export function Header (){

    return(
        <>
        <div style={{display: 'flex', justifyContent: 'center', color: '#2E0039', boxShadow: '1px 0 10px black', alignItems: 'center'}}>
        <SwapHorizIcon style={{margin: '0 10px'}}/>
        <h1 style={{fontSize: '16px'}}>unit converter</h1>
        </div>
        </>
    )
}

