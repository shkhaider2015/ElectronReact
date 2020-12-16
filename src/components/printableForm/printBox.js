import React, { Component } from 'react';
import Application from "../printableForm/ApplicationForm"
import Confirmation from "../printableForm/CONFIRMATION LETTER ";
import Possession from "../printableForm/PossessionCertificate";
import TermsAndCond from "../printableForm/TermsAndCondtition";
import SitePlan from "../printableForm/sitePlan";
import Allotment from "../printableForm/AlotmentOrder";

class PrintBox extends Component {

    constructor(props) {
        super()
        this.state = {
            user : []
        }
    }
    getUser = () => {
          this.props.users.map(
            (object, index) => (
              this.props.clicked === index
              ? this.setState({ user : object })
              : null
            )
          )
      }
    getForm = (x) => {
        switch (x) {
            case 1:
                return <Application obj={this.state.user} formNumber={x} />
            case 2:
                return <Application obj={this.state.user} formNumber={x} />
            case 3:
                return <Confirmation obj={this.state.user} />
            case 4:
                return <SitePlan obj={this.state.user} />
            case 5:
                return <TermsAndCond obj={this.state.user} />
            case 6:
                return <Possession obj={this.state.user} />
            case 7:
                return <Allotment obj={this.state.user} />
            default:
                return null

        }
    }
    
    componentDidMount() {
        this.getUser()
        console.log("cdm")
    }

    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.print)
        {
            this.props.handlePrinttt()
        }

        console.log(prevProps)

        if(prevProps.clicked !== this.props.clicked)
        {
            this.getUser()
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