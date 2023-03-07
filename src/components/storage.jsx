import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../store/store";
import { removedSave } from "../features/save/saveSlice";
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function Storage() {

    let list = useSelector(store => store.save.list)
    let dispatch = useDispatch()

    let handleClick = (item) =>{
        dispatch(removedSave(item))
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                maxWidth: '700px',
                minWidth: '320px'
            }} >
                {list.map((item) => {
                    return (
                        <div id={item.id} style={{
                            backgroundColor: '#E3E3E3',
                            width: '300px',
                            fontSize: '13px',
                            margin: '10px ',
                            padding: '10px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '10px'
                        }} >
                            <div>
                            {item.inN} {item.in} <ArrowRightAltIcon style={{fontSize: '13px', margin: '0 5px'}}/> {item.outN} {item.out}
                            </div>
                            <div onClick={() => handleClick(item)} >
                            <CloseIcon style={{fontSize: '13px'}}  />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}