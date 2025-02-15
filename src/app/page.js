import Image from "next/image";

export const metadata = {
  title: "Freelance Web Developer & Blogger | Sathish Diaries",
  description: "I’m a full-stack developer specializing in Python, MERN, Node.js, and Next.js. I provide high-quality web development and SEO-friendly blogging services to help businesses grow online.",
  keywords: "freelance web developer, full-stack developer, MERN stack,MERN stack developer, Python developer, Next.js SEO, blogging for money, hire a developer, web development services, SEO blogging, freelance coding",
  author: "Sathish",
  openGraph: {
    title: "Freelance Web Developer & Blogger | Sathish Diaries",
    description: "Expert in full-stack development (MERN, Python, Node.js) and SEO-friendly blogging. Let's build something amazing together!",
    url: "https://sathishdiaries.vercel.app/",
    siteName: "Sathish Diaries",
    type: "website",
    images: [
      {
        url: "https://sathishdiaries.vercel.app/your-image.jpg", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "Sathish Diaries - Freelance Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer & Blogger | Sathish Diaries",
    description: "Need a high-quality website or SEO-optimized blog? I’m a full-stack developer & blogger ready to help!",
    images: ["https://sathishdiaries.vercel.app/your-image.jpg"], // Replace with your actual image
  },
};

export default function Home() {
  return (
    <div className=" ml-10">
 <div className="w-3/4  my-6 ">
 <h1 className="text-3xl py-2 ">Freelance Web Developer & SEO Blogger</h1>
  <div className="ml-2 ">
    <p className=" text-zinc-500 py-2">Need a high-performance website or an SEO-optimized blog? I specialize in full-stack web development using MERN, Python, and Next.js.</p>
    <a className=" hover:bg-stone-600 hover:text-slate-100 p-2 border-2 border-stone-600 transition duration-100 " href="/contact" >Hire Me</a>
  </div>
    
 </div>
  <div id="about" className="my-6 w-3/4">
    <h2 className="text-2xl">About Me</h2>
    <p className="ml-2  text-zinc-500 pt-2">Hi, I'm Sathish Kumar – a passionate full-stack web developer and blogger. I build high-speed, SEO-friendly websites using Next.js, MERN, and Python
    With experience in performance optimization, content creation, and scalable web applications, I help businesses succeed online.
    </p>
   
  </div>

  <div id='services' className="my-6 w-3/4">
  <h2 className="text-xl py-2">What I Do</h2>
    <ul className="py-2 ml-2">
      <li  className="py-2 text-zinc-500 ">🚀 <strong>Custom Web Development</strong> (Next.js, MERN, Python)</li>
      <li  className="py-2 text-zinc-500 ">📈 <strong>SEO-Optimized Blogging</strong> & Content Writing</li>
      <li  className="py-2 text-zinc-500 ">🛍 <strong>E-commerce & Business Website Development</strong></li>
      <li  className="py-2 text-zinc-500 ">⚡ <strong>Performance Optimization & SEO Setup</strong></li>
    </ul>
    <a href="/contact" className="ml-2 hover:bg-stone-600 hover:text-slate-100 p-2 border-2 border-stone-600 transition duration-100 ">Let's Work Together</a>
  </div>
  
   <div className="w-3/4 my-6">
    <h2 className="text-xl">My Blog</h2>
      <div className="ml-2 py-2">
      <p className="text-zinc-500 py-2">Learn web development, freelancing, and SEO strategies to grow online.</p>
      <a className="text-sky-700 font-bold " href="/blog">Read My Blog</a>
      </div>
   </div>

   <div className="my-6">
   <h2 className="text-xl">Contact Me</h2>
   <div className="m-2">
   <p className="text-zinc-500 py-2">Need a website or blog? Let’s discuss your project!</p>
   <a href="/contact" className="mt-2">Get in Touch</a>
   </div>
   </div>

    </div>
   
  );
}
