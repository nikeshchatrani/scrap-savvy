import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Search,
  IndianRupee,
  Package,
  Smartphone,
  Cpu,
  Recycle,
  AirVent,
  ScrollText,
  Box,
  Milk,
  InspectionPanel,
  Utensils,
  WashingMachine,
  Refrigerator,
  Dam,
  Fan,
  Printer,
  Cable,
  Tv,
  Microwave,
  BatteryFull,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Bike,
  Car,
} from "lucide-react";
import logo from "./images/scrap_savvy_logo_latest.png";
import circularEconomy from "./images/circular_economy.jpeg";

// Helper to map string to icon component
const ICONS = {
  Cpu,
  Smartphone,
  AirVent,
  Package,
  Recycle,
  ScrollText,
  Box,
  Milk,
  InspectionPanel,
  Utensils,
  WashingMachine,
  Refrigerator,
  Dam,
  Fan,
  Printer,
  Cable,
  Tv,
  Microwave,
  BatteryFull,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Bike,
  Car,
  // add more mappings as needed
};

// ---- PRICE DATA ----
const PRICE_CATALOG = {
  "Normal Recyclables": [
    {
      type: "Paper",
      name: "Books / Newspaper",
      icon: "ScrollText",
      price: "₹12–₹15",
      unit: "kg",
    },
    {
      type: "Cardboard",
      name: "Boxes / Cartons",
      icon: "Box",
      price: "₹12",
      unit: "kg",
    },
    {
      type: "Plastic",
      name: "Bottles / Containers",
      icon: "Milk",
      price: "₹8",
      unit: "kg",
    },
    {
      type: "Metal",
      name: "Aluminium",
      price: "₹105",
      icon: "InspectionPanel",
      unit: "kg",
    },
    {
      type: "Metal",
      name: "Brass",
      icon: "InspectionPanel",
      price: "₹305",
      unit: "kg",
    },
    {
      type: "Metal",
      name: "Copper",
      icon: "InspectionPanel",
      price: "₹425",
      unit: "kg",
    },
    {
      type: "Metal",
      name: "Iron",
      icon: "InspectionPanel",
      price: "₹25",
      unit: "kg",
    },
    {
      type: "Utensils",
      icon: "Utensils",
      name: "Steel Utensils",
      price: "₹40",
      unit: "kg",
    },
  ],
  "Large Appliances": [
    {
      type: "AC 2T",
      name: "Split/Window AC (Copper coil)",
      price: "₹5600",
      unit: "piece",
    },
    {
      type: "AC 1.5T Coil",
      name: "Split/Window AC (Indoor/Outdoor)",
      price: "₹4150",
      unit: "piece",
    },
    {
      type: "AC 1T",
      name: "Window AC (Copper coil)",
      price: "₹3000",
      unit: "piece",
    },
    {
      type: "Washing Machine",
      name: "Front Load (Fully Automatic)",
      price: "₹1350",
      unit: "piece",
      icon: "WashingMachine",
    },
    {
      type: "Washing Machine",
      name: "Semi Automatic (Double Drum)",
      icon: "WashingMachine",
      price: "₹750",
      unit: "piece",
    },
    {
      type: "Fridge",
      name: "Double Door",
      price: "₹1550",
      unit: "piece",
      icon: "Refrigerator",
    },
    {
      type: "Fridge",
      name: "Single Door",
      price: "₹1200",
      unit: "piece",
      icon: "Refrigerator",
    },
    { type: "Geyser", name: "Geyser", icon: "Dam", price: "₹20", unit: "kg" },
    {
      type: "Cooler",
      name: "Iron Cooler",
      icon: "Fan",
      price: "₹24",
      unit: "kg",
    },
    {
      type: "Cooler",
      name: "Plastic Cooler",
      icon: "Fan",
      price: "₹15",
      unit: "kg",
    },
  ],
  "Small Appliances": [
    {
      type: "Printer/Scanner",
      name: "FAX / Printer / Scanner",
      price: "₹20",
      icon: "Printer",
      unit: "kg",
    },
    {
      type: "Metal E-waste",
      name: "Small devices",
      icon: "Recycle",
      price: "₹28",
      unit: "kg",
    },
    {
      type: "Plastic E-waste",
      name: "Small devices",
      price: "₹15",
      icon: "Recycle",
      unit: "kg",
    },
    {
      type: "Motors(Copper wiring)",
      name: "Small devices",
      icon: "Cable",
      price: "₹35",
      unit: "kg",
    },
    {
      type: "CRT TV",
      name: "CRT Television",
      icon: "Tv",
      price: "₹200",
      unit: "piece",
    },
    {
      type: "Ceiling Fan",
      name: "Fan unit",
      icon: "Fan",
      price: "₹35",
      unit: "kg",
    },
    {
      type: "Microwave",
      name: "Solo/Convection",
      price: "₹350",
      unit: "piece",
      icon: "Microwave",
    },
    { type: "UPS", name: "Home/Office", price: "₹180", unit: "piece" },
    { type: "Inverter", name: "Inverter/Stabilizer", price: "₹40", unit: "kg" },
    {
      type: "Battery",
      name: "Battery and Inverter",
      icon: "BatteryFull",
      price: "₹81",
      unit: "kg",
    },
  ],
  "Mobiles & Computers": [
    {
      type: "Laptop",
      name: "Scrap Laptop",
      icon: "Laptop",
      price: "₹300",
      unit: "piece",
    },
    {
      type: "Monitor",
      icon: "Monitor",
      name: "CRT Monitor",
      price: "₹150",
      unit: "piece",
    },
    {
      type: "Monitor",
      icon: "Monitor",
      name: "LCD Monitor",
      price: "₹200",
      unit: "piece",
    },
    {
      type: "CPU",
      name: "Computer CPU",
      icon: "Cpu",
      price: "₹225",
      unit: "piece",
    },
    {
      type: "E-Waste",
      name: "Mobiles / Laptops (usable parts)",
      price: "On request",
      unit: "piece",
      badge: "Varies",
      icon: "MonitorSmartphone",
    },
  ],
  Others: [
    {
      type: "Vehicle",
      name: "Bike",
      icon: "Bike",
      price: "₹2000",
      unit: "piece",
    },
    {
      type: "Vehicle",
      name: "Car",
      icon: "Car",
      price: "₹20000",
      unit: "piece",
    },
  ],
};

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

