import * as React from 'react';
import SelectSmall from "./selectSmall";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export function Converter() {

    let [number, setNumber] = React.useState(0)
    let [output, setOutput] = React.useState({n: 0, in: 'km', out: 'miles'})
    let [unit, setUnit] = React.useState('1')
    let [save, setSave] = React.useState({list:[]})

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
                setOutput({n: Number((number * 1.609).toFixed(2)), in: 'km', out: 'miles'})
                break;
            case '2':
                setOutput({n: Number((number * 0.621).toFixed(2)), in: 'milles', out: 'km'})
                break;
            case '3':
                setOutput({n: Number((number * 0.304).toFixed(2)), in: 'pies', out: 'metres'})
                break;
            case '4':
                setOutput({n: Number((number * 3.28).toFixed(2)), in: 'metres', out: 'pies'})
                break;
            case '5':
                setOutput({n: Number((number * 0.393).toFixed(2)), in: 'cm', out: 'pulgada'})
                break;
            case '6':
                setOutput({n: Number((number * 2.54).toFixed(2)), in: 'pulgada', out: 'cm'})
                break;
            default:
                setOutput(0)
        }
    }

    let handleClick = () => {
        console.log('saved')
    }

    return (

        <div style={{
            margin: '20px ',
            backgroundColor: '#2E0039',
            display: 'inline-block',
            borderRadius: '10px',
            padding: '20px 30px',
            color: 'white',
            
        }}>
            <p>Converter</p>
            <div>
                <SelectSmall calculator={calculator} units={units} />
                <input type=""  onChange={handleChange} 
                style={{
                    backgroundColor:'#2E0039',
                    border: 'none',
                    color: 'white',
                    borderBottom: '1px solid white',
                    textAlign: 'right',
                    width: '150px',
                    marginRight: '1px',
                }} /> 
                {output.in}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}} >
            <FavoriteBorderIcon style={{position: 'relative', top: '18px', fontSize: '20px'}} onClick={handleClick} />
            <p>{output.n} {output.out}</p>
            </div>
        </div>

    )
}