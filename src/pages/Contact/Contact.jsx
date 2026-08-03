import MainLayout from "../../layouts/MainLayout";

import ContactInfo from "../../components/ContactInfo/ContactInfo";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
         Contact Us | Fazal Electronics
        </h1>

        <ContactInfo />

        <div className="my-10">
          <GoogleMap />
        </div>

        <ContactForm />

      </section>

    </MainLayout>
  );
}

export default Contact;