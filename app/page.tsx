import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Work } from '@/components/sections/Work';
import { Skills } from '@/components/sections/Skills';
import { Hobbies } from '@/components/sections/Hobbies';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/ui/Footer';

/**
 * Section ordering — NEW:
 *   01 Hero       — landing
 *   02 About      — note
 *   03 Experience — Lineage (moved BEFORE Work per Mai Linh's request)
 *   04 Work       — projects
 *   05 Skills     — renamed from Tools
 *   06 Hobbies    — off-hours (new section)
 *   07 Contact    — close
 *
 * Philosophy section removed — its content now lives in About.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
