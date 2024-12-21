import React from 'react'
import 'animate.css'
import Image from 'next/image'

const footer = () => {
    return (

        <footer className="flex flex-col bg-blue-50 p-10 mt-96 animate_animated animate_fadeInUp">
            <div className='flex space-x-7 justify-between'>
                <div className='space-y-10 animate__animated animate__bounceInLeft'>
                <Image src="/assests/harp (1).svg" width={100} height={20} alt=""/>
                    <p className=" text-slate-500 text-xl">Best tool for your business</p>
                    <p className="text-xl">Subscribe to our newsletter</p>
                    <form className="flex item-center space-x-10 justify-between">
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="px-8 py-3 text-gray-800 border-none rounded-lg" />
                        <button className="bg-green-800 text-white px-8 py-3 rounded-lg">Subscribe</button>
                    </form>
                </div>
                <div className='animate__animated animate__fadeInUp'>
                    <ul className='space-y-4'>
                        <h2 className=" mb-2 font-extrabold text-2xl text-green-800">Products</h2>
                        <li className="text-slate-500 text-xl">Users</li>
                        <li className="text-slate-500 text-xl">Engage</li>
                        <li className="text-slate-500 text-xl">Automation</li>
                        <li className="text-slate-500 text-xl">integration</li>
                    </ul>
                </div>
                <div className="animate__animated animate__fadeInUp">
                    <ul className='space-y-4'>
                        <h2 className="font-extrabold mb-2 text-2xl text-green-800">Resources</h2>
                        <li className="text-slate-500 text-xl">Blog</li>
                        <li className="text-slate-500 text-xl">Documentation</li>
                        <li className="text-slate-500 text-xl">Harp Api</li>
                        <li className="text-slate-500 text-xl">Release Note</li>
                        <li className="text-slate-500 text-xl">Watch Demo video</li>
                    </ul>
                </div>
                <div  className='animate__animated animate__fadeInUp'>
                    <ul className='space-y-4'>
                        <h2 className="font-extrabold mb-2 text-2xl text-green-800">Company</h2>
                        <li className="text-slate-500 text-xl">Support</li>
                        <li className="text-slate-500 text-xl">About</li>
                        <li className="text-slate-500 text-xl">Help center</li>
                        <li className="text-slate-500 text-xl">Contact us</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 animate__animated animate__fadeInUp">
                <hr className="my-6 border-gray-300" />
                <p className="text-left text-slate-500 text-xl flex space-x-7">
                    <h1>@Harp</h1>
                    <h1>Privacy policy</h1>
                    <h1>Term & condition</h1>
                </p>
            </div>


        </footer>
    )
}

export default footer 