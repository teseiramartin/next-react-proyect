import './globals.css'; // Tus estilos globales
import {Navbar} from '../components'; // Ruta al componente de navegación

export const metadata = {
  title: 'Mi Sitio Web',
  description: 'Un sitio web con Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar /> {/* Aquí está tu barra de navegación */}
        <main>{children}</main> {/* Renderiza el contenido de cada página */}
      </body>
    </html>
  );
}
