export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <img 
          src="/tikva.svg" 
          alt="Tikva Logo" 
          className="w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-16 opacity-85 hover:opacity-100 transition-all duration-500"
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
          <a href="mailto:info@tikva.ai" className="text-inherit no-underline" style={{ color: 'inherit', textDecoration: 'none' }}>info@tikva.ai</a>
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