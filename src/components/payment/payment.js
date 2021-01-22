import { Avatar, Grid, IconButton, makeStyles, TextField, InputAdornment, Paper } from "@material-ui/core"
import { KeyboardBackspace, Search } from "@material-ui/icons"
import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { ClientsListContext } from "../../context/dataContext";
import SystemLogo from "../../RawData/mainassociates_icon.png";
import SearchComponent from "./searchComponent";


const useStyle = makeStyles({
    root: {

    },
    container: {
        border: '1px solid black'
    },
    backButton: {
        marginLeft: '2%',
        marginTop: '2%'
    },
    myLink: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none'
        }
    }
})

const Payment = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const clients = React.useContext(ClientsListContext)

    const [searchText, setSearchText] = React.useState("");
    const searchResult = React.useState([])

    console.log("Clients : ", clients[0])
    const getSearchresult = (e) => {
        setSearchText(e)
        let lowercaseResult = e.toLowerCase();
        let data = []

        clients[0].filter(item => {
            if (item['personal']['name'].toLowerCase().includes(lowercaseResult)) {

                data.push(item)
            }

        })
        if (e === "") {
            data = []
        }
        searchResult[1](data)
        return
    }

    return (
        <div>

            <IconButton
                aria-haspopup="true"
                color="inherit"
                onClick={() => navigate(-1)}
                className={classes.backButton}
            >
                <KeyboardBackspace fontSize="large" color="primary" />

            </IconButton>

            <Grid container spacing={0} direction="row" align="center" >

                <Grid item xs={2} sm={2} md={2} >
                    {/* <IconButton
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => navigate(-1)}
                        className={classes.backButton}
                    >
                        <KeyboardBackspace fontSize="large" color="primary" />

                    </IconButton> */}
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}  >

                    <Avatar alt="logo" src={SystemLogo} variant="rounded" style={{ width: '30%', height: '100%' }} />

                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <TextField
                        label="Search"
                        variant="outlined"
                        type="text"
                        value={searchText}
                        onChange={e => {
                            // setSearchText(e.target.value)
                            getSearchresult(e.target.value)
                        }}
                        style={{ width: '50%', boxShadow: '0 0 10px 2px rgba(20, 27, 202, .17)' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search color="primary" />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Paper style={{ width: '50%', marginTop: '2%' }} >
                        {
                            searchResult[0].length !== 0
                                ? searchResult[0].map(
                                    (object, index) =>
                                        object['personal']['transfor']
                                            ? null
                                            : (
                                                <Link to={"/cpp/" + object['personal']['cnic']} key={index} style={{ textDecoration: 'none', color: 'black' }} >
                                                    <SearchComponent data={object} />
                                                </Link>
                                            )
                                )
                                : null
                        }
                    </Paper>
                </Grid>

            </Grid>


        </div>
    )

}

export default Payment;