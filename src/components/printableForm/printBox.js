import React, { Component } from 'react';
import Application from "../printableForm/ApplicationForm"
import Confirmation from "../printableForm/CONFIRMATION LETTER ";
import Possession from "../printableForm/PossessionCertificate";
import TermsAndCond from "../printableForm/TermsAndCondtition";
import SitePlan from "../printableForm/sitePlan";
import Allotment from "../printableForm/AlotmentOrder";

class PrintBox extends Component {

    constructor({ formNumber, users, clicked }) {
        super()
        this.state = {
            user : []
        }
    }
    getUser = () => {
        // console.log(`getUser : clicked = ${clicked} and users = ${users} `)
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

    
    componentWillMount() {
        this.getUser()
    }
    
    componentDidMount() {
    }

    
    

    render() {
        return (
            <div>
                { this.props.formNumber }
                {this.state.user}
            </div>
        );
    }
}

export default PrintBox;