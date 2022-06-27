import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.productName}</td>
                    <td>{props.brand}</td>
                    <td>{props.price}</td>
                    <td>{props.category}</td>
                </tr>
            )
    }
    
        

export default ChartRow;