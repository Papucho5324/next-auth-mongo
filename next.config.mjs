/** @type {import('next').NextConfig} */
const nextConfig = {
    // Aquí puedes agregar la configuración de Next.js si es necesario
  };
  
  module.exports = {
    ...nextConfig,
    env: {
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    }
  };
  