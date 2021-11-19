import React, { ReactChild } from "react";

const DefatultArticle = ({ children }: { children: ReactChild }) => {
  return <div className="templateArticle">{children}</div>;
};

export default DefatultArticle;
