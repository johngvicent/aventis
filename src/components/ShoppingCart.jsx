// src/components/ShoppingCart.jsx
import React from 'react';

// Ahora acepta itemCount, addItem y removeItem como props
const ShoppingCart = ({ itemCount, addItem, removeItem }) => {

  return (
    <div className="flex items-center gap-2">
      {/* Ícono del carrito */}
      <div className="relative cursor-pointer">
        <svg 
          className="w-8 h-8 text-[#e7e7e7] hover:text-[#B78B1E] transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        
        {/* Contador de artículos */}
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#B78B1E] rounded-full">
            {itemCount}
          </span>
        )}
      </div>

      {/* Botones de acción - solo visibles en pantallas grandes */}
      <div className="hidden lg:flex items-center gap-2">
        <button 
          onClick={removeItem}
          className="bg-red-500/90 hover:bg-red-600 text-white font-bold w-6 h-6 rounded-full transition duration-150 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          disabled={itemCount === 0}
          aria-label="Quitar artículo"
        >
          −
        </button>
        <span className="text-[#e7e7e7] font-semibold text-sm min-w-[2rem] text-center">{itemCount}</span>
        <button 
          onClick={addItem}
          className="bg-green-500/90 hover:bg-green-600 text-white font-bold w-6 h-6 rounded-full transition duration-150 text-sm flex items-center justify-center"
          aria-label="Añadir artículo"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;