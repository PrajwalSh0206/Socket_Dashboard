function App() {
  return (
    <div className="h-auto w-screen flex flex-col">
      <div className="w-full h-1/6 bg-white shadow-sm border-b-2 flex items-center space-x-3 px-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <p className="text-xl">
          Live Dashboard
        </p>
      </div>
      <div className="h-5/6">
        <div className="w-3/12 bg-gray-100 flex flex-col border-r-2">

        </div>
        <div className="w-9/12 p-5 space-x-3 h-screen flex">
          <div className="w-1/3 h-64 shadow-md border-2">

          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
