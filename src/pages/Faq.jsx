import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";

const FaqPage = () =>{
    return(
        <>
        <SideNav/>
        <div class="p-4 sm:ml-64 border-gray-800 rounded-lg">
        <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">FREQUENTLY ASKED QUESTIONS</h2>
                        
                    </div> 
                    <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">HOW REAL ARE THE PROPERTIES ON THIS PLATFORM?</h3>
                        <p class="my-4">At Dwell, we take the authenticity and reliability of our property listings very seriously. Our commitment is to provide you with a secure and trustworthy platform to discover your ideal property. Here's how we ensure the reality of the properties listed:.</p>
                        <p class="my-4">Verification Process: Each property undergoes a rigorous verification process before being listed on our platform. We verify the details provided by property owners to ensure accuracy and authenticity. </p>
                        <p class="my-4">Site Visits: Our team conducts on-site visits to properties to confirm their existence, condition, and adherence to our quality standards. This thorough inspection helps us maintain the highest level of transparency.</p>
                        <p class="my-4">Responsive Support Team: Should you have any concerns or questions about a particular property, our dedicated support team is here to assist you. Feel free to reach out, and we'll promptly address your queries.</p>
                        <p class="my-4">Rest assured, our goal is to make your property search experience as reliable and stress-free as possible. We understand the significance of finding a home or investment, and we are committed to being your trusted partner throughout this journey. Thank you for choosing [Your Platform Name] for your property needs.</p>
                        </blockquote>
                            
                            </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">HOW DO I REACH OUT TO THE ADMINISTRATION INCASE OF ANY TROUBLES</h3>
                  <p class="my-4">Your satisfaction and peace of mind are our top priorities. If you encounter any issues or have questions, our dedicated administration team is readily available to assist you.</p>
                  <p class="my-4">Contacting Us is Easy:
                    Click on the Contact Button: You can reach out to our administration team by clicking on the "Contact" button conveniently located in the side navigation menu. This direct channel ensures a quick and efficient way to communicate your concerns.</p>
                  <p class="my-4">Our Commitment to You:</p>
                  <p class="my-4">Prompt Response: Once you've reached out, our team will respond promptly to address your concerns and provide the necessary support.
                    </p>
                  <p class="my-4">24/7 Availability: We understand that issues may arise at any time. Rest assured, our support team is available around the clock to assist you, ensuring a seamless experience on our platform.</p>
              </blockquote>
                 
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">IS THIS PLATFORM TOTALLY FREE?</h3>
                  <p class="my-4">Yes, our platform is currently free of charge. We believe in providing accessible services to our users. However, it's essential to note that the status of our free services may change in the future. Any updates or changes to our pricing structure will be communicated transparently to all users well in advance. Our commitment is to ensure a seamless and informed experience for our community. We appreciate your support and understanding as we continue to enhance and grow our platform. If you have any specific questions about our pricing or future plans, feel free to reach out to our support team. Thank you for being a part of our journey!</p>
              </blockquote>
                  
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">WHAT INFORMATION SHOULD I INCLUDE IN MY PROPERTY LISTING?</h3>
                  <p class="my-4">To make your property stand out, include essential details such as property type, location, features, and high-quality images. The more information you provide, the better informed and interested potential tenants will be.</p>
              </blockquote>
                 
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">IS THERE A COST FOR LISTING MY PROPERTY?</h3>
                  <p class="my-4">Currently, Dwell offers free property listings for property owners and property manager. Take advantage of this opportunity to showcase your property without any upfront costs. However, please check our website or contact our administration for updates on our pricing policies.</p>
              </blockquote>
                  
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">HOW DO I REPORT A SUSPICIOUS LISTING OR USER?</h3>
                  <p class="my-4">Your safety is our priority. If you come across any suspicious listings or users, please use the "Contact" feature on the listing or contact our administration through the "Contact" option in the side navigation menu.</p>
              </blockquote>
                  
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">CAN I EDIT MY PROPERTY LISTING AFTER IT'S PUBLISHED?</h3>
                  <p class="my-4">Yes, you can! Log in to your account, go to your dashboard, and find your listed property. From there, you can easily edit or update any information to keep your listing accurate and attractive.</p>
              </blockquote>
                  
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">ARE THE PROPERTY LISTINGS UPDATED REGULARLY</h3>
                  <p class="my-4">Absolutely. Our platform is committed to providing up-to-date information. Property owners are encouraged to keep their listings current, and our team conducts regular checks to ensure accuracy.</p>
              </blockquote>
                  
          </figure>
      </div>
                </div>
            </section>
        </div>
        </>
    )
}
export default FaqPage;