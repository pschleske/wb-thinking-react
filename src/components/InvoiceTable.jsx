import './InvoiceTable.css';
// import ModeButtons from './ModeButtons';
// import Description from './Description';
// import Hours from './Hours';
// import Rate from './Rate';
import TableHeader from './TableHeader';
import AddButton from './AddButton';
import TableRow from './TableRow';

export default function InvoiceTable({ initialInvoiceList }) {

    const rows = initialInvoiceList.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem

        return (
            <TableRow
                key={id}
                initialInvoiceData={{ description: description, rate: rate, hours: hours }}
                initialIsEditing={false} />
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
                    <AddButton />
                </tfoot>
            </table>
        </div>
    )
}
