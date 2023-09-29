import React from "react";
import style from "./cta.module.scss"
const ContactSubSection = React.memo(() => {
    return (
        <section className={style.section}>
            <div className="container">
                <h3>
                    We're always here to help you on your Relia journey,
                    <br /> in any way we can.
                </h3>
                <div>
                    <a href="/contact" className="btn btn-primary">Contact us</a>
                </div>
            </div>
        </section>
    );
});
export default ContactSubSection;