import React, { Component } from "react";
import Switch from "react-switch";

class ToggleSwitch extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label>
                <Switch
                    height={35}
                    width={70}
                    uncheckedIcon=""
                    checkedIcon=""
                    onColor="#ff7300"
                    offColor="#8abdf3"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                />
            </label>
        );
    }
}

export default ToggleSwitch;
