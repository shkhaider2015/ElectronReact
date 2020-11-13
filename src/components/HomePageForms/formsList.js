import React from 'react'
import CardForm from "../card/cardForm";
import FORMICON from "../../RawData/forms.png";
import { Grid, makeStyles } from '@material-ui/core';

    const cardData = [
    {
        title: 'APPLICATION',
        backgroundColor: 'rgb(232, 197, 58)',
        image: FORMICON
    },
    {
        title: 'NOMINATION',
        backgroundColor: 'rgb(157, 223, 211)',
        image: FORMICON
    },
    {
        title: 'CONFIRMATION',
        backgroundColor: 'rgb(255, 243, 226)',
        image: FORMICON
    },
    {
        title: 'SITE PLAN',
        backgroundColor: 'rgb(255, 163, 108)',
        image: FORMICON
    },
    {
        title: 'TERMS & CONDITIONS',
        backgroundColor: 'rgb(243, 186, 214)',
        image: FORMICON
    },
    {
        title: 'Posession Certificate',
        backgroundColor: 'rgb(184, 222, 111)',
        image: FORMICON
    },
    {
        title: 'Allotment Order',
        backgroundColor: 'rgb(246, 244, 230)',
        image: FORMICON
    },
    {
        title: 'Transfer Form',
        backgroundColor: 'rgb(232, 197, 58)',
        image: FORMICON
    },
    {
        title: 'Informations',
        backgroundColor: 'rgb(232, 197, 58)',
        image: FORMICON
    }
      ]

    const useStyle = makeStyles(
        (theme) => (
            {
                container : {
                    paddingLeft : '8%',
                    paddingTop : '5%'
                },
                item : {

                }
            }
        )
    )

function FormList()
{
    const classes = useStyle();

    return(
        <Grid container spacing={5} className={classes.container} >

            {
                cardData.map(
                    (object, index) =>
                    {
                        return(
                            <Grid item key={index} lg={4} md={4} >
                                <CardForm obj={object} />
                            </Grid>
                        )
                    }
                )
            }

        </Grid>
    )
}


export default FormList;