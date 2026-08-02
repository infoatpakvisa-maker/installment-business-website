import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-6">
        Contact Information
      </h2>

      <div className="space-y-5">

        <p>
          <FaPhoneAlt className="inline mr-3 text-blue-600" />
          +92 332 5280260
        </p>

        <p>
          <FaWhatsapp className="inline mr-3 text-green-600" />
          WhatsApp Available
        </p>

        <p>
          <FaEnvelope className="inline mr-3 text-red-600" />
         fazalinstalment@gmail.com
        </p>

        <p>
          <FaMapMarkerAlt className="inline mr-3 text-red-500" />
          Raja Sultan Market,
          Sajid Bukhari Road,
          Rawalpindi
        </p>

        <p>
          <FaClock className="inline mr-3 text-yellow-600" />
          Mon - Sat
          11:00 AM - 10:00 PM
        </p>

      </div>

    </div>
  );
}

export default ContactInfo;