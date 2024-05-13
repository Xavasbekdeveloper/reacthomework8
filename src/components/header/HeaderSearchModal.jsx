import React from "react";
import { memo } from "react";

const HeaderSearchModal = ({ data, loading }) => {
  let searchItem = data?.map((item) => (
    <div key={item.id} className="header__search__bottom-box">
      <img src={item.images[0]} width={40} alt={item.title} />
      <span>{item.title}</span>
    </div>
  ));
  return (
    <div className="header__search__bottom">
      {loading ? <div className="loader"></div> : <></>}

      {!data?.length && !loading ? <h3>Ma'lumot topilmadi</h3> : <></>}
      {searchItem}
    </div>
  );
};

export default memo(HeaderSearchModal);
