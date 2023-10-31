import SupportFAQ from "components/Support/SupportFAQ";
import SupportForm from "components/Support/SupportForm";

function SupportPage() {
  return (
    <div className="container py-5 text-white">
      <h1 className="my-5">Support</h1>
      <div className="row gx-lg-5">
        <div className="col col-12 col-md-5 col-lg-4">
          <h2 className="fs-3">Do you have a question?</h2>
          <h2 className="fs-3 mb-3">Send us a message.</h2>
          <SupportForm />
        </div>
        <div className="col col-12 col-md-6 ms-md-5">
          <h2 className="fs-3 mb-5">Frequently Asked Questions</h2>
          <SupportFAQ />
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
