import React from 'react';
export default function Info({ data }:{data:any}){
  return (
    <div className="h-full w-full p-6">
      <h3 className="text-2xl font-semibold">{data.title||'Sección'}</h3>
      {data.subtitle && <p className="opacity-80 mt-2">{data.subtitle}</p>}
      {data.body && <p className="mt-4">{data.body}</p>}
    </div>
  );
}
