import React from "react";

class NavigatorOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: navigator.onLine,
        };
    }

    getStatus() {
        this.setState({ online: navigator.onLine })
        if (this.props.onChange) {
            this.props.onChange(navigator.online)
        }
    }

    componentDidMount() {
        window.addEventListener('online', this.getStatus.bind(this));
        window.addEventListener('offline', this.getStatus.bind(this));
    }

    render() {
        return null;
    }
}

export default NavigatorOnline;