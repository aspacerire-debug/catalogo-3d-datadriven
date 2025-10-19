// src/ui/Book.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Page from './pages/Page';
import Cover from './pages/Cover';
import Product from './pages/Product';
import Info from './pages/Info';

type PageData = {
  type: 'cover' | 'product' | 'info';
  // puedes incluir otras props según tu estructura
  [key: string]: any;
};

export default function Book({ pages }: { pages: PageData[] }) {
  const [i, setI] = useState(0);

  const canPrev = i > 0;
  const canNext = i < pages.length - 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ width: 480, margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ rotateX: 10, y: 40, opacity: 0 }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            exit={{ rotateX: -10, y: -40, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Page>
              {pages[i]?.type === 'cover' && <Cover {...pages[i]} />}
              {pages[i]?.type === 'product' && <Product data={pages[i]} />}
              {pages[i]?.type === 'info' && <Info {...pages[i]} />}

              {!pages[i] && <div style={{ padding: 24 }}>Sin datos</div>}
            </Page>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button disabled={!canPrev} onClick={() => setI((n) => Math.max(0, n - 1))}>
          ◀ Anterior
        </button>
        <button disabled={!canNext} onClick={() => setI((n) => Math.min(pages.length - 1, n + 1))}>
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}

