import React from 'react'

export default function ModeButtons({ isEditing }) {

    return isEditing ? (
        <td>
            <button>Save</button>
        </td>
    ) : (
        <td>
            <button>Delete</button>
            <button>Edit</button>
        </td>
    )
}
