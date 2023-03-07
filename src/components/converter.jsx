import * as React from 'react';
import SelectSmall from "./selectSmall";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addSave } from '../features/save/saveSlice';
import { useDispatch } from 'react-redux';

export function Converter() {

    let [number, setNumber] = React.useState(0)
    let [output, setOutput] = React.useState({ n: 0, in: 'km', out: 'miles' })
    let [unit, setUnit] = React.useState('1')
    let [style, setStyle] = React.useState({display: 'none'})
    let dispatch = useDispatch()

    let handleChange = (e) => {
        setNumber(e.target.value)
    }

    let units = (unit) => {
        setUnit(unit)
    }

    React.useEffect(() => {
        calculator(unit)
    }, [number, unit])

    let calculator = (unit) => {
        switch (unit) {
            case '1':
                setOutput({ n: Number((number * 1.609).toFixed(2)), in: 'km', out: 'miles' })
                break;
            case '2':
                setOutput({ n: Number((number * 0.621).toFixed(2)), in: 'milles', out: 'km' })
                break;
            case '3':
                setOutput({ n: Number((number * 0.304).toFixed(2)), in: 'pies', out: 'metres' })
                break;
            case '4':
                setOutput({ n: Number((number * 3.28).toFixed(2)), in: 'metres', out: 'pies' })
                break;
            case '5':
                setOutput({ n: Number((number * 0.393).toFixed(2)), in: 'cm', out: 'pulgada' })
                break;
            case '6':
                setOutput({ n: Number((number * 2.54).toFixed(2)), in: 'pulgada', out: 'cm' })
                break;
            default:
                setOutput(0)
        }
    }

    let handleClick = () => {
        if (output.n >= 0 || output.n < 0) {
            dispatch(addSave({ id: Math.random(), inN: number, in: output.in, outN: output.n, out: output.out }))
            setStyle(
                { color: 'green', fontSize: '14px', fontWeight: '700', position: 'absolute', bottom: '0px' },
                setTimeout(() => setStyle({display:'none'}), 1000)
            )
        }


    }

    return (

        <div style={{
            margin: '20px ',
            backgroundColor: '#2E0039',
            display: 'inline-block',
            borderRadius: '10px',
            padding: '20px 30px',
            color: 'white',
            position: 'relative',

        }}>
            <p>Converter</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <SelectSmall calculator={calculator} units={units} style={{ marginRight: '10px' }} />
                <div style={{ position: 'relative', top: '4px', marginLeft: '10px' }} >
                    <input type="" onChange={handleChange}
                        style={{
                            backgroundColor: '#2E0039',
                            border: 'none',
                            color: 'white',
                            borderBottom: '1px solid white',
                            textAlign: 'right',
                            width: '150px',
                            marginRight: '1px',
                        }} />
                    {output.in}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <FavoriteBorderIcon style={{ position: 'relative', top: '18px', fontSize: '20px',  }} onClick={handleClick} />
                <p>{output.n} {output.out}</p>
            </div>
            <p style={{ color: 'red', fontSize: '10px', position: 'absolute', bottom: '0px' }} >
                {output.n >= 0 || output.n < 0 ? '' : 'Please, write only number'}</p>
            <p style={style} >
                It was saved</p>
        </div>

    )
}