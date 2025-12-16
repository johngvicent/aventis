// src/components/StoreContainer.jsx
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ShoppingCart from './ShoppingCart.jsx';

// Creamos un contexto global para que el script cliente pueda acceder a las funciones
export const CartContext = React.createContext();

const StoreContainer = ({ children }) => {
  const [cart, setCart] = useState({});
  const [headerElement, setHeaderElement] = useState(null);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    const savedCart = localStorage.getItem('carritoAventis');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error al cargar el carrito:', e);
      }
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('carritoAventis', JSON.stringify(cart));
    // Disparar evento personalizado para actualizar la UI
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
  }, [cart]);

  // Calcular total de items
  const itemCount = Object.values(cart).reduce((sum, item) => sum + item.cantidad, 0);

  // **Funciones para gestionar el carrito**
  const addItem = (producto) => {
    setCart(prev => {
      const existing = prev[producto.id];
      return {
        ...prev,
        [producto.id]: {
          ...producto,
          cantidad: existing ? existing.cantidad + 1 : 1
        }
      };
    });
  };

  const removeItem = (productoId) => {
    setCart(prev => {
      const existing = prev[productoId];
      if (!existing) return prev;
      
      if (existing.cantidad <= 1) {
        const { [productoId]: removed, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [productoId]: {
          ...existing,
          cantidad: existing.cantidad - 1
        }
      };
    });
  };

  const getProductQuantity = (productoId) => {
    return cart[productoId]?.cantidad || 0;
  };

  // **Exportamos las funciones al objeto `window`**
  // para que el script de Astro/HTML pueda llamarlas.
  useEffect(() => {
    window.addToCart = addItem;
    window.removeItem = removeItem;
    window.getProductQuantity = getProductQuantity;
    window.getCart = () => cart;
    return () => {
        delete window.addToCart;
        delete window.removeItem;
        delete window.getProductQuantity;
        delete window.getCart;
    };
  }, [cart, addItem, removeItem, getProductQuantity]); // Se actualiza cuando cambia el carrito

  // Buscar el header en el DOM para inyectar el carrito
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderElement(header);
    }
  }, []);

  return (
    <>
      {/* Renderiza el contenido hijo de Astro/HTML */}
      <CartContext.Provider value={{ itemCount, addItem, removeItem }}>
        {children}
      </CartContext.Provider>

      {/* Renderiza solo el ícono del Carrito dentro del header usando Portal */}
      {headerElement && createPortal(
        <a href="/carrito" className="ml-auto flex items-center z-1001 relative cursor-pointer group">
          <svg 
            className="w-8 h-8 text-[#e7e7e7] group-hover:text-[#B78B1E] transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#B78B1E] rounded-full">
              {itemCount}
            </span>
          )}
        </a>,
        headerElement
      )}
    </>
  );
};

export default StoreContainer;