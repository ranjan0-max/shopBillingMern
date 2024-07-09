import React, { useRef } from 'react';
import MainCard from 'componets/MainCard';
import { Button, Grid } from '@mui/material';

const PrintReceipt = ({ itemTable, onCancel }) => {
    const printableRef = useRef(null);

    const handlePrint = () => {
        const printableContent = printableRef.current;
        if (printableContent) {
            const printWindow = window.open('', '_blank');
            printWindow?.document.open();
            printWindow?.document.write(`
                <html>
                <head>
                    <title>Print Receipt</title>
                    <style>
                        @media print {
                            @page {
                                size: 58mm; /* Adjust page size as needed */
                                margin: 0; /* Adjust margin as needed */
                            }
                            body {
                                font-family: Arial, sans-serif;
                                width: 100%;
                                display: flex;
                                // align-items: center;
                                // justify-content: center;
                                flex-direction: column;
                            }
                            table {
                                width: 100%;
                                border-collapse: collapse;
                                margin-top: 10mm; /* Adjust top margin as needed */
                            }
                            th, td {
                                border: 1px solid white;
                                padding: 0px;
                                text-align: center;
                                font-size: 12px;
                                white-space: nowrap;
                            }
                        }
                    </style>
                </head>
                <body>
                    ${printableContent.innerHTML}
                </body>
                </html>
            `);
            printWindow?.document.close();
            printWindow?.print();
            printWindow?.close();
            onCancel();
        }
    };

    React.useEffect(() => {
        handlePrint();
    }, []);

    return (
        <MainCard>
            <div ref={printableRef}>
                <table>
                    <thead>
                        <tr>
                            <th>I.NAME</th>
                            <th>QTY</th>
                            <th>RATE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemTable.map((item, index) => (
                            <tr key={index}>
                                <td>{item.itemName}</td>
                                <td>{item.quantity}</td>
                                <td>{item.rate}</td>
                                <td>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={handlePrint}>
                        Print
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="error" onClick={onCancel}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default PrintReceipt;
