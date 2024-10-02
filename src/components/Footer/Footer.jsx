import React from "react"
import "./Footer.css"

const Footer = (params) => {
 
    return(
        <section className="f-wapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./Livin2.png" alt="" width={200}/>
                        <span className="secondaryText">
                            Our vision is to make all people <br />
                            the best place to live for them
                        </span>
                </div>

                <div className="flexColStart f-right">
                    <span className="primaryText">
                        Imformation
                    </span>
                    <span className="secondaryText">
                        XYZ
                    </span>
<div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;