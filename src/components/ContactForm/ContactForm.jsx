function ContactForm() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Send us a Message
      </h2>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email (Optional)"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border rounded-lg p-3"
        ></textarea>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

export default ContactForm;