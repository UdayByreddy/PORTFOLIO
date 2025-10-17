import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

export default function ContactForm({
  formData,
  handleChange,
  handleSubmit,
  submitStatus,
  isSubmitting,
}: {
  formData: any;
  handleChange: any;
  handleSubmit: any;
  submitStatus: any;
  isSubmitting: boolean;
}) {
  return (
    <div
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8"
      style={{ animation: "fadeInUp 0.5s ease-out" }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <FaPaperPlane className="text-blue-400" />
        Send a Message
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
            <FaUser className="text-blue-400" /> Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
            <FaEnvelope className="text-purple-400" /> Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
            <FaCommentDots className="text-pink-400" /> Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
            <FaCommentDots className="text-blue-400" /> Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me about your project or just say hello..."
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
        </button>

        {submitStatus === "success" && (
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-300 text-center animate-fadeIn">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}
