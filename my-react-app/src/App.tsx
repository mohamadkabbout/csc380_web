import MainLayout from "./layouts/mainlayouts";
import AuthLayout from "./layouts/authlayouts";
const App = () => {
  let isloggin : boolean = true;
if(isloggin){
    return <MainLayout />
  }else {
    return <AuthLayout />
  }
};

export default App;