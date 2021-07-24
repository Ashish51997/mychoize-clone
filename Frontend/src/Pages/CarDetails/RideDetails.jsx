import React from 'react'
import OrderForm from './OrderForm'

const RideDetails = ({item}) => {
    return (
        <div>
            <OrderForm item={item} />
        </div>
    )
}

export default RideDetails
