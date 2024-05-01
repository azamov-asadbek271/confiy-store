import { Link } from "react-router-dom";
const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Products",
    link: "/products",
  },
  {
    id: 4,
    text: "Cart",
    link: "/cart",
  },
  {
    id: 5,
    text: "Checkout",
    link: "/checkout",
  },
  {
    id: 6,
    text: "Orders",
    link: "/orders",
  },
];

function NavLink() {
  return (
    <div >
    {links.map((link) => {
        return (
          <Link
            className="px-4 py-2 hover:bg-neutral-content rounded "
            key={link.id}
            to={link.link}
          >
            {link.text}
          </Link>
        );
    })}
    </div>
  )
}

export default NavLink