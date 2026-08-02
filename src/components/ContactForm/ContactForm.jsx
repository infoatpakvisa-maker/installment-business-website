function ContactForm() {
  return (
    <form className="space-y-4">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border rounded-lg p-3"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border rounded-lg p-3"
      />

      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full border rounded-lg p-3"
      ></textarea>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;