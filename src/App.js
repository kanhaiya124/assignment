import Home from "./components/Home";
function App() {
  const products=[
    'shoes',
    'mobiles',
    'perfumes',
    't-shirt',
    'jeans',
    'watches',
    'book',
    'tv',
    'sarees',
    'medicines'
  ]
  return (
     <div>
      <Home data={products}></Home>
    </div>
  );
}

export default App;
