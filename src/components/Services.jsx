export default function Services() {
    const services = [
      { tier: "Basic", price: "R12,000" },
      { tier: "Standard", price: "R20,000" },
      { tier: "Premium", price: "R35,000" },
    ];
  
    return (
      <section id="services" className="py-20 px-4 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Services & Pricing</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div key={service.tier} className="bg-gray-700 p-6 rounded shadow w-64 text-center">
              <h3 className="text-2xl font-semibold mb-4">{service.tier}</h3>
              <p className="text-xl font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  