import React from "react";
import './Footer.css'
export default function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <p>Copyright © <a href='/'>Daily Sales</a> {new Date().getFullYear()}. </p>
            </div>
        </React.Fragment>
    )
}