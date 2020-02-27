import React from 'react'
import {Card,Typography as Font, Grid} from '@material-ui/core'
export default function Character({char}) {
    return (
        <Grid item>
            <Card>
                <Font variant='h3'>
                    {char.name}
                </Font>
                <img src={char.image} alt={`${char.name}'s photo`}/>
                <Font>
                    Gender: {char.gender}
                </Font>
                <Font>
                    Species: {char.species}
                </Font>
                <Font>
                    Status: {char.status}
                </Font>
                <Font>
                    Origin: {char.origin.name}
                </Font>
                <Font>
                    Last Seem: {char.location.name}
                </Font>
            </Card>
        </Grid>
    )
}
