import { useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function Contact() {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        subject: "",

        message: ""

    });

    const [errors, setErrors] = useState({});

    const [success, setSuccess] = useState("");

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const validateForm = () => {

        let newErrors = {};

        if (!formData.name.trim()) {

            newErrors.name = "Name is required";

        }

        if (!formData.email.trim()) {

            newErrors.email = "Email is required";

        }

        else if (!/\S+@\S+\.\S+/.test(formData.email)) {

            newErrors.email = "Please enter a valid email address";

        }

        if (!formData.subject.trim()) {

            newErrors.subject = "Subject is required";

        }

        if (!formData.message.trim()) {

            newErrors.message = "Message is required";

        }

        return newErrors;

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

            setSuccess("");

            return;

        }

        setErrors({});

        setLoading(true);

        try {

            await emailjs.send(


                 /*--------------------- Service ID---------------------------- */
                "service_fdolpbj",

                "template_g624qwg",

                {

                    name: formData.name,

                    email: formData.email,

                    subject: formData.subject,

                    message: formData.message,

                    time: new Date().toLocaleString()

                },

                "wzaxxIRdEwK_yuzCG"

            );

            setSuccess("✅ Message sent successfully!");

            setFormData({

                name: "",

                email: "",

                subject: "",

                message: ""

            });

        }

        catch (error) {

            console.error(error);

            setSuccess("❌ Failed to send message. Please try again.");

        }

        finally {

            setLoading(false);

        }

    };
        return (

        <section

            id="contact"

            className="contact"

        >

            <SectionTitle

                subtitle="Contact Me"

                title="Let's Work Together"

                description="Have a project in mind or want to discuss an opportunity? Feel free to contact me."

            />

            <div className="contact-container">

                {/* Left Side */}

                <motion.div

                    className="contact-info"

                    initial={{
                        opacity: 0,
                        x: -50
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: .6
                    }}

                    viewport={{
                        once: true
                    }}

                >

                    <h3>

                        Get In Touch

                    </h3>

                    <p>

                        I'm always interested in new opportunities,
                        collaborations and exciting projects.
                        Feel free to contact me anytime.

                    </p>

                    <div className="contact-card">

                        <FaEnvelope className="contact-icon" />

                        <div>

                            <h4>Email</h4>

                            <span>

                                malikhaider48008@gmail.com

                            </span>

                        </div>

                    </div>

                    <div className="contact-card">

                        <FaPhoneAlt className="contact-icon" />

                        <div>

                            <h4>Phone</h4>

                            <span>

                                +92 ***********

                            </span>

                        </div>

                    </div>

                    <div className="contact-card">

                        <FaMapMarkerAlt className="contact-icon" />

                        <div>

                            <h4>Location</h4>

                            <span>

                                Islamabad, Pakistan

                            </span>

                        </div>

                    </div>

                    <div className="contact-social">

                        <a

                            href="https://github.com/malikha1der"

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaGithub />

                        </a>

                        <a

                            href="https://www.linkedin.com/in/malik-haider-1a5017393"

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaLinkedin />

                        </a>

                    </div>

                </motion.div>

                {/* Right Side */}

                <motion.form

                    className="contact-form"

                    onSubmit={handleSubmit}

                    initial={{
                        opacity: 0,
                        x: 50
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: .6
                    }}

                    viewport={{
                        once: true
                    }}

                >

                    <input

                        type="text"

                        name="name"

                        placeholder="Your Name"

                        value={formData.name}

                        onChange={handleChange}

                        className={errors.name ? "error" : ""}

                    />

                    {

                        errors.name && (

                            <small className="form-error">

                                {errors.name}

                            </small>

                        )

                    }

                    <input

                        type="email"

                        name="email"

                        placeholder="Your Email"

                        value={formData.email}

                        onChange={handleChange}

                        className={errors.email ? "error" : ""}

                    />

                    {

                        errors.email && (

                            <small className="form-error">

                                {errors.email}

                            </small>

                        )

                    }

                    <input

                        type="text"

                        name="subject"

                        placeholder="Subject"

                        value={formData.subject}

                        onChange={handleChange}

                        className={errors.subject ? "error" : ""}

                    />

                    {

                        errors.subject && (

                            <small className="form-error">

                                {errors.subject}

                            </small>

                        )

                    }

                    <textarea

                        rows="7"

                        name="message"

                        placeholder="Write your message..."

                        value={formData.message}

                        onChange={handleChange}

                        className={errors.message ? "error" : ""}

                    />

                    {

                        errors.message && (

                            <small className="form-error">

                                {errors.message}

                            </small>

                        )

                    }

                    {

                        success && (

                            <p

                                className={

                                    success.includes("✅")

                                        ? "form-success"

                                        : "form-error"

                                }

                            >

                                {success}

                            </p>

                        )

                    }

                    <Button

                        text={loading ? "Sending..." : "Send Message"}

                        type="submit"

                        disabled={loading}

                    />

                </motion.form>

            </div>

        </section>

    );

}

export default Contact;