import { Avatar, Grid, IconButton, makeStyles, TextField, InputAdornment, Paper } from "@material-ui/core"
import { KeyboardBackspace, Search } from "@material-ui/icons"
import React from "react"
import { useNavigate } from "react-router"
import { ClientsListContext, UserListContext } from "../../context/dataContext";
import SystemLogo from "../../RawData/mainassociates_icon.png";
import SearchComponent from "./searchComponent";


const useStyle = makeStyles({
    root : {

    },
    container : {
        border : '1px solid black'
    },
    backButton : {
        marginLeft : '2%',
        marginTop : '2%'
    }
})

const Payment = () =>
{
    const navigate = useNavigate();
    const classes = useStyle();
    const clients = React.useContext(ClientsListContext)

    const [searchText, setSearchText] = React.useState("");
    const searchResult = React.useState([])

    console.log("Clients : ", clients[0])
    const getSearchresult = (e) =>
    {
        // let result = e.target.value;
        setSearchText(e)
        let lowercaseResult = e.toLowerCase();
        let data = []

        console.log("Given key", lowercaseResult)

        // const filterData = clients[0].filter(item => {
        //     console.log("Items : ", item)
        //     return Object.keys(item).some(key => item[key].toLowerCase().includes(lowercaseResult))
        // })

        clients[0].filter(item => {
            if(item[0]['name'].toLowerCase().includes(lowercaseResult))
            {

                data.push(item[0])
            }
            
        })
        if(e === "")
        {
            data = []
        }
        searchResult[1](data)
    }

    return(
    <div>
        {searchResult ? console.log("Search result :::: ", searchResult[0]) : null}
        <Grid container spacing={4} direction="row" align="center" >

            <Grid item xs={2} sm={2} md={2} >
                <IconButton
                aria-haspopup="true"
                color="inherit"
                onClick={() => navigate(-1)}
                className={classes.backButton}
                >
                    <KeyboardBackspace fontSize="large" color="primary" />

                </IconButton>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}  >

                <Avatar alt="logo" src={SystemLogo} variant="rounded" style={{ width : '30%', height : '100%' }} />

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
                    style={{ width : '50%', boxShadow : '0 0 10px 2px rgba(20, 27, 202, .17)'  }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                              <Search color="primary" />
                            </InputAdornment>
                          )
                    }}
                    />
                    <Paper style={{ width : '50%', marginTop : '2%' }} >
                        {
                            searchResult[0].length !== 0
                            ? searchResult[0].map(
                                (object, index) => (
                                    <SearchComponent data={object} key={index}  />
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