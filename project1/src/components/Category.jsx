import { useNavigate } from "react-router-dom";
import "./Category.css";

const Category = ({ refProp }) => {
  const navigate = useNavigate();

  return (
    <div className="category-container" ref={refProp}>
      <h2 className="category-title">Shop by Category</h2>

      <div className="category-boxes">
        <div
          className="category-card men-card"
          onClick={() => navigate("/men")}
        >
          <h3>Men</h3>
        </div>

        <div
          className="category-card women-card"
          onClick={() => navigate("/women")}
        >
          <h3>Women</h3>
        </div>
      </div>
    </div>
  );
};

export default Category;
