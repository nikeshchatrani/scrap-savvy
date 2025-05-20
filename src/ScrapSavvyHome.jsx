import { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ScrapSavvyHome() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 relative">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-600 text-white p-4 shadow-md flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Scrap Savvy</h1>
        <nav className="space-x-4 mt-2 md:mt-0">
          <a href="#prices" className="hover:underline">Price List</a>
          <a href="#how" className="hover:underline">How It Works</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <div className="pt-24 md:pt-16">
        {/* Hero Section */}
        <section className="bg-green-100 p-6 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Turn Your Trash Into Cash in Ahmedabad!</h2>
          <p className="text-lg mb-4">Sell your recyclable waste quickly and easily with Scrap Savvy.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#prices" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto text-center">Check Price List</a>
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto text-center">Schedule a Pickup</a>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">♻️ Recyclable Waste</h3>
            <p>Paper, Plastic, Metal, E-waste and more.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">🚛 Doorstep Pickup</h3>
            <p>Convenient pickups right from your home.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">💰 Instant Payments</h3>
            <p>Get paid on the spot after collection.</p>
          </div>
        </section>

        {/* Price List */}
        <section id="prices" className="p-6">
          <h2 className="text-2xl font-bold mb-4">Price List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="text-left p-2 border">Waste Type</th>
                  <th className="text-left p-2 border">Sub-type</th>
                  <th className="text-left p-2 border">Price (₹/kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Paper</td>
                  <td className="p-2 border">Newspaper, Books</td>
                  <td className="p-2 border">₹10–₹12</td>
                </tr>
                <tr>
                  <td className="p-2 border">Plastic</td>
                  <td className="p-2 border">Bottles, Containers</td>
                  <td className="p-2 border">₹5–₹7</td>
                </tr>
                <tr>
                  <td className="p-2 border">Metal</td>
                  <td className="p-2 border">Iron, Aluminum</td>
                  <td className="p-2 border">₹20–₹40</td>
                </tr>
                <tr>
                  <td className="p-2 border">E-Waste</td>
                  <td className="p-2 border">Mobiles, Laptops</td>
                  <td className="p-2 border">On Request</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="bg-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Choose Waste Type",
              "Schedule Pickup",
              "We Pick It Up",
              "Get Paid Instantly"
            ].map((step, index) => (
              <div key={index} className="bg-white p-4 shadow rounded text-center">
                <div className="text-xl font-bold mb-2">Step {index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Waste Type" className="w-full border p-2 rounded" />
              <textarea placeholder="Message or Preferred Time" className="w-full border p-2 rounded" />
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto">Submit</button>
            </form>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2"><Phone size={18} /> +91-XXXXXXXXXX</p>
              <p className="flex items-center gap-2"><Mail size={18} /> contact@scrapsavvy.in</p>
              <p className="flex items-center gap-2"><MapPin size={18} /> Ahmedabad, Gujarat</p>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-center mt-10">
        <p>© 2025 Scrap Savvy, Ahmedabad | Reduce. Reuse. Recycle. Get Rewarded.</p>
      </footer>
    </div>
  );
}
