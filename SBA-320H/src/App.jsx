import "./App.css";

// Sample products

function App() {
  return (
    <div className="App">
      <h1>Express Yourself!</h1>

      {/* Product List */}
      <div className="product-list">
        <div className="product-item">
          <h3>Mug</h3>
          <p>$$30.00</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-item">
          <h3>Hoodie</h3>
          <p>$50.00</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-item">
          <h3>Cup</h3>
          <p>$20.00</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
