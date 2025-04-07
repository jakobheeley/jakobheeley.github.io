export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
        <div className="flex justify-center gap-8 p-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
    );
  }
  