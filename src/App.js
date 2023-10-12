import {Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import SubscriptionPlan from "./components/SubscriptionPlan";
import Payment from "./components/Payment";
import AddSubAdminProfile from "./components/AddSubAdminProfile";
import SubAdminProfile from "./components/SubAdminProfile";
import UpdateSubAdmin from "./components/UpdateSubAdmin";
import CategoryList from "./components/CategoryList";
import ViewMaterial from "./components/ViewMaterial";
import AddMaterial from "./components/AddMaterial";
import UpdateMaterial from "./components/UpdateMaterial";
import AddTrader from "./components/AddTrader";
import MyTraders from "./components/MyTraders";
import UpdateTrader from "./components/UpdateTrader";
import Unit from "./components/Unit";
import ArchivedTrader from "./components/ArchivedTrader";
import ArchivedMaterials from "./components/ArchivedMaterials";
import ArchivedCategory from "./components/ArchivedCategory";
import UpdateCategory from "./components/UpdateCategory";
import ArchivedSubAdmin from "./components/ArchivedSubAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AddSubAdminProfile" element={<AddSubAdminProfile/>} />
      <Route path="/SubscriptionPlan" element={<SubscriptionPlan/>} />
      <Route path="/Payment" element={<Payment/>} />
      <Route path="/SubAdminProfile" element={<SubAdminProfile/>} />
      <Route path="/UpdateSubAdmin/:id" element={<UpdateSubAdmin/>} />
      <Route path="/CategoryList" element={<CategoryList/>} />
      <Route path="/ViewMaterial" element={<ViewMaterial/>} />
      <Route path="/AddMaterial" element={<AddMaterial/>} />
      <Route path="/UpdateMaterial/:id" element={<UpdateMaterial/>} />
      <Route path="/AddTrader" element={<AddTrader/>} />
      <Route path="/MyTraders" element={<MyTraders/>} />
      <Route path="/UpdateTrader/:id" element={<UpdateTrader/>} />
      <Route path="/Unit" element={<Unit/>} />
      <Route path="/ArchivedTrader" element={<ArchivedTrader/>} />
      <Route path="/ArchivedMaterials" element={<ArchivedMaterials/>} />
      <Route path="/ArchivedCategory" element={<ArchivedCategory/>} />
      <Route path="/UpdateCategory/:id" element={<UpdateCategory/>} />
      <Route path="/ArchivedSubAdmin" element={<ArchivedSubAdmin/>} />
    </Routes>
  );
}

export default App;
