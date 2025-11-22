export default function Contact() {
    return (
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800"/>
            <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800"/>
            <textarea placeholder="Message" rows="5" className="p-3 rounded bg-gray-800"></textarea>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded text-white font-medium">
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <p>Email: thabethesandil44@gmail.com</p>
            <p>WhatsApp & Call: 071 737 8540</p>
            <p>Calls Only: 083 306 2796</p>
          </div>
        </div>
      </section>
    );
  }
  