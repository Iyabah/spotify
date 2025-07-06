'use client'
import { RotatingLines } from 'react-loader-spinner'
export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" style={{backdropFilter: 'blur(8px)'}}>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-full max-w-xs">
                    <div className="glass-card p-4 scale-in">
                        <div className="text-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                                <RotatingLines
                                    visible={true}
                                    height="48"
                                    width="48"
                                    color="grey"
                                    strokeWidth="5"
                                    animationDuration="2"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </div>
                            <h1 className="text-2xl font-bold text-gradient mb-1">Loading...</h1>
                            <p className="text-white/70 text-sm">Please wait while we prepare your experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}