import React, { useRef } from 'react';
import MainCard from 'componets/MainCard';
import { Button, Grid } from '@mui/material';

const PrintReceipt = ({ itemTable, onCancel, total }) => {
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
                                size: 80mm; /* Adjust page size as needed */
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
                                margin-top: 5mm; /* Adjust top margin as needed */
                            }
                            th, td {
                                border: 1px solid white;
                                padding: 0px;
                                text-align: center;
                                font-size: 11px;
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
                <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}>CASH MEMO</div>
                {/* <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}>FAUJI RATION STORE</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px' }}>P.NO : 7018423400, 6230073716</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Pal building, Mandi Road, Hiranagar</div> */}
                <table>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>I.NAME</th>
                            <th>QTY</th>
                            <th>RATE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemTable.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.itemName}</td>
                                <td>{item.quantity}</td>
                                <td>{item.rate}</td>
                                <td>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}>Total : {total}</div>
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
