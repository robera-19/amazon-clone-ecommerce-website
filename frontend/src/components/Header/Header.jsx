import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

import { SlLocationPin } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/*ECOMMERCE LOGO */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://i.pinimg.com/1200x/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.jpg"
                alt="ecommerce logo"
              />
            </Link>
            {/*Delivery */}
            <div className={classes.delivery}>
              <span>
                {/*icon */}
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/*search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            {/*icon */}
            <CiSearch size={40} />
          </div>

          {/*right */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://i.pinimg.com/1200x/b2/4e/2e/b24e2ebe58598fd2898078106c231c56.jpg"
                alt="language option"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            {/*three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/*orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& orders</span>
            </Link>

            {/*cart */}
            <Link to="/cart" className={classes.cart}>
              {/*icon */}
              <BsCart size={35} />
              <span>{totalItem}</span>
              <span>cart</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
