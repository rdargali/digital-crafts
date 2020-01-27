
import { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Hello {this.props.FirstName} {this.props.LastName},you are {this.props.age}!</h1>
    }
}

export default Welcome
