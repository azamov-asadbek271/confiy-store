import { NavLink } from "react-router-dom";
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

function NavLinks() {
  return (
    <div>
    {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              to={link.link} className="capitalize"
            >
              {link.text}
            </NavLink>
          </li>
        );
    })}
    </div>
  )
}

export default NavLinks
