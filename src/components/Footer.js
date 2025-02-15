export default function Footer() {
    return (
      <footer className="bg-black text-white  p-2">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 flex jus">
         
          <div>
            <h2 className="text-lg font-bold">Sathish Diaries</h2>
            <p className="text-sm mt-2">Freelance Full-Stack Developer & SEO Blogger. Building scalable web solutions.</p>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold">Connect with Me</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/yourusername" className="hover:text-gray-400">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">LinkedIn</a>
              <a href="https://twitter.com/yourusername" className="hover:text-gray-400">Twitter</a>
            </div>
            <p className="text-sm mt-3">📩 hello@sathishdiaries.com</p>
          </div>
        </div>
  
       
        <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Sathish Diaries. All rights reserved.
        </div>
      </footer>
    );
  }
  