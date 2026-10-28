
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  { name: "Instagram", icon: faInstagram, href: "https://instagram.com/" },
  { name: "Facebook", icon: faFacebookF, href: "https://facebook.com/" },
  { name: "TikTok", icon: faTiktok, href: "https://tiktok.com/" },
  { name: "YouTube", icon: faYoutube, href: "https://youtube.com/" },
  { name: "Pinterest", icon: faPinterestP, href: "https://pinterest.com/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="/"
              className="text-3xl font-black tracking-[0.2em]"
            >
              ROVYN.
            </a>
            <p className="mt-2 text-xs tracking-wide text-gray-500">
              Less, but better.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-black hover:bg-black hover:text-white"
              >
                <FontAwesomeIcon icon={social.icon} className="text-base" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ROVYN. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="/products/tshirt" className="hover:text-black">
              Shop
            </a>
            <a href="/about" className="hover:text-black">
              About
            </a>
            <a href="/contact" className="hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
