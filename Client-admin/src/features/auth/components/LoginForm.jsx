import React from 'react'
 
export const LoginForm = () => {
  return (
    <form action="" className="space-y-5">
      <div>
        <label htmlFor="emailOrUsername"
        className="block text-sm font-medium text-gray-800 mb-1.5"
        >
            Email o Usuario
        </label>
 
        <input
        id="emailOrUsername"
        type="text"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="correo@ejemplo-com o usuario"
        autoComplete="username"
        />
      </div>
      <div>
        <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800 mb-1.5"
        >
            Contraseña
        </label>
 
        <input
            id="password"
            type="password"
            placeholder="......."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            autoComplete="current-password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--main-blue)] hover:opacity-90 text-white font medium py-2.5 px-4 rounded-lg
                    transition-colors duration-200 text-sm disabled:opacity-50"
        >
          Iniciar Sesión
      </button>
    </form>
  )
}