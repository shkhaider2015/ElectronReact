import React from "react";
import './reportCSS.css'
import SearchBar from '../report/searchBar'
import { Avatar, IconButton, Paper, MenuItem, Popper, Grow, ClickAwayListener, MenuList } from "@material-ui/core";
import { KeyboardBackspace, MoreVert } from '@material-ui/icons';
import zainlogo from '../../RawData/mainassociates_icon.png'
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import { AdminContext } from "../../context/adminContext";
import Sidecomponent from "./sidecomponent";
import { useNavigate } from "react-router-dom";
import DialogueBox from "../printable/DialogueBox";

import { useReactToPrint } from "react-to-print";
import PrintBox from "../printableForm/printBox";
import { ClientsListContext } from "../../context/dataContext";
import { getDateFromMillis } from "../../utility/utils";

const Reports = () => {

    const navigate = useNavigate();
    const currentUser = React.useContext(AuthContext)
    const isAdmin = React.useContext(AdminContext)
    const clients = React.useContext(ClientsListContext)

    const [users, setUsers] = React.useState([])
    const [userKeys, setUserKeys] = React.useState([]);
    const [Dialogue, setDialogue] = React.useState(false);
    const [clicked, setClicked] = React.useState(0);
    const [formNumber, setFormNumber] = React.useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [printNo, setPrintNo] = React.useState(0);
    const [print, setPrint] = React.useState(false);

    const componentRef = React.useRef()
    const anchorRef = React.useRef(null);

    const [open, setOpen] = React.useState(false);

    const handlePrinttt = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => setPrint(false)
    });



    const handleMenu = (e) => {
        setAnchorEl(e.target)
    }
    const handleMenuClosee = () => {
        setAnchorEl(null)
    }


    const handleMenuToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const getCollection = async () => {

        const docRef = db.collection("clients");
        var dataArray = []

        docRef.get().then((querySnapshot) => {

            console.log("GetCollection : ", querySnapshot)
            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    console.log("getCollection : snapshot : doc.data() ", doc.data())
                    for (let x in doc.data()) {
                        dataArray.push(doc.data()[x])
                    }

                    setUsers(dataArray);
                    setUserKeys(Object.keys(doc.data()))
                }
            })
        }).catch((e) => console.error("getCollection", e))

    }

    React.useEffect(
        () => {
            // getCollection()
        },
        []
    )

    const muClick = (e) => {
        setClicked(e)
    }

    const preview = (num) => {
        setFormNumber(num)
        setDialogue(true)
    }

    const handleEdit = (cnic) => {

        clients[0].map(
            (object, index) => object['personal']['cnic'] === cnic
                ? navigate('/edit', { state: { obj: object } })
                : null
        )
        // navigate('/edit', { state: { obj: clients[0], index: clicked, key: userKeys[clicked] } })
    }

    const handleTransfor = (cnic) => {
        clients[0].map(
            (object, index) => object['personal']['cnic'] === cnic
                ? navigate('/transfer', { state: { obj: object } })
                : null
        )
    }

    const handleDelete = (cnic) => {

        setAnchorEl(null)
        console.log()
        if (window.confirm("Are you sure you want to delete this client ?")) {
            cnic = cnic.replace(/-/g, "")
            db.collection('clients').doc(cnic).delete()
                .then(() => console.log("Document Deleted Succesfully"))
                .catch((e) => console.error("Error while deleting doc : ", e))
        }

    }

    const handlePrint = (x) => {
        setPrint(true)
        setPrintNo(x)
    }

    const handleIdCard = (cnic) => {
        clients[0].map(
            (object) => object['personal']['cnic'] === cnic
                ? navigate("/idcard", { state: { obj: object } })
                : null
        )
    }



    return (

        <div>
            <div style={{ display: "none" }} >
                {
                    clients[0].length
                        ? <PrintBox ref={componentRef} print={print} handlePrinttt={handlePrinttt} printNo={printNo} clicked={clicked} users={clients[0]} />
                        : null
                }
            </div>
            {
                Dialogue
                    ? <DialogueBox setDialogue={setDialogue} formNumber={formNumber} clicked={clicked} users={clients[0]} />
                    :
                    <div className="container-fluid">
                        <div className="row ">

                            <div className="col-3 shadow  searchBar  border-right pb-4 ">
                                <div className="col-12" >
                                    <IconButton
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={() => navigate(-1)}
                                    >
                                        <KeyboardBackspace fontSize="large" color="primary" />
                                    </IconButton>
                                </div>
                                <div className="col-12 mt-2 ml-5">
                                    <SearchBar />
                                </div>
                                <div className="mt-2 mb-2 pb-3 col-12 client-list">
                                    {
                                        clients[0].map(
                                            (object, index) => (
                                                object['personal']['transfor']
                                                    ? null
                                                    : <div key={index} onClick={e => muClick(index)} > <Sidecomponent obj={object} checked={[index, clicked]} /> </div>
                                            )
                                        )
                                    }

                                </div>
                            </div>
                            <div className="col-9 shadow-sm h-100 ">
                                <div className="row justify-content-center">
                                    <div className="mt-1 ml-1 shadow-sm card table-responsive offset-1 col-11">
                                        <div className=" mt-2 pt-2 col-12 ">
                                            <div className="row d-flex align-items-baseline mb-3">
                                                <div className="col-3 pb-1 ">

                                                    <div className="row">
                                                        <div className="col-12  ">


                                                            {
                                                                clients[0].map(
                                                                    (object, index) =>
                                                                        clicked === index
                                                                            ? <div key={index} className="row " >
                                                                                <div className=" col-8" >
                                                                                    <Avatar alt={object['personal']['name']} src={object['personal']['imageURI']} style={{ height: '60px', width: '60px', marginLeft: '15%', marginRight: 'auto' }} />

                                                                                    <span style={{ marginLeft: '3%', fontSize: '12' }} > {object['personal']['name']} </span>
                                                                                </div>
                                                                                {
                                                                                    isAdmin[0]
                                                                                        ? <div className="col-4 " >
                                                                                            <IconButton
                                                                                                ref={anchorRef}
                                                                                                aria-controls={open ? 'menu-list-grow' : undefined}
                                                                                                aria-haspopup="true"
                                                                                                onClick={() => handleMenuToggle()
                                                                                                }
                                                                                            >
                                                                                                <MoreVert fontSize="large" color="primary" />
                                                                                            </IconButton>
                                                                                            {/* <Menu
                                                                                                id="menu-appbar"
                                                                                                anchorEl={anchorEl}
                                                                                                anchorOrigin={{
                                                                                                    vertical: 'top',
                                                                                                    horizontal: 'right',
                                                                                                }}
                                                                                                keepMounted
                                                                                                transformOrigin={{
                                                                                                    vertical: 'top',
                                                                                                    horizontal: 'right',
                                                                                                }}
                                                                                                open={open}
                                                                                                onClose={() => handleMenuClose()}
                                                                                            >
                                                                                                <MenuItem onClick={() => handleEdit(object['personal']['cnic'])}>Edit</MenuItem>
                                                                                                <MenuItem onClick={() => handleIdCard(object['personal']['cnic'])}>ID Card</MenuItem>
                                                                                                <MenuItem onClick={() => handleTransfor(object['personal']['cnic'])}>Transfor</MenuItem>
                                                                                                <MenuItem onClick={() => handleDelete(object['personal']['cnic'])}>Delete</MenuItem>
                                                                                            </Menu> */}

                                                                                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                                                                                {({ TransitionProps, placement }) => (
                                                                                                    <Grow
                                                                                                        {...TransitionProps}
                                                                                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                                                                    >
                                                                                                        <Paper>
                                                                                                            <ClickAwayListener onClickAway={handleMenuClose}>
                                                                                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                                                                    <MenuItem onClick={() => handleEdit(object['personal']['cnic'])}>Edit</MenuItem>
                                                                                                                    <MenuItem onClick={() => handleIdCard(object['personal']['cnic'])}>ID Card</MenuItem>
                                                                                                                    <MenuItem onClick={() => handleTransfor(object['personal']['cnic'])}>Transfor</MenuItem>
                                                                                                                    <MenuItem onClick={() => handleDelete(object['personal']['cnic'])}>Delete</MenuItem>
                                                                                                                </MenuList>
                                                                                                            </ClickAwayListener>
                                                                                                        </Paper>
                                                                                                    </Grow>
                                                                                                )}
                                                                                            </Popper>

                                                                                        </div>
                                                                                        : null
                                                                                }

                                                                            </div>
                                                                            : null
                                                                )
                                                            }

                                                        </div>

                                                    </div>
                                                </div>
                                                <h3 className="col-6  text-center ">Client Forms</h3>
                                                <h5 className="col-3 text-right">{
                                                    clients[0].map(
                                                        (object, index) => clicked === index
                                                            ? <span key={index} style={{ fontSize: 12, opacity: 0.7 }} > Created at {getDateFromMillis(object['extra']['addedDate'])} </span>
                                                            : <span key={index} ></span>
                                                    )
                                                }</h5>
                                            </div>

                                            <table className="table card-body table-striped">
                                                <caption className="logo-hover text-center mt-2 pb-0 pt-2"><img src={zainlogo} height="13%" width="13%" alt="" /></caption>
                                                <tbody>
                                                    <tr className="table-hover1  mt-5 pt-5 shadow rounded" >

                                                        <td colSpan="4" className="pt-4 pl-5" >Application Form</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn text-right btn-danger" onClick={() => handlePrint(1)} >Print</button> </td>
                                                        <td className="text-center  pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(1)} >Preview</button>  </td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " > Nomination Form</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(2)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(2)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " >Confirmation Letter</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(3)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(3)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " >Site Plan</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(4)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(4)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >

                                                        <td colSpan="4" className="pt-4 pl-5 " >  Terms and Condition</td>
                                                        <td className="pl-5  pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(5)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(5)}  >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " >Possesion Certificate</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(6)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(6)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 "> Alotment Order</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(7)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(7)} >Preview</button></td>
                                                    </tr>


                                                    {
                                                        clients[0].map(
                                                            (object, index) => (
                                                                clicked === index
                                                                    ? object['extra']['transforFrom']
                                                                        ? <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                                            <td colSpan="4" className="pt-4 pl-5 "> Transfer Form</td>
                                                                            <td className="pl-5 text-right pt-3" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(8)} >Print</button></td>
                                                                            <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(8)} >Preview</button></td>
                                                                        </tr>
                                                                        : null
                                                                    : null
                                                            )
                                                        )
                                                    }

                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 "> Plot &amp; Payment Information</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger" onClick={() => handlePrint(9)} >Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(9)} >Preview</button></td>
                                                    </tr>


                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>





                            </div>

                        </div>
                    </div>



            }

        </div>
    )


}

export default Reports