import React, { useEffect, useState } from "react";
import "./header.scss";
import logo from "../../assets/icons/logo.svg";
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import HeaderSearchModal from "./HeaderSearchModal";
import axios from "../../api";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const Header = () => {
  const [showList, setShowlist] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setlodaing] = useState(false);

  useEffect(() => {
    if (!value.trim()) return;
    setlodaing(true);
    axios
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setlodaing(false));
  }, [value]);

  return (
    <header className="header">
      <nav>
        <div className="container header__container">
          {/* list */}
          <ul
            className={
              showList ? "header__list header__show-list" : "header__list"
            }
          >
            <li className="header__item">
              <NavLink to={"/"} className="header__link">
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/shop"} className="header__link">
                Shop All
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/blog"} className="header__link">
                Blog
              </NavLink>
            </li>
            <li className="header__item header__hide-item">
              <NavLink to={"/about"} className="header__link">
                About Us
              </NavLink>
            </li>
            <li className="header__list-close">
              <button onClick={() => setShowlist(false)}>
                <IoMdClose />
              </button>
            </li>
          </ul>
          {/* logo */}
          <div>
            <a href="#" className="header__logo">
              <img src={logo} alt="logo img" />
            </a>
          </div>
          {/* btns */}
          <div className="header__btns">
            <NavLink to={"/about"} className="header__link header__hide-link">
              About Us
            </NavLink>
            <form action="">
              <div className="header__search">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  className="header__search-input"
                  placeholder="Search Product"
                />
                <button className="header__search-btn">
                  <IoSearchOutline />
                </button>
                {value.trim() ? (
                  <HeaderSearchModal data={data} loading={loading} />
                ) : (
                  <></>
                )}
              </div>
            </form>
            <button
              className="header__bar-btn"
              onClick={() => setShowlist(true)}
            >
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
