import React from 'react'

export default function Description({ isEditing, value, onValueChange }) {

    return isEditing ? (
        <td>
            <input
                type="text"
                value={value}
                onChange={(event) => onValueChange(event.target.value)}
            />
        </td>
    ) : (
        <td> {value} </td>
    )
}
