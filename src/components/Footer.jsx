import { Link } from "react-router-dom"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";

export default function Footer(){
    const [isAboutModalOpen, setAboutModalOpen] = useState(false);
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [isTermsModalOpen, setTermsModalOpen] = useState(false);
    const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);

    return(
        

<footer className="bg-slate-700 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-100 dark:text-gray-400 font-medium">
                {/**ABOUT */}
                <li className="mb-4">
                    <button onClick={() => setAboutModalOpen(true)} className=" hover:underline">About</button>
                    <Modal
                    show={isAboutModalOpen}
                    onClose={() => setAboutModalOpen(false)}
                    size="xl"
                >
                    <Modal.Header className="bg-slate-700 text-gray-100">
                    About Us
                    </Modal.Header>
                    <Modal.Body className="bg-gray-200">
                    <div className="space-y-8">
                    <h1>Welcome to Dwell, your premier destination for finding your dream home or investment property. At Dwell, we are committed to revolutionizing the real estate industry by providing innovative solutions that prioritize security, convenience, and personalized service.</h1>
                        <ul>
                            <li>
                            <h2 className="my-4 font-bold">Our Mission</h2>
                            <p>At Dwell, our mission is to simplify the process of buying, selling, and renting properties while ensuring the highest standards of security and privacy. We strive to empower individuals and families to make informed decisions about their real estate transactions by providing access to comprehensive listings, expert advice, and cutting-edge technology.</p>
                            </li>
                            <li>
                            <h2 className="my-4 font-bold">What Sets Us Apart</h2>
                            <ul>
                                <li>
                                <h3 className="my-4 font-medium">Secure Chat Feature: Your Privacy, Our Priority</h3>
                                <p>Experience the convenience of direct communication with property owners and real estate agents through our secure chat feature.</p>
                                </li>
                                <li>
                                <h3 className="my-4 font-medium">Extensive Property Listings: Your Dream Property Awaits</h3>
                                <p>Discover a world of possibilities with our extensive database of residential, commercial, and investment properties.</p>
                                </li>
                                <li>
                                <h3 className="my-4 font-medium">Personalized Service: Your Success, Our Mission</h3>
                                <p>At Dwell, we provide personalized service tailored to your specific needs and preferences.</p>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <h2 className="my-4 font-bold">Our Commitment to Excellence</h2>
                            <p>Excellence is not just a goal; it's our standard at Dwell. We are committed to delivering an exceptional user experience by constantly innovating and refining our services.</p>
                            </li>
                            <li>
                            <h2>Join Us on Your Real Estate Journey</h2>
                            <p>Whether you're a first-time homebuyer, a seasoned investor, or a property owner looking to sell or rent, Dwell is here to support you every step of the way.</p>
                            </li>
                        </ul>
                    </div>
                    </Modal.Body>
                    <Modal.Footer className="bg-gray-200">
                    <Button
                        color="gray"
                        onClick={() => setAboutModalOpen(false)}
                    >
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                {/**CONTACT */}
                </li>
                <li class="mb-4">
                <button onClick={() => setContactModalOpen(true)} className="hover:underline">Contact Us</button>
                    <Modal show={isContactModalOpen} onClose={() =>setModalOpen(false)} size='xl'>
                        <Modal.Header className="text-gray-100 bg-slate-700">
                            Contact Us
                        </Modal.Header>
                        <Modal.Body className="bg-gray-200">
                        <section class="bg-sky-50 dark:bg-gray-900">
                            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <p class="mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                                <form action="#" class="space-y-8">
                                <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                            </form>
                        </div>
                    </section>
                        </Modal.Body>
                        <Modal.Footer className="bg-gray-200">
                            <Button onClick={()=>setContactModalOpen(false)} color="gray">close</Button>
                        </Modal.Footer>
                    </Modal>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-100 dark:text-gray-400 font-medium">
                {/**PRIVACY POLICY */}
                <li class="mb-4">
                <button onClick={() => setPrivacyModalOpen(true)} className="hover:underline">Privacy Policy</button>
                    <Modal show={isPrivacyModalOpen} onClose={() =>setPrivacyModalOpen(false)} size='xl'>
                        <ModalHeader className="text-gray-100 bg-slate-700">
                            Privacy Policy
                        </ModalHeader>
                        <ModalBody className="bg-gray-200">
                            <p>We are commited to protecting the privacy and security of your personal information, which includes how we collect , use ,disclose your information when you visit and use our website.</p>
                            <p className="my-4 font-semibold">1. Information We Collect</p>
                            <p className="py-1">1.1 Information You Provide to Us

                                When you use our website and chat feature, you may provide us with personal information such as your name, email address, phone number, and any other information you choose to share.
                                We may also collect information from your communications with us, including chat transcripts and messages.</p>

                            <p className="py-1">1.2 Automatically Collected Information

                            We may automatically collect certain information about your visit to our website, including your IP address, browser type, device information, and browsing behavior.</p>

                            <p className="my-4 font-semibold">
                            2. Use of Information
                            </p>
                            <p className="py-1"> To provide, maintain, and improve our website and services.</p>
                            <p className="py-1">To communicate with you, respond to your inquiries, and provide customer support.</p>
                            <p className="py-1">To personalize your experience and tailor our content and offerings to your preferences.</p>
                            <p className="py-1">To analyze usage trends and improve the functionality and performance of our website.</p>

                            <p className="my-4 font-semibold">3. Disclosure of Information</p>
                            <p className="py-1">We may disclose your information in the following circumstances:<br></br>
                            To trusted third-party service providers who assist us in operating our website and providing our services.</p>
                            <p className="py-1">To comply with legal obligations or enforce our Terms of Service.</p>
                            <p className="py-1">With your consent or as otherwise permitted or required by law.</p>

                            <p className="my-4 font-semibold">4. Data Security</p>

                            <p className="py-1">We take the security of your information seriously and implement appropriate technical and organizational measures to safeguard it against unauthorized access, disclosure, alteration, or destruction.</p>
                        </ModalBody>
                        <ModalFooter className="bg-gray-200">
                            <Button onClick={()=>setPrivacyModalOpen(false)} color="gray">close</Button>
                        </ModalFooter>
                    </Modal>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-300 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <Link t="/">Dwell™</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
        </div>
      </div>
    </div>
</footer>

    )
};