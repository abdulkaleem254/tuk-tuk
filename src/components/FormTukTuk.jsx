const FormTukTuk = () => {
    function submitForm(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);


        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                form.reset();
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Form submission failed.');
            });
    }


return (
    <section id="contact" className="contact-section my-5">
        <div className="container">
            <div className="row justify-content-between">
                <h2 className="text-center my-3">Get in Touch</h2>
                <div className="iframe-box col-12 col-md-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605542.6630409886!2d104.98244509999999!3d12.145439549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e1!3m2!1sen!2sin!4v1739114771007!5m2!1sen!2sin"
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="col-12 col-md-6">
                    <div className="get-in-touch-form">
                        <h2>Contact Us</h2>
                        <form name="contact" method="POST" data-netlify="true" onSubmit={submitForm}>
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}
export default FormTukTuk;