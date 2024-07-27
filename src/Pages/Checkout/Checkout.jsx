import Input from "../../Componants/Ui/Input/Input";
import "./Checkout.css";

export default function Checkout() {
  return (
    <>
      <h1>Checkout</h1>
      <div className="ckeckout-wrapper">
        <h4 className="h3">Billing Daital</h4>
        <div className="billing-field">
          <form action="">
            <div className="input-group df">
              <div className="left-box">
                <Input
                  name="name"
                  placeholder=" Full name"
                  label={"Enter your full name"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />

                <Input
                  name="address"
                  placeholder="Enter your Address"
                  label={"Address"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />
                <Input
                  name="city"
                  placeholder="Enter your City"
                  label={"City"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />
                <Input
                  name="state"
                  placeholder="Enter your State"
                  label={"State"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />
                <Input
                  name="Pincode"
                  placeholder="Enter your Pincode"
                  label={"Pincode"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />
              </div>

              <div className="right-box">
              <Input
                  name="email"
                  placeholder="E-MAIL"
                  label={"Enter your e-mail"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />
              <Input
                  name="phone"
                  placeholder="Phone"
                  label={"Enter your Phone"}
                  value={""}
                  error={""}
                  onChange={(e) => {}}
                />
             
              </div>
            </div>
            <div className="border-botton">
              <div></div>
            </div>
            <div className="form-field">
              <h3 className="h3">SHOPPING CARD</h3>
              <p className="h3">
                Total: Rs.<span> 500</span>
              </p>
            </div>
            <div className="form-field">
              <input type="checkbox" id="term" className="term" />
              <label htmlFor="term" className="term">
                {" "}
                I have accepted the Terms of Use.
              </label>
            </div>
            <div className="product-Daital form-field ">
              <button type="submit">Order Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
