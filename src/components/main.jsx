import React from "react";
import { Converter } from "./converter";
import { Storage } from "./storage";

export function Main (){
    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} >
        <Converter/>
        <Storage/>
        </div>
        </>
    )
}