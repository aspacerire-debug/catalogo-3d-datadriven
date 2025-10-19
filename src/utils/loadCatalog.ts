import Papa from 'papaparse';

export type CatalogItem = {
  id: string;
  type: 'cover'|'product'|'info'|'back';
  order?: number;
  title?: string;
  subtitle?: string;
  category?: string;
  price?: string;
  features?: string;
  media_type?: 'model3d'|'image'|'video';
  media_url?: string;
  rotation?: [number,number,number];
  zoom?: number;
  link?: string;
  body?: string;
};

export async function loadCatalog(sheetUrl:string) {
  const res = await fetch(sheetUrl);
  const csv = await res.text();
  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
  const rows:any[] = parsed.data as any[];
  return rows.map((r,i)=>({
    id: r.id || String(i+1),
    type: (r.type||'product').toLowerCase(),
    order: r.order ? Number(r.order) : i+1,
    title: r.title, subtitle: r.subtitle, category: r.category,
    price: r.price, features: r.features,
    media_type: (r.media_type||'model3d').toLowerCase(),
    media_url: r.media_url,
    rotation: r.rotation ? (r.rotation.split('|').map(Number) as [number,number,number]) : [0,0,0],
    zoom: r.zoom ? Number(r.zoom) : 1,
    link: r.link, body: r.body
  }));
}
