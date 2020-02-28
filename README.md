# React Navigator Online
Hi, this package easy to use navigator online. Thanks to this package, you can check internet connection to something or to show popup about internet connection etc.

Note : I used <b>React Hooks.</b>

# Demo 
now Try right now! on netlify.
<br><br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/f21ecd1f-a05e-4df2-a36e-fd676d52680f/deploy-status)](https://react-navigator-online.netlify.com)
<hr>

# Demo Image
<img src="./demo/demo.gif"/>

# Installation

    npm install react-navigator-online
    yarn add react-navigator-online

# Example
```javascript
    import React from 'react';
    import NavigatorOnline from 'react-navigator-online'
    // i want to show it with toastify.
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message_online: "now! you have an internet connection.",
            message_ofline: "now! you have no internet connection.",
        };
    }

    showMessage(status) {
        if (status) {
            toast.success(this.state.message_online)
        }
        else {
            toast.error(this.state.message_ofline)
        }
    }

    render() {
        return (
        <div>
            <center>
                <h1>Hello to everyone!</h1>
                <h3>We will try react-navigator-online package</h3>
                <h3>@Author : Ali Yaman</h3>
            </center>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                onClose={() => alert("ok")}
            />

            {/* we can get status this onChange function like this. */}
            <NavigatorOnline onChange={(status) => this.showMessage(status)} />

        </div>
        );
    }
    }


    export default Example;
```