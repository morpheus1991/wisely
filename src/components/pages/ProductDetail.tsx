import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import TemplateBasic from "../templates/TemplateBasic";
import qs from "qs";
import ShavingGelProductDetail from "./ShavingGelProductDetail";
type Props = RouteComponentProps;
const ProductDetail: React.FC<Props> = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //문자열 맨 앞의 ? 생략
  });
  console.log(location);
  const showPage = query.query === "page2";
  return (
    <div>
      <TemplateBasic>
        <div>
          <Link to="/product-detail?query=page2">시작하기</Link>
          {showPage ? (
            <ShavingGelProductDetail></ShavingGelProductDetail>
          ) : null}
        </div>
      </TemplateBasic>
    </div>
  );
};

export default ProductDetail;
