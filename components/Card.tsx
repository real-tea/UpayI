// import React from 'react'
import { FormEvent } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';


const Card = () => {

  const createLink = (e : FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    const upi = e.target.upi.value; //ts ignore is used to skip the typescript's compiler on the next line

    // @ts-ignore 
    const amount = e.target.amount.value;

    // @ts-ignore

    const message = e.target.message.value; 

    let link = `https`
  }

  return (
    <>
    <div className = "mx-auto max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <form className = "space-y-6" onSubmit = {createLink}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h5 className="text-xl font-medium text-gray-900">
            Create sharable UPI payment links
          </h5>
          <div>
            <label
              htmlFor="upi"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your UPI ID
            </label>
            <input
              type="text"
              name="upi"
              id="upi"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="lakshmi.chitFund@heraPheri"
              required
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Collect Amount (Optional)
            </label>
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <div className="-mr-px flex">
                <span className="rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                  ₹
                </span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                min={0}
                max={100000}
                placeholder="25"
                className="flex-growblock relative w-full flex-1 flex-shrink rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Message (Optional)
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              maxLength={140}
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Paisa Double 🤑"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Copy payment link
          </button>
      </form>
      <ToastContainer/>
    </div>
    <Footer/>
    </>
  )
}

export default Card