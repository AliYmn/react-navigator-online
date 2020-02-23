import React from "react";

class NavigatorOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: navigator.onLine, // navigator state
        };
    }

    getStatus() {
        // if any change about enternet connection and than set state.
        this.setState({ online: navigator.onLine })
        if (this.props.onChange) {
            // onChange props is okey?
            this.props.onChange(navigator.online)
        }
    }

    componentDidMount() {
        // we have two Event Listenet to online and offline.
        window.addEventListener('online', this.getStatus.bind(this));
        window.addEventListener('offline', this.getStatus.bind(this));
    }

    render() {
        // we don't have render because this package not ui frontend not yet.
        return null;
    }
}

export default NavigatorOnline;