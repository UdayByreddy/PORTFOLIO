import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInformation from '../../components/ContactInformation/ContactInformation';
import QuickStats from '../../components/QuickStats/QuickStats';
import emailjs from "emailjs-com";
import { EMAIL_JS } from '../../Config';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e:any) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    alert("Please fill in all fields");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  setIsSubmitting(true);

  try {
      await emailjs.send(
      EMAIL_JS.SERVICE_ID,
      EMAIL_JS.TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      EMAIL_JS.PUBLIC_KEY
    );

    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
   setSubmitStatus("error");
    alert("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "udaykiranbyreddy@gmail.com",
      link: "mailto:udaykiranbyreddy@gmail.com",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91-9550790010",
      link: "tel:+919550790010",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Bangalore, India",
      link: "#",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="text-2xl" />,
      name: "LinkedIn",
      handle: "Connect with me",
      link: "https://www.linkedin.com/in/uday-kiran-byreddy-38ba38206/",
      gradient: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      handle: "Check out my code",
      link: "https://github.com/UdayByreddy",
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:shadow-gray-500/50"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          top: '10%',
          left: '10%',
          animation: 'blob 7s infinite'
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          top: '50%',
          right: '10%',
          animation: 'blob 7s infinite 2s'
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          bottom: '10%',
          left: '30%',
          animation: 'blob 7s infinite 4s'
        }}
      ></div>

      {/* Floating cursor glow effect */}
      <div 
        className="pointer-events-none fixed w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-12">
        <div className={`max-w-7xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header */}
          <ContactHeader />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Contact Form */}
           <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              submitStatus={submitStatus}
              isSubmitting={isSubmitting}
            />

            {/* Contact Information */}
            <ContactInformation contactInfo={contactInfo} socialLinks={socialLinks} />
          </div>

          {/* Quick Stats */}
          <QuickStats />

        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}