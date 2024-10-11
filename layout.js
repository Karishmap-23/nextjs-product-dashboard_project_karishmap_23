// app/layout.js
"use client";
import React from 'react';
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
