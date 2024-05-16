import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loader from "./utils/Common/Loader"
import ProtectedRoute from "./utils/Common/ProtectedRoute"

const NBFCWrapper = lazy(() => import("./Pages/Nbfc"))
const AdminWrapper = lazy(() => import("./Pages/Admin"))
const CommercialBankWrapper = lazy(() => import("./Pages/CommercialBank"))

const UserManagement = lazy(() => import("./utils/Common/UserManagement"))

const NotFound = lazy(() => import("./utils/Common/NotFound"))
const Settings = lazy(() => import("./utils/Common/Settings"))

const MasterAgreementNBFC = lazy(() => import("./components/NBFC/MasterAgreement"))
const FormBuilder = lazy(() => import("./components/NBFC/ParameterManagement"))
const InfoManagement = lazy(() => import("./components/NBFC/InfoManagement"))
const ProductManagement = lazy(() => import("./components/NBFC/ProductManagement"))
const Disbursement = lazy(() => import("./components/NBFC/Disbursement"))
const Reimbursement = lazy(() => import("./components/NBFC/Reimbursement"))
const RepaymentStructure = lazy(() => import("./components/NBFC/RepaymentStructure"))
const RepaymentToBank = lazy(() => import("./components/NBFC/RepaymentToBank"))
const ManagementFees = lazy(() => import("./components/NBFC/ManagementFees"))

const LicenseKey = lazy(() => import("./components/Admin/LicenseKey"))
const AuthForm = lazy(() => import("./components/Auth/AuthForm"))

const MasterAgreementCommercialBank = lazy(() => import("./components/CommercialBank/MasterAgreement"))
const DisbursementCommercialBank = lazy(() => import("./components/CommercialBank/Disbursement"))
const ReimbursementCommercialBank = lazy(() => import("./components/CommercialBank/Reimbursement"))
const RepaymentStructureCommercialBank = lazy(() => import("./components/CommercialBank/RepaymentStructure"))
const ManagementFeesCommericalBank = lazy(() => import("./components/CommercialBank/ManagementFees"))
const RepaymentFromNBFCCommericalBank = lazy(() => import("./components/CommercialBank/RepaymentFromNBFC"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Auth */}
          <Route path="/" element={<AuthForm />} />
          {/* Admin Route */}
          <Route path="admin" element={<ProtectedRoute loggedIn="true" role="admin" />}>
            <Route path="/admin" element={<AdminWrapper />}>
              <Route index element={<LicenseKey />} />
              <Route path="license-key" element={<LicenseKey />} />
            </Route>
          </Route>
          {/* NBFC Route */}
          <Route path="nbfc" element={<ProtectedRoute loggedIn="true" role="nbfc" />}>
            <Route path="/nbfc" element={<NBFCWrapper />}>
              <Route index element={<FormBuilder />} />
              <Route path="parameterbuilder" element={<FormBuilder />} />
              <Route path="masteragreement" element={<MasterAgreementNBFC />} />
              <Route path="disbursement" element={<Disbursement />} />
              <Route path="reimbursement" element={<Reimbursement />} />
              <Route path="repayment-structure" element={<RepaymentStructure />} />
              <Route path="repayment-to-bank" element={<RepaymentToBank />} />
              <Route path="management-fees" element={<ManagementFees />} />
              <Route path="infomanagement" element={<InfoManagement />} />
              <Route path="product-management" element={<ProductManagement />} />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          {/* Commerical Bank Route */}
          <Route path="commericalbank" element={<ProtectedRoute loggedIn="true" role="commericalbank" />}>
            <Route path="/commericalbank" element={<CommercialBankWrapper />}>
              <Route index element={<MasterAgreementCommercialBank />} />
              <Route path="masteragreement" element={<MasterAgreementCommercialBank />} />
              <Route path="disbursement" element={<DisbursementCommercialBank />} />
              <Route path="reimbursement" element={<ReimbursementCommercialBank />} />
              <Route path="repayment-structure" element={<RepaymentStructureCommercialBank />} />
              <Route path="management-fees" element={<ManagementFeesCommericalBank />} />
              <Route path="repayment-from-nbfc" element={<RepaymentFromNBFCCommericalBank />} />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          {/* Page not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App