import "./header.css"
import { BsFillChatDotsFill, BsEnvelopeOpenFill } from "react-icons/bs";

export default function Header() {
    return (
        <div className="header" id="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#introduction" className="logo">N.Cerva</a>
                    </div>
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
    )
}
