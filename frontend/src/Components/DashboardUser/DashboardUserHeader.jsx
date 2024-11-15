import React from 'react'

const DashboardUserHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly border border-t-0 rounded-lg transition duration-400 hover:bg-white hover:shadow-lg">
            <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">Image</p>
            <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">Name</p>
            <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">Email</p>
            <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">Verify</p>
            <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">Created</p>
            <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">Role</p>
          </div>
  )
}

export default DashboardUserHeader