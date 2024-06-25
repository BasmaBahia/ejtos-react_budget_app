import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const currencies = ["$ Dollar", "£ Pound", "€ Euro", "₹ Ruppee"];
    
    const { dispatch } = useContext(AppContext);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [dropdown, setDropdown] = useState(false);

    const toggleOpen = () => setDropdown(!dropdown);

    const submitCurrency = () => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: currencies[selectedIndex][0]
        });
    };

    return (
        <div className="dropdown">
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" onClick={toggleOpen}>
                Currency ({currencies[selectedIndex]})
            </button>
            <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>
                {currencies.map((currency, index) => (
                    <li 
                        className="dropdown-item" 
                        key={currency}
                        onClick={() => {
                            setSelectedIndex(index)
                            toggleOpen();
                            submitCurrency();
                        }}
                    >
                        {currency}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Currency;