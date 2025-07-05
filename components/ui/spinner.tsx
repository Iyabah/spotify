import React from 'react';

export function Spinner({ className = '', size = 'default' }: { 
  className?: string; 
  size?: 'sm' | 'default' | 'lg' | 'xl';
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const borderWidth = {
    sm: 'border-2',
    default: 'border-3',
    lg: 'border-4', 
    xl: 'border-4'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} ${borderWidth[size]} border-white/20 border-t-white rounded-full animate-spin`}></div>
        <div 
          className={`absolute inset-0 ${sizeClasses[size]} ${borderWidth[size]} border-transparent border-t-blue-500 rounded-full animate-spin`} 
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
        ></div>
      </div>
    </div>
  );
}