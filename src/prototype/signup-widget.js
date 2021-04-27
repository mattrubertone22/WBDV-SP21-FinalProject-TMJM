import { Link } from "react-router-dom";

const SignUpWidget = ({ title, page }) => {
<<<<<<< HEAD
=======
  let backgroundClassName = "";
  if (page === "home") {
    backgroundClassName = "wbdv-widget-container";
  }
  if (page === "detail") {
    backgroundClassName = "wbdv-widget-container-light";
  }
>>>>>>> adf98bb2e0c0cae8f251b0e2591dd228d69b378b
  return (
    <div className="row justify-content-right">
      <div className="wbdv-widget-container">
        <div className="wbdv-contrast-header">
          <h3 className="wbdv-center-in-div">{title}</h3>
        </div>
        <div className="wbdv-widget-aaa">
          <div className="row wbdv-center-in-div">
            <Link to={"/login"}>
              <button className="btn wbdv-affirmative-btn">SIGN IN</button>
            </Link>
          </div>
          <div className="wbdv-center-in-div wbdv-widget-interior">or</div>
          <div className="row wbdv-center-in-div">
            <Link to={"/register"}>
              <button className="btn wbdv-affirmative-btn">
                CREATE AN ACCOUNT
              </button>
            </Link>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SignUpWidget;
=======
export default SignUpWidget;
>>>>>>> adf98bb2e0c0cae8f251b0e2591dd228d69b378b
