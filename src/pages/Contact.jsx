import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4">
            <h3 className="text-lg font-bold">Request a Demo</h3>
            <p className="text-gray-300 text-sm">
              Tell us what you’re building
            </p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <input
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2
              focus:border-gray-900 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2
              focus:border-gray-900 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2
              focus:border-gray-900 outline-none"
            />

            <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black">
              Submit
            </button>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4">
            <h3 className="text-lg font-bold">Get in Touch</h3>
            <p className="text-gray-300 text-sm">We reply within 24 hours</p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5 text-gray-700">
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-gray-900 text-2xl" />
              contact@yourcompany.com
            </div>

            <div className="flex items-center">
              <FaPhone className="mr-3 text-gray-900 text-2xl" />
              +1 234 567 890
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-gray-900 text-2xl" />
              Remote · Global
            </div>

            <div className="pt-4 flex space-x-4">
              <FaLinkedin className="text-gray-900 text-2xl cursor-pointer" />
              <FaTwitter className="text-gray-900 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
