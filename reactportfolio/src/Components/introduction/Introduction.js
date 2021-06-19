import "./introduction.css"

export default function Introduction() {
    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div className="imgContainer">
                    <img className="img" src="../assets/images/meme.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h1 className="introtxt"> Welcome to my Portfolio.</h1>
            </div>
            </div>
        </div>
    )
}
