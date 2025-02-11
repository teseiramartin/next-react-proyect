'use client'; // Necesario si estás usando componentes interactivos en Next.js 13+

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
        <li>
          <Link href="/products">Productos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;