import React, { useEffect, useRef } from "react";

const sizeClasses = {
  txtSourceSansProBold200: "font-bold font-sourcesanspro",
  txtSourceSansProBold167: "font-bold font-sourcesanspro",
  txtInterBold40: "font-bold font-inter",
  txtSourceSansProSemiBold20: "font-semibold font-sourcesanspro",
  txtInterSemiBold20Gray600a0: "font-inter font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtSourceSansProSemiBold24: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold24Lightblue800: "font-semibold font-sourcesanspro",
  txtInterBold24: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const LetterLast = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const text = containerRef.current.textContent.trim();
    const lastLetter = text.charAt(text.length - 1);

    containerRef.current.textContent = text.slice(0, -1);

    // Создаем span для последней буквы и добавляем стили
    const lastLetterSpan = document.createElement('span');
    lastLetterSpan.textContent = lastLetter;
    lastLetterSpan.style.letterSpacing = 0; // Задайте нужные стили

    // Добавляем span в конец контейнера
    containerRef.current.appendChild(lastLetterSpan);
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
};


export { Text };
export { LetterLast };
