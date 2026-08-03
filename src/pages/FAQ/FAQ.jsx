import MainLayout from "../../layouts/MainLayout";
import FAQList from "../../components/FAQList/FAQList";

function FAQ() {
  return (
    <MainLayout>
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-center mb-10">
          FAQ | Fazal Electronics
        </h1>

        <FAQList />

      </section>
    </MainLayout>
  );
}

export default FAQ;