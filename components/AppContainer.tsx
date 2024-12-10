import React from 'react'

export const AppContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-sparkify sm:pt-24 pt-20 bg-center">
      <div className="bg-white xl:mx-32 lg:mx-24 md:mx-16 sm:mx-10 mx-6 border-2 border-b-0 border-black relative z-0">
        {children}
      </div>
    </div>
  )
}
