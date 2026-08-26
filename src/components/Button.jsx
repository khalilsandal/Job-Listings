import React from 'react'

export const Button = ({url, buttonText, className, ...props}) => {
  return (
    <a
        href={url}
        className={`inline-block rounded-lg px-4 py-2 ${className || ""}`}
        {...props}
    >
       {buttonText}
    </a>
  )
}
