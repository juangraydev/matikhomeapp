import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function DeviceChannel() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    minWidth: 200,
                    width: "calc(20vw - 40px)",
                    height: 128,
                },
            }}
        >
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
            <Paper elevation={2} />
        </Box>
    );
};