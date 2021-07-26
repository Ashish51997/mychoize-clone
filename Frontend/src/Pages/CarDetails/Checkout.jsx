import React from 'react';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 5000);
    },[]);

    return (
        <div>
            SUCCESSFULLY BOOKED
        </div>
    )
}

export default Checkout
