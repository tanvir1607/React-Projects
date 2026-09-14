const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">DS</span>
              </div>

              <h2 className="text-lg font-semibold">
                <span className="text-gray-700">Dev</span>
                <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="text-sm text-gray-500 max-w-sm leading-6">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 mt-5">
              <a href="#" className="text-sm hover:text-pink-500">GitHub</a>
              <a href="#" className="text-sm hover:text-pink-500">Twitter</a>
              <a href="#" className="text-sm hover:text-pink-500">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-5">Product</h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-500">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-5">Company</h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-pink-500">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-5">Legal</h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-10 pt-7">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5 text-xs text-gray-400">
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;