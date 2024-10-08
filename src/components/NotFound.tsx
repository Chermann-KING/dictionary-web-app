import React from "react";

interface NotFoundProps {
  title: string;
  message: string;
  resolution: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title, message, resolution }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 mt-[80px] ">
      <span className="text-heading-l">😕</span>
      <h3 className="text-heading-s font-bold text-dark-3 dark:text-light-4">
        {title}
      </h3>
      {/* Affichage pour le mode clair */}
      <span className="dark:hidden text-body-m text-light-1">✖</span>
      {/* Affichage pour le mode sombre */}
      <p className="hidden dark:block text-body-m text-light-1">
        {message} {resolution}
      </p>
    </div>
  );
};

export default NotFound;
