import React from 'react';
// @ts-ignore
import Logo from './img/logo-on-white-bg.png'
// @ts-ignore
import Beach from './img/BeachCrop.jpg'

//10:50

function App() {
  return (
      <body className="sm:bg-amber-500 bg-gray-100">
      <div className="grid grid-cols-2">
      <div className="max-w-md mx-auto sm:max-w-sm">
          <div className="px-6 py-12">
              <img className="h-12" src={Logo} alt="logo"/>
              <img className="mt-6 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={Beach} alt="beach"/>
          </div>
          <h1 className="mt-3 ml-6 text-3xl font-bold text-gray-900">
              You can work from anywhere. <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 ml-6 text-gray-600">
              Workcation helps you find work-friendly rentals in beautiful location so enjoy some nice weather even when you're not on vacation.
          </p>
          <div className="mb-3">
              <a href="###" className="inline-block shadow-lg text-white uppercase tracking-wider font-semibold text-sm bg-indigo-500 px-5 py-3 ml-6 mt-2 rounded-lg">Book your escape</a>
          </div>
      </div>
      <img className="hidden lg:inline-block" src={Beach} alt="beach"/>
      </div>
      </body>
  );
}

export default App;
