import ContactForm from '../../components/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-6 text-lg text-gray-600">
        Have questions or need support? Fill out the form below, and we will get back to you!
      </p>
      <ContactForm />
    </div>
  );
}