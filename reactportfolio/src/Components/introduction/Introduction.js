import "./introduction.css"

export default function Introduction() {
    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div id="circle">
                <div className="imgContainer">
                    <img className="img" src="../assets/images/cutout.png" alt=""/>
                </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h1 className="introtxt"> Welcome to my Portfolio.</h1>
            </div>
            <a href="#projects" className="anchor">
                <img className="arrowimg" src="../assets/images/arrow.png" alt=""></img>
            </a>
            </div>
        </div>
    )
}
