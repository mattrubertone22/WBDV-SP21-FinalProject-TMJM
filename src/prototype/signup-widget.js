import { Link } from "react-router-dom";

const SignUpWidget = ({ title, page }) => {
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

export default SignUpWidget;