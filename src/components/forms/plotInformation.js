import { Grid, makeStyles, Paper, TextField, 
    InputAdornment, InputLabel, FormControl, Select, FormHelperText } from '@material-ui/core'
import {
    LinearScale, SquareFoot, DashboardOutlined, CategoryOutlined, NaturePeopleOutlined, 
    MergeType, FiberSmartRecordOutlined, StoreOutlined,
    
} from "@material-ui/icons";
import React from 'react'


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                marginTop : '6.55%',
                height : '80%',
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingBottom : '3%',
                width: '60%',
                background: 'rgba(255, 255, 255, 0.98)',
                [theme.breakpoints.down('md')]: {
                    width: '70%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('xs')]: {
                    width: '90%',
                    marginTop: '10%',
                    textAlign: 'center'

                },
                margin: '0 auto',
            },
            myText: {
                marginTop: '2%'
            },
            myButton: {
                marginTop: '10%',
                textAlign: 'center'
            },
            myElements: {
                width: '100%',
            },
            phoneCnicDiv: {
                display: 'flex',
                width: '100%',
                marginTop: '2%',
            },
            cnicDiv: {
                width: '45%',
                marginLeft : '0',
                display : 'flex'
            },
            phoneDiv: {
                width: '45%',
                marginLeft: 'auto',
                marginRight: "0",
                display : 'flex'
            },
            pairElement : {
                width : '100%'
            },
            loginLink: {
                textDecoration: 'none',
                fontWeight: 'bold',
                color: theme.palette.primary.main
            },
            imageDiv: {
                width: '100%',
                textAlign: 'center'
            },
            iconColor: {
                color: theme.palette.secondary.main
            },
            input: {
                display: 'none',

            },
            block : {
                width : '46%',
                marginRight : 0,
                marginLeft : 'auto'
            },
            square : {
                width : '46%',
                marginLeft : 0,
            }
        }
    )
)


const PersonalInformation = ({ model }) => {

    const classes = useStyle();

    return (
        <div className={classes.root}> 
         <Grid container>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                
                <Paper elevation={0} className={classes.myPaper}>

                    
                        <div className={classes.phoneCnicDiv} >
                            
                            <div className={classes.cnicDiv} >
                            <FormControl variant="outlined" className={classes.pairElement}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Asset</InputLabel>
                                    <Select
                                        native
                                        value={model.area}
                                        onChange={(e) => model.setArea(e.target.value)}
                                        label="Asset"
                                        inputProps={{
                                            name: 'asset',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Plot">Plot</option>
                                        <option value="Home">Home</option>
                                        <option value="Flat">Flat</option>
                                    </Select>
                                    <FormHelperText> { model.area === "" || !model.area ? <span>Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> } </FormHelperText>
                                </FormControl>
                            </div>
                            <div className={classes.phoneDiv} >
                            <TextField
                            className={classes.square}
                                id="plotNo"
                                label="Asset No."
                                variant="outlined"
                                type="number"
                                color="primary"
                                value={model.plotNumber}
                                onChange={(e) => model.setPlotNumber(e.target.value) }
                                helperText={ Number(model.plotNumber) === 0 || !model.plotNumber? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SquareFoot className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                            className={classes.block}
                                id="measurement"
                                label="Measure"
                                variant="outlined"
                                type="number"
                                color="primary"
                                value={model.measurement}
                                onChange={(e) => model.setMeasurement(e.target.value) }
                                helperText={ Number(model.measurement) === 0 || !model.measurement ? <span>Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LinearScale className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            </div>
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.square}
                                    id="square"
                                    label="Sq. Yds."
                                    variant="outlined"
                                    type="number"
                                    color="primary"
                                    value={model.square}
                                    onChange={(e) => model.setSquare(e.target.value) }
                                    helperText={ Number(model.square) === 0 || !model.square? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SquareFoot className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                                <TextField
                                    className={classes.block}
                                    id="block"
                                    label="Block"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.block}
                                    onChange={(e) => model.setBlock(e.target.value) }
                                    helperText={ model.block === "" || !model.block ? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <DashboardOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <TextField
                            className={classes.pairElement}
                                    id="category"
                                    label="Category"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.category}
                                    onChange={(e) => model.setCategory(e.target.value) }
                                    helperText={ model.category === "" || !model.category ? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CategoryOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                        </div>

                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                            className={classes.pairElement}
                                    id="nature"
                                    label="Nature"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.nature}
                                    onChange={(e) => model.setNature(e.target.value) }
                                    helperText={ model.nature === "" || !model.nature ? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <NaturePeopleOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <TextField
                            className={classes.pairElement}
                                    id="type"
                                    label="Type"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.type}
                                    onChange={(e) => model.setType(e.target.value) }
                                    helperText={ model.type === "" || !model.type ? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MergeType className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                        </div>

                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                            className={classes.pairElement}
                                    id="Site Plan"
                                    label="Site Plan"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.sitePlane}
                                    onChange={(e) => model.setSitePlane(e.target.value) }
                                    helperText={ model.sitePlane === "" || !model.sitePlane ? <span >Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <FiberSmartRecordOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <TextField
                            className={classes.pairElement}
                                    id="purpose"
                                    label="Purpose"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    value={model.purpose}
                                    onChange={(e) => model.setPurpose(e.target.value) }
                                    helperText={ model.purpose === "" || !model.purpose ? <span>Required</span> : <span style={{ color : 'lightgreen' }} >Correct</span> }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <StoreOutlined className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                        </div>

                        

                </Paper>

            </Grid>
        </Grid>
        </div>
    )
}

export default PersonalInformation;