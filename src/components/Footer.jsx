import { SOCIAL_LINKS } from "@/contants";

export default function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-10">
      {/* Subscribe and Social Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Subscribe Section */}
        <div className="mb-6 md:mb-0 md:w-2/3 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className="flex justify-center md:justify-start items-center">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="px-4 py-2 w-full max-w-md text-gray-800 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-r-md hover:bg-gray-200">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold mb-4">CONNECT WITH US</h2>
          <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={`${social.name} icon`} className="h-6 w-6 hover:opacity-80" />
                </a>
              ))}
            </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-center md:text-left">
        <div>
          <h3 className="font-semibold mb-4">Top Brands</h3>
          <ul className="space-y-2">
            <li>Moon Skin</li>
            <li>Bye Bye Skin</li>
            <li>Miracle</li>
            <li>New Generation</li>
            <li>Arabian Princes Secret</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li>Beauty Lines</li>
            <li>Capsules</li>
            <li>Sprays</li>
            <li>Powders</li>
            <li>Syrups</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Payment</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>About Us</li>
          </ul>
          <h3 className="font-semibold mt-6 mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Terms and Conditions</li>
            <li>Privacy & Cookies Policy</li>
            <li>Price Match</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Shipping & Returns</h3>
          <ul className="space-y-2">
            <li>Shipping & Delivery</li>
            <li>Online Returns</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="container mx-auto text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p>
              Contact Customer Care:{" "}
              <a href="mailto:info@madamar.ae" className="underline">
                info@madamar.ae
              </a>
            </p>
            <p>WhatsApp Customer Care: +971 55 555 5555</p>
          </div>
          <div className="text-center">
            <p>
              All Copyright Reserved madamar | Developed By:{" "}
              <span className="font-semibold">No9ine</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}