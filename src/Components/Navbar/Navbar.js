import Cart from "./../../Assets/icons/Cart.png"

const Navbar = ({onClick}) => {
  return ( 
    <div className="flex bg-white h-16 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg items-center justify-end">
      <img  alt="cart" onClick={onClick} className="m-8" src={Cart}/>
    </div>
  );
}
 
export default Navbar;