import React from "react";
import SideNav from "../components/SideNav";
import { Card } from "flowbite-react";

const About = () => {
    return(
        <>
        <SideNav/>
        <div className="p-4 sm:ml-64">
            <div className="m-8 mb-20 md:mb-24">
                <h1 className="text-center bg-slate-700 p-4 text-gray-100 text-lg font-medium ">ABOUT US</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="max-w-sm" imgSrc="https://res.cloudinary.com/delagynow/image/upload/v1711150129/site_photo%20archive/8_jeqf4v.jpg" horizontal>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Dwell is a pioneering real estate platform dedicated to transforming the property market through innovation, integrity, and a customer-first approach. Founded in the vibrant heart of the real estate industry, we specialize in providing a seamless connection between property owners and prospective renters through our robust online platform.
                </p>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Mission
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Our mission is straightforward: to empower customers by providing them with comprehensive, easy-to-navigate real estate solutions. We strive to simplify the process of buying, selling, and renting properties, making it as hassle-free and transparent as possible. Our platform is designed to put the power back into the hands of our users, ensuring that the hassle of getting an aprtment in Nigeria is reduced by a very significant rate.
                </p>
            </Card>
            <Card className="max-w-sm" imgSrc="https://res.cloudinary.com/delagynow/image/upload/v1711150114/site_photo%20archive/main4_dsrs4d.jpg" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Vision
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Our vision is to be the leading real estate service provider on a national and global scale, recognized for our innovative approach and the tangible value we bring to our users. We aim to reshape the real estate landscape by enhancing user experience with cutting-edge technology and unparalleled service. At Dwell, we envision a world where the journey of finding and securing a home is as joyful as living in it.
                </p>
            </Card>
            <Card className="max-w-sm" imgSrc="https://res.cloudinary.com/delagynow/image/upload/v1713209569/site_photo%20archive/about3_zwhwgp.jpg" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Commitment
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Dwell is committed to innovation and customer satisfaction. We continuously evolve our services and platform to meet the changing needs of the real estate market while striving to provide an exceptional user experience.
                </p>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Why Choose Dwell
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-semibold mr-3">Security and Trust: </span> Our platform employs advanced security measures to protect the privacy and data of our users, ensuring a secure environment for all activities.</p>

                <p> <span className="font-semibold mr-3">Innovative Chat Feature:</span> Unlike other real estate platforms, Dwelloffers a direct chat feature that allows potential buyers and renters to communicate instantly with property owners. This not only streamlines the negotiation process but also adds a layer of transparency and personalization to each interaction.</p>

                <p> <span className="font-semibold mr-3">Tailored User Experience :</span> We leverage sophisticated algorithms to recommend properties that meet the unique preferences and requirements of each user, making the search for the perfect home faster and more precise.</p>

                <p> <span className="font-semibold mr-3">Expert Guidance:</span>Our team of real estate professionals is available to provide expert advice and insights, helping users navigate the complexities of the real estate market with ease.
                </p>
            </Card>
            </div>
        </div>
        </>
    );
}

export default About;