import { Form, Link, useLoaderData } from "react-router-dom";
import { FormCHeckbox, FormRange, FormSelect, InputForm } from "../components";

function Filter() {
  const { meta } = useLoaderData();
  return (
    <Form className="grid bg-base-200 rounded-md px-8 py-4 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center ">
      <InputForm
        type="search"
        name="search"
        label="search product"
        size="input-sm"
      />
      {/* category */}
      <FormSelect
        list={meta.categories}
        label="select category"
        name="category"
        size="select-sm"
      />
      {/* company */}
      <FormSelect
        list={meta.companies}
        label="select company"
        name="company"
        size="select-sm"
      />
      {/* z-a */}
      <FormSelect
        list={["a-z", "z-a", "high", "log"]}
        label="sort by"
        name="order"
        size="select-sm"
      />
      {/* form range */}
      <FormRange name="price" label="select price" size="range-sm" />
      {/* shipping */}
      <FormCHeckbox
        size="checkbox-sm"
        label="free shipping"
        name="shipping"
        defaultValue={false}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
}

export default Filter;
