import { useState } from "react";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        // Name validation
        if (!values.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        // Email validation
        if (!values.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        // Phone validation
        if (!values.phone || values.phone && !/^\d{11}$/.test(values.phone)) {
            newErrors.phone = 'Phone number must be Valid';
            valid = false;
        }

        // Message validation
        if (!values.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        } else if (values.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Here you would typically make an API call to submit the form
            // For demonstration, we'll just simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setSubmitSuccess(true);
            setValues({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded p-4 lg:w-[40vw] sm:w-[100%]">
            {submitSuccess ? (
                <div className="text-center py-4">
                    <div className="text-2xl font-bold mb-2">Thank You!</div>
                    <p>Your message has been sent successfully.</p>
                    <button 
                        onClick={() => setSubmitSuccess(false)}
                        className="mt-4 bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 hover:from-[#fe8c00] hover:to-[#f83600] btn"
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <>
                    <div className="h4 mb-4">Enter Your Details</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                placeholder=""
                                name="name"
                                value={values.name} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="name">Name</label>
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                placeholder=""
                                name="email"
                                value={values.email} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="email">Email</label>
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input 
                                type="tel" 
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                                placeholder=""
                                name="phone"
                                value={values.phone} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="phone">Phone Number (optional)</label>
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="message">Your Message:</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                placeholder="Hello World" 
                                className={`w-100 rounded text-black p-2 mt-3 h-[15vh] ${errors.message ? 'border-danger' : ''}`} 
                                value={values.message} 
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <div className="text-danger small">{errors.message}</div>}
                        </div>
                        
                        <button 
                            type="submit" 
                            className="bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 hover:from-[#fe8c00] hover:to-[#f83600] btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactForm;