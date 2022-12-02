import React from 'react'; 
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export default function Header(props: {
    headerHeight: number
}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar style={{minHeight:props.headerHeight}}>
                    <CatchingPokemonIcon />
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        ポケクイズ
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}