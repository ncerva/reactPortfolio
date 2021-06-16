import "./introduction.css"

export default function Introduction() {
    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div className="imgContainer">
                    <img className="img" src="assets/images/me.jpeg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2> Hello my name is Nayeli</h2>
            </div>
            <a href="#projects" className="anchor">
                <img className="arrowimg" src="assets/images/arrow.png" alt=""></img>
            </a>
            </div>
        </div>
    )
}
