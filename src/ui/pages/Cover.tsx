import React from 'react';
export default function Cover({ data }:{data:any}){
  return (
    <div className="h-full w-full relative grid place-items-center bg-gradient-to-b from-white to-neutral-100">
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold">{data.title||'Portada'}</h1>
        {data.subtitle && <p className="opacity-80 mt-2">{data.subtitle}</p>}
      </div>
    </div>
  );
}
