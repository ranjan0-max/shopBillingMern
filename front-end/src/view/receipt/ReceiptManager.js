import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import ReceiptForm from './ReceiptForm';
import MainCard from 'componets/MainCard';
import { KeyboardBackspace } from '@mui/icons-material';

const ReceiptManager = ({ oncancel }) => {
    const [receipts, setReceipts] = useState([]);

    const handleCancel = (index) => {
        setReceipts((prev) => prev.filter((_, i) => i !== index));
    };

    const handleAddReceipt = () => {
        setReceipts((prev) => [...prev, <ReceiptForm key={prev.length} onClose={() => handleCancel(prev.length)} />]);
    };

    const handleBackClick = () => {
        oncancel();
    };

    return (
        <div>
            <MainCard
                title="Receipt"
                content={false}
                secondary={
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button color="secondary" variant="contained" onClick={handleBackClick}>
                            <KeyboardBackspace fontSize="small" /> Back
                        </Button>
                    </Stack>
                }
            >
                <Button variant="contained" color="primary" onClick={handleAddReceipt}>
                    Add Receipt
                </Button>
                <Stack spacing={2}>
                    {receipts.map((receipt, index) => (
                        <div key={index}>{receipt}</div>
                    ))}
                </Stack>
            </MainCard>
        </div>
    );
};

export default ReceiptManager;
