import React from 'react'
import CardForm from "../card/cardForm";
import FORMICON from "../../RawData/forms.png";
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

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
                    paddingRight : '8%',
                    paddingTop : '2%',
                },
                item : {
                    transition: 'transform .3s',
                    '&:hover' : {
                        transform : 'scale(1.2)',

                    }
                },
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
                            <Grid item key={index} className={classes.item} xl={4} lg={4} md={2} >
                                <Link to="/login" >
                                <CardForm
                                obj={object}
                                />
                                </Link>                   
                            </Grid>
                        )
                    }
                )
            }

        </Grid>
    )
}


export default FormList;