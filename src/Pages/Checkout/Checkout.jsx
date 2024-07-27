import './Checkout.css';

export default function Checkout() {
    return (
        <>
            <h1>Checkout</h1>
            <div className='ckeckout-wrapper'>
                <h4 className='h3'>Billing Daital</h4>
                <div className="billing-field">
                    <form  cl action="">
                        <div className="input-group df">
                            <div className="left-box">
                                <div className="form-field">
                                    <label htmlFor="name">Enter your full name</label>
                                    <input type="text" id='name' />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name">Address:</label>
                                    <input type="text" id='name' />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name">City</label>
                                    <input type="text" id='name' />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name">State:</label>
                                    <input type="text" id='name' />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name">Pincode:</label>
                                    <input type="text" id='name' />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name">Country:</label>
                                    <input type="text" id='name' />
                                </div>
                            </div>

                            <div className="right-box">
                                <div className="form-field">
                                    <label htmlFor="name">E-MAIL:</label>
                                    <input type="text" id='name' />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name">Phone:</label>
                                    <input type="text" id='name' />
                                </div>

                            </div>

                        </div>
                        <div className='border-botton'><div></div></div>
                        <div className="form-field">
                                  <h3 className='h3'>SHOPPING CARD</h3> 
                                  <p className='h3'>Total: Rs.<span> 500</span></p> 
                        </div>
                        <div className="form-field">
                                   <input type="checkbox" id='term' className='term'/>
                                    <label htmlFor="term" className='term'>  I have accepted the Terms of Use.</label>
                                   
                                </div>
                        <div className="product-Daital form-field ">
                                 <button type="submit">Order Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}