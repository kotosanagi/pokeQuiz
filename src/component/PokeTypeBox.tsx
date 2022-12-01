import Box from "@mui/material/Box";
import { pokeTypeInterface } from "../logic/pokeType";
import React from 'react';

export default function PokeTypeBox(props: {
    pokeType: pokeTypeInterface;
}) {
    return (
        <Box sx={{ width:88, fontSize:16, backgroundColor:props.pokeType.color, borderRadius:1 }}>
            {props.pokeType.name}
        </Box>
    )
}