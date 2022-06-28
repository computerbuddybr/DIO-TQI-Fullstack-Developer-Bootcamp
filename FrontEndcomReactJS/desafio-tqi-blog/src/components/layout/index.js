import { Component } from "react";
import FetchInfo from "../../service";
import Footer from "../footer";
import Header from "../header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <main>
          <FetchInfo></FetchInfo>
        </main>
        <Footer></Footer>
      </>
    );
  }
}
export default Layout;
