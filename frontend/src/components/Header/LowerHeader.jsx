import { SlMenu } from "react-icons/sl";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <SlMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        <li>Registr y</li>
        <li>Prime Video</li>
        <li>Customer Service</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
