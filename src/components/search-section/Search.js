import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, TextField, Typography } from '@mui/material';


const Search = () => {

    const [search , setSearch] = useState("")
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault()
        navigate('/searched/' + search)
    };

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <form onSubmit={submitHandler}>
                <TextField 
                label={
                    <Typography color="secondary">
                            Search For Food...
                    </Typography>
                }
                color='secondary'
                variant='filled'
                type="text"
                value={search}
                sx={{display:'flex',justifyContent:"center", fontSize: 17, marginBottom: '30px'}}
                onChange={event => setSearch(event.target.value)}
                />
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};




export default Search;