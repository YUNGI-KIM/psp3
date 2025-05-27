import Header from "../functions/Header";

// CartPage.js
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  setCartItems(savedCart);
}, []);

return (
  <>

  <div>{Header()}</div>
  
  <div>
    <h2>장바구니</h2>
    {cartItems.length === 0 ? (
      <p>장바구니가 비어있습니다.</p>
    ) : (
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>
            {item.name} - ₩{item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
</>
);
