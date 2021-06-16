import React from 'react'
import "./footer.css"
import { BsFillChatDotsFill, BsEnvelopeOpenFill } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <BsFillChatDotsFill className="icon" />
                        <span> 210.480.3349</span>
                    </div>
                    <div className="itemContainer">
                        <BsEnvelopeOpenFill className="icon" />
                        <span> nayelicervantes40@gmail.com</span>
                    </div>
                    </div>
        </div>
        </div>
    )
}