function PriceChip({ price, unit }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-sm">
      <IndianRupee size={14} aria-hidden /> {price}
      <span className="text-gray-500">/ {unit}</span>
    </span>
  );
}

function ItemIcon({ item, cat }) {
  // Use item's icon if specified, else fallback to category icon
  const IconComp =
    item.icon && ICONS[item.icon]
      ? ICONS[item.icon]
      : cat === "Mobiles & Computers"
      ? Cpu
      : cat === "Large Appliances"
      ? AirVent
      : cat === "Small Appliances"
      ? Smartphone
      : Recycle;
  return <IconComp size={18} />;
}

function PriceList() {
  const categories = Object.keys(PRICE_CATALOG);
  const [active, setActive] = useState(categories[0]);
  const [q, setQ] = useState("");
  const [view, setView] = useState("cards"); // "cards" | "table"

  const items = PRICE_CATALOG[active].filter(
    (i) =>
      i.type.toLowerCase().includes(q.toLowerCase()) ||
      i.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section id="prices" className="p-6 md:p-8 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Price List</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5" size={16} />
            <input
              aria-label="Search items"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search type or item…"
              className="w-56 rounded border pl-8 pr-3 py-2"
            />
          </div>
          <div className="inline-flex rounded border overflow-hidden">
            <button
              onClick={() => setView("cards")}
              className={classNames(
                "px-3 py-2 text-sm",
                view === "cards" ? "bg-gray-100" : "bg-white"
              )}
            >
              Cards
            </button>
            <button
              onClick={() => setView("table")}
              className={classNames(
                "px-3 py-2 text-sm border-l",
                view === "table" ? "bg-gray-100" : "bg-white"
              )}
            >
              Table
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={classNames(
              "rounded-full px-4 py-2 text-sm border",
              active === cat
                ? "bg-green-600 text-white border-green-600"
                : "bg-white hover:bg-gray-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards view */}
      {view === "cards" && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((i, idx) => (
            <div
              key={idx}
              className="rounded-xl border p-4 hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ItemIcon item={i} cat={active} /> {i.type}
                </div>
                <PriceChip price={i.price} unit={i.unit} />
              </div>
              <div className="mt-2 text-lg font-semibold">{i.name}</div>
              {i.badge && (
                <span className="mt-3 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                  {i.badge}
                </span>
              )}
            </div>
          ))}
          {items.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-8">
              No items match your search.
            </p>
          )}
        </div>
      )}

      {/* Table view */}
      {view === "table" && (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border bg-white text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 border text-left w-36">Type</th>
                <th className="p-2 border text-left">Item</th>
                <th className="p-2 border text-left w-40">Price</th>
                <th className="p-2 border text-left w-24">Unit</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i, idx) => (
                <tr key={idx} className="even:bg-gray-50/40">
                  <td className="p-2 border">{i.type}</td>
                  <td className="p-2 border">{i.name}</td>
                  <td className="p-2 border">{i.price}</td>
                  <td className="p-2 border">₹/{i.unit}</td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td
                    className="p-4 text-center text-gray-500 border"
                    colSpan={4}
                  >
                    No items match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function ScrapSavvyHome() {
  // 1. State for form fields
  const [form, setForm] = useState({
    name: "",
    phone: "",
    waste: "",
    message: "",
  });

  // 2. Handle input changes
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Handle form submit
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I want to schedule a pickup!\n\nName: ${form.name}\nPhone: ${form.phone}\nWaste Type: ${form.waste}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919726312867?text=${text}`, "_blank");
  };

  // 4. Smooth scroll to sections
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 relative">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-600 text-white p-4 shadow-md flex flex-col md:flex-row justify-between items-center">
        {/* <h1 className="text-2xl font-bold">Scrap Savvy</h1> */}
        <div className="flex items-center gap-2 mb-2 md:mb-0 bg-white pr-2 py-1 rounded">
          <img
            src={logo} // Place your logo image in public/logo.png or update the path
            alt="Scrap Savvy Logo"
            className="h-10 w-24 object-cover"
          />
          {/* <span className="text-2xl font-bold text-[#134A28]">Scrap Savvy</span> */}
        </div>
        <nav className="space-x-4 mt-2 md:mt-0">
          <a href="#prices" className="hover:underline">
            Price List
          </a>
          <a href="#how" className="hover:underline">
            How It Works
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <div className="pt-28 md:pt-[80px]">
        {/* Hero Section */}
        <section className="bg-green-100 p-6 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Join the Green Movement – One Scrap at a Time.
          </h2>
          <p className="text-lg mb-4">
            Sell your recyclable waste quickly and easily with{" "}
            <b>Scrap Savvy</b>.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#prices"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto text-center"
            >
              Check Price List
            </a>
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto text-center"
            >
              Schedule a Pickup
            </a>
          </div>
        </section>
        {/* Image + Content Section with title */}
        <section className="relative bg-white p-6 md:p-12 rounded flex flex-col items-center">
          {/* Title and Description */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-700 text-center">
            The Circular Economy of Waste Recycling
          </h2>
          <p className="text-lg mb-8 text-center max-w-2xl">
            In a circular economy, waste is not the end—it's the beginning of
            something new. Materials are collected, recycled, and reintroduced
            into the production cycle, reducing the need for raw resources and
            minimizing environmental impact.
          </p>

          {/* Circular Image with Diagonal Annotations */}
          <div
            className="relative flex justify-center items-center w-full max-w-xs mx-auto mb-8"
            style={{ minHeight: 320 }}
          >
            {/* The circular image */}
            <img
              src={circularEconomy}
              alt="Circular Economy Illustration"
              className="w-80 h-72 object-cover shadow"
            />

            {/* Annotation: 45° (top-right) */}
            <div
              className="absolute"
              style={{
                left: "100%",
                top: "0",
                transform: "translate(-40%,-40%)",
              }}
            >
              <div className="ml-4 mt-[-8px] hidden md:block text-green-700 px-3 py-1 text-lg font-bold whitespace-nowrap">
                Collect recyclable waste
              </div>
            </div>
            {/* Annotation: 135° (bottom-right) */}
            <div
              className="absolute"
              style={{
                left: "100%",
                bottom: "0",
                transform: "translate(-40%,40%)",
              }}
            >
              <div className="ml-4 mb-[-8px] hidden md:block text-green-700 px-3 py-1 text-lg font-bold whitespace-nowrap">
                Sort & process materials
              </div>
            </div>
            {/* Annotation: 225° (bottom-left) */}
            <div
              className="absolute"
              style={{
                right: "100%",
                bottom: "0",
                transform: "translate(40%,40%)",
              }}
            >
              <div className="mr-4 mb-[-8px] hidden md:block text-green-700 px-3 py-1 text-lg font-bold whitespace-nowrap">
                Manufacture new products
              </div>
            </div>
            {/* Annotation: 315° (top-left) */}
            <div
              className="absolute"
              style={{
                right: "100%",
                top: "0",
                transform: "translate(40%,-40%)",
              }}
            >
              <div className="mr-4 mt-[-8px] hidden md:block text-green-700 px-3 py-1 text-lg font-bold whitespace-nowrap">
                Reduce landfill waste
              </div>
            </div>
          </div>
          <p className="mt-4 text-green-800 font-semibold text-center max-w-xl mx-auto">
            By participating, you help close the loop—creating a cleaner,
            greener future for everyone!
          </p>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-center">
          <h2 className="col-span-1 md:col-span-3 text-2xl font-bold mb-6 text-green-700">
            Why Choose Scrap Savvy?
          </h2>
          <div className="bg-white p-4 rounded md:border-r-2">
            <h3 className="text-xl font-semibold mb-2">♻️ Recyclable Waste</h3>
            <p>Paper, Plastic, Metal, E-waste and more.</p>
          </div>
          <div className="bg-white p-4 rounded md:border-r-2">
            <h3 className="text-xl font-semibold mb-2">🚛 Doorstep Pickup</h3>
            <p>Convenient pickups right from your home.</p>
          </div>
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">💰 Instant Payments</h3>
            <p>Get paid on the spot after collection.</p>
          </div>
        </section>

        {/* Price List */}
        {/*  <section id="prices" className="p-6">
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
                  <td className="p-2 border">Books, Newspaper</td>
                  <td className="p-2 border">₹12-₹15</td>
                </tr>
                <tr>
                  <td className="p-2 border">Cardboard</td>
                  <td className="p-2 border">Boxes, Carton</td>
                  <td className="p-2 border">₹12</td>
                </tr>
                <tr>
                  <td className="p-2 border">Plastic</td>
                  <td className="p-2 border">Bottles, Containers</td>
                  <td className="p-2 border">₹8</td>
                </tr>
                <tr>
                  <td className="p-2 border">Metal</td>
                  <td className="p-2 border">Aluminium</td>
                  <td className="p-2 border">₹105</td>
                </tr>
                <tr>
                  <td className="p-2 border">Metal</td>
                  <td className="p-2 border">Brass</td>
                  <td className="p-2 border">₹305</td>
                </tr>
                <tr>
                  <td className="p-2 border">Metal</td>
                  <td className="p-2 border">Copper</td>
                  <td className="p-2 border">₹425</td>
                </tr>
                <tr>
                  <td className="p-2 border">Metal</td>
                  <td className="p-2 border">Iron</td>
                  <td className="p-2 border">₹25</td>
                </tr>
                <tr>
                  <td className="p-2 border">Utensils</td>
                  <td className="p-2 border">Steel Utensils</td>
                  <td className="p-2 border">₹40</td>
                </tr>
                <tr>
                  <td className="p-2 border">E-Waste</td>
                  <td className="p-2 border">Mobiles, Laptops</td>
                  <td className="p-2 border">On Request</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}
        <PriceList />

        {/* How It Works */}
        <section id="how" className="bg-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Choose Waste Type",
              "Schedule Pickup",
              "We Pick It Up",
              "Get Paid Instantly",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded text-center"
              >
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
            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full border p-2 rounded"
                value={form.name}
                onChange={handleInput}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
                onChange={handleInput}
                value={form.phone}
                required
              />
              <input
                type="text"
                placeholder="Waste Type"
                name="waste"
                className="w-full border p-2 rounded"
                value={form.waste}
                onChange={handleInput}
                required
              />
              <textarea
                name="message"
                placeholder="Message or Preferred Time"
                className="w-full border p-2 rounded"
                value={form.message}
                onChange={handleInput}
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto"
              >
                Submit
              </button>
            </form>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Phone size={18} /> +91-9726312867
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> scrapsavvy19@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Ahmedabad, Gujarat
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919726312867?text=Hi"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-center mt-10">
        <p>
          © 2025 Scrap Savvy, Ahmedabad | Reduce. Reuse. Recycle. Get Rewarded.
        </p>
      </footer>
    </div>
  );
}
