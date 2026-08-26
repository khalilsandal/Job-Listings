import React, { Children } from 'react';
import {Button} from './Button.jsx';

export const HomeCard = ({children, title, subtitle, ...props}) => {
  return (
    <div {...props}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">
            {subtitle}
        </p>
       {children}
        
    </div>
  )
}
