export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <img 
          src="/tikva.svg" 
          alt="Tikva Logo" 
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto mb-16 opacity-85 hover:opacity-100 transition-opacity duration-500"
        />
<p 
          className="text-sm sm:text-base text-gray-500 tracking-[0.3em]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300
          }}
        >
          Coming Soon
        </p>
        <p 
          className="text-sm sm:text-base text-gray-500 tracking-[0.3em]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300
          }}
        >
          info@tikva.ai
        </p>
        <div className="flex items-center justify-center mt-12 space-x-3">
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
      </div>
    </main>
  );
}