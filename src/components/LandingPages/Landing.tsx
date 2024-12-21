import React from 'react'
import Image from 'next/image'

function Landing() {
    return (
        <div className='flex flex-col space-y-5 items-center justify-center pt-20'>
            <Image
                    src="/assests/user-1.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="absolute top-[550px] left-5"
                    data-asos="fade-up"
                    data-asos-delay="700"
                    data-asos-offset="200"
                />
                <Image
                    src="/assests/user-2.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="absolute top-[600px] right-5"
                    data-asos="fade-up"
                    data-asos-delay="700"
                    data-asos-offset="200"
                />
            <div className="flex flex-col justify-center items-center pt-4 space-y-10">
                <button className="rounded-lg bg-green-900 text-xl text-white font-medium py-3 px-6">Excelllent Customer Experience, Drive Growth.</button>
                <div className='flex flex-col'>
                <p className='text-7xl text-center font-bold pt-4'>All-in-one customer experience </p>
                <div className='flex space-x-2'>
                <Image
                    src="/assests/section1solutionlight.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="block mx-auto mt-3 lg:relative md:relative pb-3 asos-init asos-animate"
                    data-asos="fade-up"
                    data-asos-delay="700"
                    data-asos-offset="200"
                /><span className='text-7xl text-center font-bold pt-4'>for your business Marketing</span>
                </div>
                </div>
                <h2 className='text-xl text-center w-[400px]'>Transform your business landscape with our unified platform where leaders make better decisions, and teams execute seamlessly.</h2>

                <button className='border border-black bg-white px-16 py-4 mt-4 rounded-md '>Get Started</button>
            </div>
            <div>
                <Image
                    src="/assests/dashboard.svg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="block mx-auto mt-10 w-[100%] lg:relative md:relative pb-3 asos-init asos-animate"
                    data-asos="fade-up"
                    data-asos-delay="700"
                    data-asos-offset="200"
                />
            </div>
        </div >
    )
}

export default Landing
