import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-8">I&apos;m always open to new opportunities and collaborations. Feel free to reach out!</p>
        <Link href="mailto:your.email@example.com" className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300">
          Contact Me
        </Link>
      </div>
    </section>
  );
}