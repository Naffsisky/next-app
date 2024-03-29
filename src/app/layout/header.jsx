import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a>Menu</a>
              <ul className="p-2">
                <li>
                  <Link href="/menu/application">Application</Link>
                </li>
                <li>
                  <Link href="/menu/pricing">Pricing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link href="/dashboard">
          <button className="btn btn-ghost text-xl">Nap App</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                <li>
                  <Link href="/menu/application">Application</Link>
                </li>
                <li>
                  <Link href="/menu/pricing">Pricing</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-secondary">Try Now!</a>
      </div>
    </div>
  );
}
