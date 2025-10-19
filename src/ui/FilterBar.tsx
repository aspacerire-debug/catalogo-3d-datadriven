import React from 'react';
export function FilterBar({ categories, category, onCategory, query, onQuery }:
  { categories:string[]; category:string; onCategory:(v:string)=>void; query:string; onQuery:(v:string)=>void }){
  return (
    <div className="flex items-center gap-2">
      <select value={category} onChange={e=>onCategory(e.target.value)} className="px-3 py-2 rounded-xl border border-black/10 bg-white shadow-sm">
        {categories.map(c=> <option key={c} value={c}>{c}</option>)}
      </select>
      <input value={query} onChange={e=>onQuery(e.target.value)} placeholder="Buscar…" className="px-3 py-2 rounded-xl border border-black/10 bg-white shadow-sm" />
    </div>
  );
}
