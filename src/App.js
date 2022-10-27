import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/landing'
import Login from '../src/components/identification/login/login'
import Register from '../src/components/identification/register/register'
import Dashboard from './components/Dashboard/dashboard'
import Services from './components/Services/services'
import Order from './components/Order/order'
import Purchase from './components/Purchase/purchase'
import Invoices from './components/Invoices/invoices'
import Transactions from './components/Transactions/transactions'
import Deposit from './components/Deposit/deposit'
import Account from './components/Account/account'
import AccountDetails from './components/AccountDetails/accountDetails'
import ChangePassword from './components/ChangePassword/changePassword'
import Deactivate from './components/Deactive/deactivate'
import Support from './components/Support/support'
import Tickets from './components/Tickets/tickets'
import TicketsID from './components/TicketsID/ticketsID'
import Faq from './components/Faq/faq'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/id/login" element={<Login />} />
          <Route path="/id/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/order" element={<Order />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/details" element={<AccountDetails />} />
          <Route path="/account/password" element={<ChangePassword />} />
          <Route path="/account/deactivate" element={<Deactivate />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/tickets" element={<Tickets />} />
          <Route path="/support/tickets/id" element={<TicketsID />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
