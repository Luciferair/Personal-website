import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white pt-8 pb-3">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold hover:text-blue-400 transition duration-300">MEAN Stack Web Developer & Software Engineer</h1>
      </div>
    </header>
  );
};

const Home = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Service Website</h2>
        <p className=" text-white mb-4">We are MEAN stack web developers and software engineers dedicated to delivering high-quality solutions for your business.</p>
        <p className=" text-white mb-4">Contact us for custom web development, MEAN stack expertise, and software engineering services.</p>
        <p className=" text-white mb-4">Our team specializes in building robust and scalable web applications using the latest technologies. Whether you need a dynamic website, a complex web application, or software integration services, we have the expertise to deliver exceptional results.</p>
        <p className=" text-white mb-4">With a focus on innovation and quality, we strive to exceed our clients' expectations and deliver solutions that drive business growth. Our team is committed to staying updated with the latest industry trends and technologies to provide cutting-edge solutions.</p>
        <p className=" text-white mb-4">Get in touch with us today to discuss your project requirements and learn how we can help you achieve your business goals.</p>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: lucifer2006g@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rana-dolui-89357728a/" className="text-blue-300 hover:text-blue-400 underline transition duration-300">linkedin.com/in/Ranadolui</a></p>
          <p>GitHub: <a href="https://github.com/Luciferair" className="text-blue-300 hover:text-blue-400 underline transition duration-300">github.com/Luciferair</a></p>
        </section>
      </div>
    );
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>© 2024 Rana Dolui</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Luciferair" className="text-gray-300 hover:text-white transition duration-300">
            <img src="/github.png" alt="GitHub" className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/rana-dolui-89357728a/" className="text-gray-300 hover:text-white transition duration-300">
            <img src="/linked.png" alt="LinkedIn" className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61559049893984" className="text-gray-300 hover:text-white transition duration-300">
            <img src="/facebook.png" alt="Facebook" className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/Ranad187" className="text-gray-300 hover:text-white transition duration-300">
            <img src="/twitter.png" alt="Twitter" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const Service = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Service;
