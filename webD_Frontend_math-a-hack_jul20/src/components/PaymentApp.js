import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import { Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const debug = false
const apiPath = debug ? 'http://localhost:3011/api/payments/' : 'https://api.pay.mathmaterate.com/api/payments/';
const apiKey = debug ? 'rzp_test_IO3kZsPcba60kU' : 'rzp_live_laSbeFTbif8ZtP'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

class PaymentApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: 1,
            productName: "",
            originalPrice: 160000, 
            finalPrice: 160000,
            discount: 0,
            description: "",
            couponCode: "",
            customerId: "",
            customerName: null,
            contactNo: null,
            email: "",
            askId: false,
            askDetails: false,
            msg: "",
            package: "init"
        }
        this.handleCIdSubmit = this.handleCIdSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePackage = this.changePackage.bind(this);
    }

    /*componentDidMount() {
        fetch(apiPath + 'getProduct/' + this.props.initial)
            .then(response => response.json())
            .then(data => this.setState({ 
                productId: data.pk,
                productName: data.name,
                originalPrice: data.price,
                finalPrice: this.state.originalPrice - this.state.originalPrice*this.state.discount/100,
                description: data.details,
            }));
    }*/

    changePackage(event) {
        event.preventDefault();
        if(this.state.package=="init")
        {
            fetch(apiPath + 'getProduct/' + this.props.package)
            .then(response => response.json())
            .then(data => this.setState({ 
                productId: data.pk,
                productName: data.name,
                originalPrice: data.price,
                finalPrice: data.price - data.price*this.state.discount/100,
                description: data.details,
                package: "full"
            }));
        }
        else
        {
            fetch(apiPath + 'getProduct/' + this.props.initial)
            .then(response => response.json())
            .then(data => this.setState({ 
                productId: data.pk,
                productName: data.name,
                originalPrice: data.price,
                finalPrice: data.price - data.price*this.state.discount/100,
                description: data.details,
                package: "init"
            }));
        }
    }

    async handleCIdSubmit(event) {
        event.preventDefault();
        try{
            const data = await fetch(apiPath + 'getCustomerDetailsAndDiscount?customerId=' + this.state.customerId + '&productId=' + this.state.productId).then(t => t.json());
            this.setState({
                discount: data.discount,
                finalPrice: this.state.originalPrice - this.state.originalPrice*data.discount/100,
                couponCode: data.couponCode,
                customerName: data.stuFirstName + ' ' + data.stuLastName,
                contactNo: data.contactNo,
                email: data.email,
                askId: false,
                askDetails: true,
                msg: ""
            });
        } catch (error) {
            this.setState({msg: "Customer ID not found"});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }
        
        const custData = await fetch(apiPath + 'updateCustomer?customerId=' + this.state.customerId + '&customerName=' + this.state.customerName + '&customerEmail=' + this.contactEmail + '&customerContactNo=' + this.contactPhoneNo)
            .then((t) => t.json());
        
        const data = await fetch(apiPath + 'createOrder?productId=' + this.state.productId + '&couponCode=' + this.state.couponCode + '&customerId=' + this.state.customerId)
            .then((t) => t.json());
        // console.log(data);
        const options = {
            key: apiKey,
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: this.state.productName,
            description: this.state.description,
            handler: async function (response) {
                const verification = await fetch(apiPath + 'confirmPayment?' 
                    + 'razorpay_order_id=' + response.razorpay_order_id 
                    + '&razorpay_payment_id=' + response.razorpay_payment_id
                    + '&razorpay_signature=' + response.razorpay_signature
                ).then(t => t.json());
                console.log(verification)
                if(verification)
                    alert("Payment Successful!")
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        this.setState({askDetails: false});
    }

    render() {
        return (
            <div>
                <div type="button" className="btn buttonBordered font-weight-bold" onClick={()=>this.setState({askId: true})}>
                    <del>INR {(this.state.originalPrice/50).toFixed(2)}</del> INR {(this.state.originalPrice/100).toFixed(2)} 
                </div>
                <Modal show={this.state.askId} onHide={()=>this.setState({askId: false})} dialogClassName="formModal">
                    <Modal.Body>
                        <div className="bordered formContainer m-auto">
                            <div className="mb-4">
                                <h5 className="font-weight-bold">Enter your Customer ID here</h5>
                            </div>
                            <form className="form" onSubmit={this.handleCIdSubmit}>
                                <div className="form-group"><TextField required label="Customer ID" fullWidth={true} value={this.state.customerId} onChange={(event) => {this.setState ({customerId: event.target.value})}} /></div>
                                <div className="pt-4 text-center">
                                    <div className="pb-2 text-info">
                                        {this.state.msg}
                                    </div>
                                    <button type="submit" className="btn buttonBordered font-weight-bold">Submit <FaChevronRight className="mb-1" /> </button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.askDetails} onHide={()=>this.setState({askDetails: false})} dialogClassName="formModal">
                    <Modal.Body>
                        <div className="bordered formContainer m-auto">
                            <div className="mb-4">
                                <h3 className="font-weight-bold text-center">{this.state.productName}</h3>
                            </div>
                            <div className="row py-md-3 mb-4">
                                <div className="col-8 d-flex flex-column justify-content-between">
                                    <div className="box border p-3">
                                        {this.state.description}
                                    </div>
                                </div>
                                <div className="col-4">
                                    <del>INR {(this.state.originalPrice/50).toFixed(2)}</del><br/>
                                    <del>INR {(this.state.originalPrice/100).toFixed(2)}</del><br/>
                                    INR {(this.state.finalPrice/100).toFixed(2)}
                                </div>
                            </div>
                            <div className="form-group p-3">
                                <FormLabel component="legend">Choose Option:</FormLabel>
                                <Select value={this.state.package} onChange={this.changePackage}>
                                    <MenuItem value="init">Initial Package</MenuItem>
                                    <MenuItem value="full">Full Package</MenuItem>
                                </Select>
                            </div>
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="form-group"><TextField required label="Name" fullWidth={true} value={this.state.customerName} onChange={(event) => {this.setState ({customerName: event.target.value})}} /></div>
                                <div className="form-group"><TextField required label="Contact Email" fullWidth={true} value={this.contactEmail} onChange={(event) => {this.contactEmail = event.target.value}} /></div>
                                <div className="form-group"><TextField required label="Contact Phone No." fullWidth={true} value={this.contactPhoneNo} onChange={(event) => {this.contactPhoneNo = event.target.value}} /></div>
                                <div className="pt-4 text-center">
                                    <button type="submit" className="btn buttonBordered font-weight-bold">Pay Now <FaChevronRight className="mb-1" /> </button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
                <style jsx>{`
                    .box {
                        border-radius: 15px;
                        background: linear-gradient(45deg, #e1f0ff30, #e4f0ff);
                        box-shadow: 0px 0px 10px 2px #b4d1f5;
                        height: 100%;
                        position: relative;
                        color: rgba(0,0,0,1);
                    }
                    .form {
                        z-index: 10;
                    }
                    .formContainer {
                        max-width: 600px;
                        padding: 30px 20px;
                        border-radius: 30px;
                    }
                    .formModal div {
                        border-radius: 30px
                    }
                `}</style>
            </div>
        );
    }

}

export default PaymentApp;
