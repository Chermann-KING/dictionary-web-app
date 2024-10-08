import React from "react";
import NewWindowIcon from "@/images/icon-new-window.svg";
import Link from "next/link";

interface SourceLinkProps {
  sourceUrls: string[];
  license: { name: string; url: string };
}

const SourceLink: React.FC<SourceLinkProps> = ({ sourceUrls }) => {
  return (
    <div className="mt-6 flex text-sm text-gray-600">
      <p className="underline mr-3 text-light-1">Source:</p>
      {sourceUrls.map((url, index) => (
        <div key={index} className="">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 underline flex items-center text-dark-3 dark:text-light-4 gap-2"
          >
            {url}
            <NewWindowIcon aria-hidden="true" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SourceLink;
