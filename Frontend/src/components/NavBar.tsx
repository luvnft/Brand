import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

//Import Needed Icons
import { Category2, CloseCircle } from "iconsax-react";
import Dropdown from "./connectWallet/Dropdown";
import { useAccount, useDisconnect } from 'wagmi'
import { toast } from "react-toastify";
import AvatarKit from "./onchainKit/Avartar";

const NavBar = () => {
  const account = useAccount()
  const { disconnect } = useDisconnect()

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const location = useLocation();

  const navigateToCreate = () => {
    if (!account.address) {
      toast.error("Please connect your wallet.");
      return <Navigate to="/" />;
    }
    return <Navigate to="/create" />;
  };

  const navigateToDashboard = () => {
    if (!account.address) {
      toast.error("Please connect your wallet.");
      return <Navigate to="/" />;
    }
    return <Navigate to="/dashboard" />;
  };

  const navigateToView = () => {
    if (!account.address) {
      toast.error("Please connect your wallet.");
      return <Navigate to="/" />;
    }
    return <Navigate to="/view" />;
  };



  return (
    <main className="relative">
      <div className="flex items-center justify-between px-5 py-6 md:text-sm xl:text-base md:py-8 sm:px-10 md:px-15 xl:px-20">
        <Link to="/" className="text-xl font-bold md:text-2xl xl:text-3xl">
          AFF
        </Link>
        <div className="md:hidden">
          <Category2
            size="28"
            onClick={toggleMenu}
            className="cursor-pointer text-primaryBlue"
          />
        </div>
        <div
          className={`${isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static top-0 left-0 w-72 p-4 md:p-0 md:w-auto h-full md:h-auto bg-primaryBlue md:bg-white transition-transform duration-300 ease-in-out z-50`}
        >
          <CloseCircle size="32" variant="Bold" className="absolute cursor-pointer md:hidden top-4 right-4" onClick={toggleMenu} />

          <nav className="flex flex-col mt-20 gap-y-5 md:gap-y-0 md:flex-row md:items-center md:gap-x-3 xl:gap-x-5 md:mt-0">
            <Link
              onClick={navigateToCreate}
              to="create"
              className={`${location.pathname === "/create" && "text-white md:text-primaryBlue"} font-medium hover:text-white md:hover:text-primaryBlue`}
            >
              Create Campaign
            </Link>
            <Link
              onClick={navigateToView}
              to="view"
              className={`${location.pathname === "/view" && "text-white md:text-primaryBlue"} font-medium hover:text-white md:hover:text-primaryBlue`}
            >
              View Campaign
            </Link>
            <Link
              onClick={navigateToDashboard}
              to="dashboard"
              className={`${location.pathname === "/dashboard" && "text-white md:text-primaryBlue"} font-medium hover:text-white md:hover:text-primaryBlue`}
            >
              Dashboard
            </Link>
            <div className="my-4 border-b-2 border-black md:hidden"></div>
            <div className="relative">
              {
                account.status != 'connected'
                  ?
                  (<button
                    className="p-3 px-5 text-black duration-300 bg-white border-2 md:text-white md:bg-primaryBlue md:border-primaryBlue md:hover:border-primaryBlue md:hover:text-inherit hover:border-white hover:text-white hover:bg-inherit rounded-xl hover:rounded-3xl"
                    onClick={toggleDropdown}
                  >
                    Connect Wallet
                  </button>)
                  :
                  (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <AvatarKit account={account} />
                      <button
                        className="p-3 px-5 text-black duration-300 bg-white border-2 md:text-white md:bg-primaryBlue md:border-primaryBlue md:hover:border-primaryBlue md:hover:text-inherit hover:border-white hover:text-white hover:bg-inherit rounded-xl hover:rounded-3xl"
                        onClick={() => {
                          disconnect();
                          setIsDropdownOpen(false);
                        }}
                      >
                        Disconnect Wallet
                      </button>
                    </div>
                  )
              }
              {isDropdownOpen && account.status != 'connected' && (
                <div className="absolute right-0 z-10 w-full mt-2">
                  <Dropdown />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </main>
  );
};

export default NavBar;