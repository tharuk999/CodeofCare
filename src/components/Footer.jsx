export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12 mt-0 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline italic text-primary text-lg">Future Code of Care</span>
          <p className="font-body text-sm tracking-wide leading-relaxed text-primary/50 text-center md:text-left">
            © 2026 Future Code of Care. Cultivating Digital Landscapes.
          </p>
        </div>
        <div className="flex gap-8 md:gap-12">
          {['Privacy Policy', 'Ethical Code', 'Contact'].map((label) => (
            <a
              key={label}
              href="#"
              className="font-body text-sm tracking-wide text-primary/50 hover:text-secondary transition-all underline-offset-4 hover:underline decoration-secondary/30"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
