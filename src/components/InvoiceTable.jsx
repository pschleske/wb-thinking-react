import './InvoiceTable.css';
// import ModeButtons from './ModeButtons';
// import Description from './Description';
// import Hours from './Hours';
// import Rate from './Rate';
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import TableRow from './TableRow';
import { useState } from 'react';

let globalId = 5;

export default function InvoiceTable({ initialInvoiceList }) {

    const [currentList, setCurrentList] = useState(initialInvoiceList)

    const addRow = () => {
        // get a copy of the current list 
        // create new "blank" object for new row
        // push new object into my copied list 
        // update list state with the new version of the list
        const newInvoiceList = [...currentList]
        const newRow = {
            id: globalId,
            description: "Description",
            rate: "",
            hours: "",
        }
        newInvoiceList.push(newRow)
        setCurrentList(newInvoiceList)
        globalId++
    }

    const deleteRow = (id) => {

        const filteredList = currentList.filter(element => element.id !== id)

        setCurrentList(filteredList)
    }
    // console.log(initialInvoiceList)
    // const rows = initialInvoiceList.map((invoiceItem) => {
    const rows = currentList.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem

        return (
            <TableRow
                key={id}
                initialInvoiceData={{ description: description, rate: rate, hours: hours }}
                initialIsEditing={false}
                deleteFunc={() => deleteRow(id)}
            />
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>

                    {rows}
                    {/* <TableRow initialInvoiceData={{ description: 'Janitor', rate: 50, hours: 40 }}
                        initialIsEditing={false}
                    />
                    <TableRow initialInvoiceData={{ description: 'Web Designer', rate: 60, hours: 40 }}
                        initialIsEditing={false}
                    /> */}

                    {/* <tr>
                        <ModeButtons isEditing={false} />
                        <Description isEditing={false} value="Web Developer" />
                        <Rate isEditing={false} value={50} />
                        <Hours isEditing={false} value={40} />
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <ModeButtons isEditing={true} />
                        <Description isEditing={true} value="Web Developer" />
                        <Rate isEditing={true} value={50} />
                        <Hours isEditing={true} value={40} />
                    </tr> */}
                </tbody>
                <tfoot>
                    <AddButton addClick={addRow} />
                </tfoot>
            </table>
        </div>
    )
}
