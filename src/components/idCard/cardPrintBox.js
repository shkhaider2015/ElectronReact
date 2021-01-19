import React, { Component } from 'react';
import CardFront from "../../RawData/idcard1.svg";
import CardBack from "../../RawData/idcard2.svg";
import DefaultUser from '../../RawData/defaultuser.png';
import { BarcodeCanvas } from "./barcodeCanvas";

class CardPrintBox extends Component {

    constructor(props) {
        super()
        this.state = {
            inputRef : null
        }
    }
    

   

    componentDidMount() {
        // this.getUser()
        console.log("cdm")
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("cdu")

        console.log(prevProps)

        // if (prevProps.clicked !== this.props.clicked) {
        //     this.getUser()
        // }

        if (this.props.print) {

            setTimeout(
                () => {
                    this.props.handlePrint()
                },
                1000
            )
        }
    }


    render() {
        return (

            <div className="container" >
                <div className="row mt-3" >

                    <div className="offset-1 col-5" >

                        {/* <img alt="uuy" src={CardFront} /> */}
                        <div style={{
                            width: "450px",
                            height: "650px",
                            backgroundImage: `url(${CardFront})`
                        }} >

                            <img alt="jhj" src={this.props.obj['personal']['imageURI'] ? this.props.obj['personal']['imageURI'] : DefaultUser} style={{
                                width: '153px',
                                height: '155px',
                                marginTop: '192px',
                                marginLeft: '149px',
                                marginRight: 'auto'
                            }} />

                            <div
                                style={{
                                    marginLeft: '180px',
                                    marginTop: '40px',
                                    fontWeight: 'bold'
                                }}
                            > {this.props.obj['personal']['name']} </div>

                            <div
                                style={{
                                    marginLeft: '180px',
                                    marginTop: '23px',
                                    fontWeight: 'bold'
                                }}
                            > {this.props.obj['personal']['name']} </div>

                            <div style={{
                                width: '170px',
                                display: 'block',
                                marginTop: '50px',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} >
                               
                                <BarcodeCanvas id={this.props.obj['personal']['id']}  />
                            </div>

                        </div>

                    </div>

                    <div className="col-5" >
                        {/* <img alt="uuy" src={CardBack} /> */}

                        <div style={{
                            width: "450px",
                            height: "650px",
                            padding: '1px',
                            backgroundImage: `url(${CardBack})`
                        }} >

                            {/* <div style={{
    marginLeft: '185px',
    marginRight: '40px',
    marginTop: '530px',
    fontWeight: 'bold'
  }} >
    haider chali pathan colony
  </div> */}

                            {/* <div style={{
    marginLeft: '80px',
    marginRight: '40px',
    marginTop: '10px',
    fontWeight: 'bold'
  }} >
    haider chali pathan colony manghopir road banaras
  </div> */}

                            {
                                this.props.obj['personal']['address'].toString().length <= 25
                                    ? <div style={{
                                        marginLeft: '185px',
                                        marginRight: '40px',
                                        marginTop: '530px',
                                        fontWeight: 'bold'
                                    }} >
                                        {this.props.obj['personal']['address']}
                                    </div>
                                    : <div>
                                        <div style={{
                                            marginLeft: '185px',
                                            marginRight: '40px',
                                            marginTop: '530px',
                                            fontWeight: 'bold'
                                        }} >
                                            {this.props.obj['personal']['address'].toString().slice(0, 25)}
                                        </div>

                                        <div style={{
                                            marginLeft: '80px',
                                            marginRight: '40px',
                                            marginTop: '10px',
                                            fontWeight: 'bold'
                                        }} >
                                            {this.props.obj['personal']['address'].toString().slice(25, this.props.obj['personal']['address'].toString().length)}
                                        </div>
                                    </div>
                            }


                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default CardPrintBox;