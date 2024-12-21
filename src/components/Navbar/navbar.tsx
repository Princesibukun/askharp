"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdContacts } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi2";
import { BsGearWideConnected } from "react-icons/bs";
import Image from 'next/image';

const Navbar = () => {
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    return (
        <div>
            <header>
                <nav className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300 z-50">
                            <Image src="/assests/harp (1).svg" width={100} height={20} alt=""/>
                    <ul className="flex gap-14 relative">
                        <li
                            className="relative"
                            onMouseEnter={() => setIsProductsDropdownOpen(true)}
                            onMouseLeave={() => setIsProductsDropdownOpen(false)}
                        >
                            <Link href="/products" className="text-3xl text-gray-800 font-extrabold">
                                Products
                            </Link>
                            {isProductsDropdownOpen && (
                                <ul className="absolute left-0 mt-2  bg-white shadow-lg rounded-lg space-y-5 w-96">
                                    <li>
                                        <Link href="/products/contacts" className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-4">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <IoMdContacts size={24}  />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className='text-2xl'> Contacts</span>
                                            <span className="text-slate-500">Gain profound insights into your customers data.</span>
                                            </div>
                                
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/engagement" className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <FaEnvelope  size={24}/>
                                        </div>
                                        <div className="flex flex-col">
                                        <span className='text-2xl'>Engagement</span>
                                        <span className="text-slate-500">Make conversation better.</span>
                                        </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/integration" className="flex items-center gap-4  px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <GrIntegration size={24} />
                                        </div>
                                        <div className="flex flex-col">
                                        <span className='text-2xl'>Integration</span>
                                        <span className="text-slate-500">Connect your favorite.</span>
                                        </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/automation" className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <BsFillLightningChargeFill size={24}/>
                                        </div>
                                        <div className="flex flex-col">
                                        <span className='text-2xl'>Automation</span>
                                        <span className="text-slate-500">Save time with just a few clicks.</span>
                                        </div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li
                            className="relative"
                            onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                            onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                        >
                            <Link href="/resources" className="text-3xl text-gray-800 font-extrabold">
                                Resources
                            </Link>
                            {isResourcesDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-lg space-y-5">
                                    <li>
                                        <Link href="/resources/product1" className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <HiClipboardDocumentList size={24} />
                                        </div>
                                        <div className="flex flex-col">
                                        <span className='text-2xl'>Product Documentation</span>
                                        <span className="text-slate-500">User-friendly product guide.</span>
                                        </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources/product2" className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <HiDocumentText size={24} />
                                        </div>
                                        <div className="flex flex-col">
                                        <span className='text-2xl'>API Documentation</span>
                                        <span className="text-slate-500">Easy to follow developers resources.</span>
                                        </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources/product3" className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <div className=" bg-green-200 rounded-full p-5">
                                        <BsGearWideConnected size={24} />
                                        </div>
                                        <div className="flex flex-col">
                                        <span className='text-2xl'>Community</span>
                                        <span className="text-slate-500">Connect and grow with other users.</span>
                                        </div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <button className="text-lg font-medium text-gray-800 border-2 border-gray-800 px-12 py-4 rounded-full hover:bg-gray-100 transition duration-200 ease-in-out active:scale-95">
                        Get Started
                    </button>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
