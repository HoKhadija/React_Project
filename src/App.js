import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './component/navBar';
import FormEx from './component/form';
import FooterPage from "./component/footer";



function App() {
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column min-vh-100">
        <FormEx />
      </div>
      <FooterPage />
    </>
  );
}

export default App;
