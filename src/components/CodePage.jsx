import { useState } from "react";
import { Link } from "react-router-dom";

export default function CodePage({
  title,
  subtitle,
  accentColor,
  darkAccent,
  lightColor,
  icon,
  heroImage,
  paragraphs,
  principles,
  imageCaption,
  secondImage,
  pledge,
}) {
  const [pledged, setPledged] = useState(false);
  const [expanded, setExpanded] = useState(null);

  // darkAccent is used for text on light backgrounds — must be dark enough for contrast
  const textAccent = darkAccent || accentColor;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-page">

      {/* Breadcrumb */}
      <div className="stagger-1 mb-10">
        <Link
          to="/"
          className="text-xs tracking-[0.3em] uppercase text-[#8C7A5E] hover:text-[#5C4A2A] transition-colors inline-flex items-center gap-1"
        >
          ← All Codes
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12 stagger-2">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-1 self-stretch rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: accentColor, minHeight: "4rem" }}
          />
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium" style={{ color: textAccent }}>
              Code of Care
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-[#1C160E] leading-none mb-4">
              {icon} {title}
            </h1>
            <p className="text-lg text-[#5C4A2A] max-w-xl font-light italic leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Hero image */}
      {heroImage && (
        <div className="mb-14 stagger-3 relative overflow-hidden rounded-2xl aspect-[16/7] hero-shimmer shadow-lg">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${accentColor}55 0%, transparent 50%)` }}
          />
          {imageCaption && (
            <p className="absolute bottom-3 right-4 text-xs text-white/80 italic drop-shadow-md">{imageCaption}</p>
          )}
        </div>
      )}

      {/* Body paragraphs + side image */}
      <div className="grid md:grid-cols-5 gap-10 mb-16 items-start stagger-4">
        <div className="md:col-span-3 space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#2C1F10] leading-[1.85] text-base md:text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
        {secondImage && (
          <div className="md:col-span-2 stagger-5">
            <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-md">
              <img
                src={secondImage.src}
                alt={secondImage.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {secondImage.caption && (
              <p className="text-xs text-[#7A6A52] mt-3 italic text-center leading-relaxed">{secondImage.caption}</p>
            )}
          </div>
        )}
      </div>

      {/* Principles accordion */}
      {principles && (
        <div className="mb-16 stagger-5">
          <h2 className="font-display text-3xl text-[#1C160E] mb-8 tracking-tight">
            The Principles
          </h2>
          <div className="space-y-3">
            {principles.map((p, i) => (
              <div
                key={i}
                className="border rounded-xl overflow-hidden transition-colors duration-300"
                style={{
                  borderColor: expanded === i ? accentColor + "80" : "#D4C4A0",
                  backgroundColor: expanded === i ? lightColor : "#FDFAF4",
                }}
              >
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left cursor-pointer"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="font-medium text-[#1C160E] flex items-center gap-3 pr-4">
                    <span
                      className="text-xs font-mono w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      {i + 1}
                    </span>
                    {p.title}
                  </span>
                  <span
                    className="text-xl text-[#5C4A2A] flex-shrink-0 transition-transform duration-300 leading-none"
                    style={{ transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {expanded === i && (
                  <div className="accordion-body px-5 pb-5 text-[#3A2E1A] text-sm leading-relaxed border-t border-[#D4C4A0] pt-4 ml-14">
                    {p.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pledge section */}
      {pledge && (
        <div
          className="stagger-6 rounded-2xl p-8 md:p-12 text-center border"
          style={{
            backgroundColor: lightColor,
            borderColor: accentColor + "40",
          }}
        >
          <div
            className="w-12 h-0.5 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <p className="font-display text-xl md:text-2xl text-[#1C160E] mb-8 leading-snug max-w-xl mx-auto">
            "{pledge}"
          </p>
          {!pledged ? (
            <button
              onClick={() => setPledged(true)}
              className="px-8 py-3 rounded-full text-white text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              style={{ backgroundColor: accentColor }}
            >
              I commit to this
            </button>
          ) : (
            <div className="animate-scale-in flex items-center justify-center gap-3 text-[#3A2E1A]">
              <span className="text-2xl">🌿</span>
              <span className="font-medium tracking-wide text-sm">Commitment noted. Thank you.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
