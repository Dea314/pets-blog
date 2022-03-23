import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/Home"), 9000);
  }, [navigate]);

  return (
    <div>
      <h2>Opps, page not found!</h2>
      <h4>We're redirecting you to Home Page now!</h4>
      <img
        src="https://i.gifer.com/7iJR.gif"
        alt="404"
        width="1000"
        height="600"
      />
    </div>
  );
};

export default NotFound;
