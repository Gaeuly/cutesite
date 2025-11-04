const Footer = () => {
  return (  
    <footer className="text-sm text-gray-600 flex flex-col justify-center items-center bg-gray-200 py-3 border-t border-gray-300">
      <p>© {new Date().getFullYear()} Gaeuly. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
