import React, { useEffect, useMemo, useState } from 'react';
import { CONFIG } from '../config';
import { loadCatalog, CatalogItem } from '../utils/loadCatalog';
import Book from './Book';
import { FilterBar } from './FilterBar';

export default function App(){
  const [items,setItems]=useState<CatalogItem[]>([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState<string>('Todas');
  const [query,setQuery]=useState<string>('');

  useEffect(()=>{
    loadCatalog(CONFIG.sheetUrl).then(data=>{ setItems(data); setLoading(false); }).catch(()=>setLoading(false));
  },[]);

  const categories = useMemo(()=>['Todas',...Array.from(new Set(items.map(i=>i.category).filter(Boolean)))], [items]);

  const pages = useMemo(()=>{
    const filtered = items.filter(i=>(category==='Todas'||i.category===category) &&
      (query.trim()==='' || (i.title?.toLowerCase()||'').includes(query.toLowerCase())));
    return filtered.sort((a,b)=> (a.order??999)-(b.order??999) || (a.title||'').localeCompare(b.title||''));
  },[items, category, query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-200">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={CONFIG.brandLogo} className="h-8 w-8 rounded-xl" alt="logo"/>
            <span className="font-semibold">{CONFIG.brandName}</span>
          </div>
          <FilterBar categories={categories} category={category} onCategory={setCategory} query={query} onQuery={setQuery} />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Catálogo 3D (Plantilla editable sin código)</h1>
        {loading ? <div className="p-6 rounded-2xl bg-white border border-black/5 shadow">Cargando datos…</div>
        : <Book pages={pages} />}
        <p className="text-sm opacity-70 mt-8">Edita el catálogo desde una <b>Hoja de cálculo</b> (Google Sheets / CSV). Cambia textos, categorías, enlaces, y URLs de modelos 3D o imágenes sin tocar código.</p>
      </main>
    </div>
  );
}
