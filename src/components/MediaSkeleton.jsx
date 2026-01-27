import React from 'react'

const MediaSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="bg-gray-200 rounded-lg overflow-hidden animate-pulse"
                >
                    <div className="w-full h-64 bg-gray-300"></div>
                    <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MediaSkeleton