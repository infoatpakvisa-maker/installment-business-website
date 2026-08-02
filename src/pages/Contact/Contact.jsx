import MainLayout from "../../layouts/MainLayout";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

function Contact() {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <ContactInfo />
            <div className="mt-8">
              <GoogleMap />
            </div>
          </div>

          <ContactForm />

        </div>

      </section>
    </MainLayout>
  );
}

export default Contact;