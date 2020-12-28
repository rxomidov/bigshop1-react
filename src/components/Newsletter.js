import React from 'react';

export default function Newsletter(props) {
    return <>
        <section className="newsletter">
            <div className="container">
                <h1 className="section-title
            text-white text-capitalize">Newsletter</h1>
                <form action="">
                    <div className="form-group">
                        <input type="email" name="email"
                               className="form-control"
                               placeholder="Enter Your Email Address..."
                        />
                        <button className="form-control" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </>

}