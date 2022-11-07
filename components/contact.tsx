import { NextPage } from "next";
import { useState } from "react";

const Contact : NextPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSuject] = useState('')
    const [text, setText] = useState('')

    const submit = () => {
        if(name && email && subject && text) {
            console.log("Submit")
        } else {
            console.log("Please enter all field")
        }
    }
    return (
        <div className="contact-wrapper">
            <div className="main">
                    <div className="outer-model">
                            <div className="left-side">
                                <h2> {"Let's chat"}</h2>
                                <h2> Tell me about your project</h2>
                            </div>
                            <div className="right-side">
                                <div className="form">
                                    <h5>Send us a message</h5>
                                    <div className="form-field">
                                        <input placeholder="Full name*" onChange={(event) => setName(event.target.value)} required/>
                                    </div>
                                    <div className="form-field">
                                        <input placeholder="Email*" onChange={(event) => setEmail(event.target.value)} required/>
                                    </div>
                                    <div className="form-field">
                                        <input placeholder="Subject*" onChange={(event) => setSuject(event.target.value)} required />
                                    </div>
                                    <div className="text-field">
                                        <h6>Tell us about your project </h6>
                                        <textarea onChange={(event) => setText(event.target.value)} required></textarea>
                                    </div>
                                    <div className="send-message">
                                        <button onClick={submit}>Send message</button>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
            
        </div>
    )
}

export default  Contact;