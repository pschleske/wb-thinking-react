import React from 'react'

export default function ModeButtons({ isEditing, editClick, saveClick, deleteClick }) {

    return isEditing ? (
        <td>
            <button onClick={saveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button onClick={deleteClick}>Delete</button>
            <button onClick={editClick}>Edit</button>
        </td>
    )
}
