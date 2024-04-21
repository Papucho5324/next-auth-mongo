import React from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';



const Info = () => {
  return (
    <div >
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-#6374ae">Informacion de la cuenta.</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-#e7f0f8">Detalles acerca de tus servicios.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-#6374ae">Nombre completo.</dt>
            <dd className="mt-1 text-sm leading-6 text-#e7f0f8 sm:col-span-2 sm:mt-0">David Wallmach</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-#6374ae">Tipo de cuenta.</dt>
            <dd className="mt-1 text-sm leading-6 text-#e7f0f8 sm:col-span-2 sm:mt-0">Paquete popular.</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-#6374ae">Correo electronico.</dt>
            <dd className="mt-1 text-sm leading-6 text-#e7f0f8 sm:col-span-2 sm:mt-0">david_wallmach@gmail.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-#6374ae">Por pagar</dt>
            <dd className="mt-1 text-sm leading-6 text-#e7f0f8 sm:col-span-2 sm:mt-0">$450</dd>
          </div>
          
        </dl>
      </div>
    </div>
  )
}

export default Info