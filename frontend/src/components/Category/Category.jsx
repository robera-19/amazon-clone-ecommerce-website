import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <div>
      <section className={classes.category_container}>
        {categories.map((infos) => {
          return <CategoryCard key={infos.name} data={infos} />;
        })}
      </section>
    </div>
  );
}

export default Category;
