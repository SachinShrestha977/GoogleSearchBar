import { Outlet } from "react-router-dom";
import "./App.css";
import AnimatedComponent from "./Components/AnimatedComponent";
import Announcement from "./Components/Announcement";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Announcement></Announcement>
          <Navbar></Navbar>
          <AnimatedComponent></AnimatedComponent>

          <SearchBar></SearchBar>
          <Outlet></Outlet>
          <footer></footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
