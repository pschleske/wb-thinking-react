import ModeButtons from './ModeButtons';
import Description from './Description';
import Hours from './Hours';
import Rate from './Rate';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';
import axios from 'axios';


export default function TableRow({ initialInvoiceData, initialIsEditing, deleteFunc, id }) {
    // const { description, rate, hours } = initialInvoiceData

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [description, setDescription] = useState(initialInvoiceData.description)
    const [rate, setRate] = useState(initialInvoiceData.rate)
    const [hours, setHours] = useState(initialInvoiceData.hours)

    const changeEditMode = () => setEditMode(true)

    // const changeNormalMode = () => setEditMode(false)
    const changeNormalMode = async () => {

        let bodyObj = {
            description,
            rate,
            hours
        }
        const { data } = await axios.put(`/editInvoice/${id}`, bodyObj)

        if (!data.error) {
            // setDescription(data.description)
            // setRate(data.rate)
            // setHours(data.hours)
            setEditMode(false)
        } else {
            alert('Something went wrong, try again!')
        }
        // setEditMode(false)
    }

    return (
        <tr>
            <ModeButtons
                isEditing={editMode}
                editClick={changeEditMode}
                saveClick={changeNormalMode}
                deleteClick={deleteFunc}
            />
            <Description
                isEditing={editMode}
                value={description}
                onValueChange={setDescription}
            />
            <Rate
                isEditing={editMode}
                value={rate}
                onValueChange={setRate}
            />
            <Hours
                isEditing={editMode}
                value={hours}
                onValueChange={setHours}
            />
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}
