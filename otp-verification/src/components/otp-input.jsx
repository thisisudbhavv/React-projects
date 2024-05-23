import { useRef, useState } from "react";

const OtpInput = ({length, onOtpSubmit = () => { }}) => {

    const[otp, setOtp] = useState(new Array(length).fill(""));

    const inputRefs = useRef([]);

    const handleChange = () => {

    }

    const handleClick = () => {

    }

    const handleKeyDown = () => {

    }

    return <div>
        {
            otp.map((value, index) => {
                return (
                    <input 
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="otpInput"
                    />
                )
            })
        }
    </div>
};

export default OtpInput;