import * as React from 'react';


export default function SelectSmall({ calculator, units }) {

    const [unit, setUnit] = React.useState('1');

    const handleChange = (event) => {
        setUnit(event.target.value);
    };
    
    React.useEffect(() => {
        calculator(unit)
        units(unit)
    }, [unit])

    return (
        <select 
                onChange={handleChange}
                style={{ border: 'none', borderBottom: '1px solid white', margin: '10px 0', backgroundColor: '#2E0039', color: 'white', width: '154px'}}>
            <option value='1'>kilometre - milla</option>
            <option value='2'>milla - km</option>
            <option value='3'>metre -pies</option>
            <option value='4'>pies - metre</option>
            <option value='5'>centimetre -pulgada</option>
            <option value='6'>pulgada - centimetre</option>
        </select>
    );
}