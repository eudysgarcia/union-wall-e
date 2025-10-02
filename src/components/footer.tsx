import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-900">Política de Privacidad</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Términos de Servicio</a>
            </li>
          </ul>

          <div className="flex items-center justify-start sm:justify-end gap-5 text-gray-500">
            <a aria-label="Twitter" href="#" className="hover:text-gray-900">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a aria-label="Facebook" href="#" className="hover:text-gray-900">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a aria-label="Instagram" href="#" className="hover:text-gray-900">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          © 2025 XEYA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
