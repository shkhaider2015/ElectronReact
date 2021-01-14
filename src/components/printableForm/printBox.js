import React, { Component } from 'react';
import Application from "../printableForm/ApplicationForm"
import Confirmation from "../printableForm/CONFIRMATION LETTER ";
import Possession from "../printableForm/PossessionCertificate";
import TermsAndCond from "../printableForm/TermsAndCondtition";
import SitePlan from "../printableForm/sitePlan";
import Allotment from "../printableForm/AlotmentOrder";
import TransferForm from './TransferForm';
import PlotAndPaymentInformationForm from './PlotPaymentInformationForm';

class PrintBox extends Component {

    constructor(props) {
        super()
        this.state = {
            user: [],
            isImageReady: false,
        }
    }
    getUser = () => {
        this.props.users.map(
            (object, index) => (
                this.props.clicked === index
                    ? this.setState({ user: object })
                    : null
            )
        )
    }

    getForm = (x) => {
        switch (x) {
            case 1:
                return <Application obj={this.state.user} formNumber={x} print={true} />
            case 2:
                return <Application obj={this.state.user} formNumber={x} print={true} />
            case 3:
                return <Confirmation obj={this.state.user} print={true} />
            case 4:
                return <SitePlan obj={this.state.user} print={true} />
            case 5:
                return <TermsAndCond obj={this.state.user} print={true} />
            case 6:
                return <Possession obj={this.state.user} print={true} />
            case 7:
                return <Allotment obj={this.state.user} print={true} />
            case 8:
                return <TransferForm obj={this.state.user} print={true} />
            case 9:
                return <PlotAndPaymentInformationForm obj={this.state.user} print={true} />
            default:
                return null

        }
    }

    componentDidMount() {
        this.getUser()
        console.log("cdm")
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("cdu")

        console.log(prevProps)

        if (prevProps.clicked !== this.props.clicked) {
            this.getUser()
        }

        if (this.props.print) {

            setTimeout(
                () => {
                    this.props.handlePrinttt()
                },
                1000
            )
        }
    }


    render() {
        return (
            <div>
                {this.getForm(this.props.printNo)}
                {console.log("Name : ", this.state.user)}
            </div>
        );
    }
}

export default PrintBox;