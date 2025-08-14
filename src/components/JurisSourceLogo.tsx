import React from 'react';

interface JurisSourceLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const JurisSourceLogo: React.FC<JurisSourceLogoProps> = ({ 
  width = 150, 
  height = 40, 
  className = "" 
}) => {
  return (
    <img
      src="/images/jurice-source-LOGO.png"
      alt="Juris Source"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default JurisSourceLogo;