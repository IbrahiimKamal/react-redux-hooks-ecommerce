import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
} from './pages';

// components
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// scroll to top component
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shirts">
          <Shirts />
        </Route>
        <Route exact path="/shoes">
          <Shoes />
        </Route>
        <Route exact path="/headphones">
          <HeadPhones />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <AllProducts />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
