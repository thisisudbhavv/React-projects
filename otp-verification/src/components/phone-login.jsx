import { useState } from "react";
import OtpInput from './otp-input'

const PhoneOtpForm = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handlePhoneSubmit = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid phone number");
            return;
        }

        setShowOtpField(true);
    }

    const onOtpSubmit = () => {
        console.log("Success");
    }

    return <div>
        {!showOtpField ? <form onSubmit={() => {}}>
            <input type="text" value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter phone number"/>

            <button type="submit" onClick={handlePhoneSubmit}>Send OTP</button>
        </form> : <div>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>}
    </div>
};

export default PhoneOtpForm