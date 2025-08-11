import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div>
         <div className=" bg-gradient-to-r  from-green-400 to-green-100 text-center py-3 font-semibold text-white ">Free delivery in 8-15 minutes
•
Mumbai, India</div>
     <div className="flex flex-col  md:px-22 py-3 px-10 space-y-3 mt-2">
         <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <p className="text-md text-gray-700 
            ">Discover amazing products across all categories</p>
         </div>
         {/* cartoon add */}
         <div className="w-full  flex justify-between gap-7 mt-2 overflow-scroll border-r-1 border-gray-200 ">

             <div className="flex flex-col space-y-2 items-center  justify-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Toys} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Toys</p>
          </div>

            <div className="flex flex-col space-y-2 items-center justify-center m-2  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group "> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Fashion} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Fashion</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Lifestyle} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Kitchen</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500  mx-4">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Electronics} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Electronic</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Home} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Home&Garder</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Beauty} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Beauty&Health</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Sports} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Sports&Fitnes</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500  mx-4">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Book} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Books&Media</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Automotive} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Automotive</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2 "> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500  mx-4">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Baby} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Baby & Kids</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Pets} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Pets</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Grocery} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Grocery</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Office} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Office Supplies</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Travel} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Travel&Luggage</p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500 mx-4 ">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Music} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 ">Music&Instrument </p>
          </div>

            <div className="flex flex-col space-y-2 items-center  bg-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-lg  w-25 h-26  cursor-pointer group justify-center m-2"> 
               <div className="w-16 h-20 rounded-3xl bg-pink-400 p-2  mt-2 hover:scale-120 transition-all duration-500  mx-4">
                  <img className="w-full h-full p-2 group-hover:scale-120 transition-all duration-500 " src={assets.Art} alt="" />
               </div>
               <p className="font-semibold text-sm pb-2 overflow-hidden ">Art & Craft</p>
          </div>


         </div>




         <div className="flex justify-between mt-7 bg-gradient-to-r  from-yellow-400 to-orange-600 rounded-2xl p-5">
            <div className="flex flex-col ">   
            <h2 className="font-bold text-white text-xl ">🎉 Super Saver Sale</h2>
            <p className="text-white">Up to 70% off on factory prices</p>
            </div>
            <div>
                <button className="mt-2 text-black bg-white hover:bg-gray-300 transition-all duration-500 px-3 py-2 rounded cursor-pointer font-medium text-sm">Shop Now</button>
            </div>
         </div>


         <div className="   mt-8 
        w-full grid grid-cols-auto  gap-5  pt-5 gap-y-6 px-3 sm:px-0 "   style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
         >

            <div className="flex items-center  gap-4 border border-gray-200 rounded-xl py-4 px-4 md:w-full md:h-full "> 
                
                <div className="w-9 h-9   bg-green-300 rounded-full p-1 ">go</div>
                <div className="flex flex-col mr-10">
                    <h4 className="font-semibold text-black">Express Delivery</h4>
                    <p className="text-gray-600 text-sm">In 10 mins</p>
                </div>
            </div>

            <div className="flex items-center   gap-4 border border-gray-200 rounded-xl py-4 px-4"> 
                <div className="w-9 h-9   bg-green-300 rounded-full p-1 ">go</div>
                <div className="flex flex-col mr-10">
                    <h4 className="font-semibold text-black">Bulk Orders</h4>
                    <p className="text-gray-600 text-sm">Save more</p>
                </div>
            </div>

            <div className="flex items-center   gap-4 border border-gray-200 rounded-xl py-4 px-4"> 
                <div className="w-9 h-9   bg-green-300 rounded-full p-1 ">go</div>
                <div className="flex flex-col mr-5">
                    <h4 className="font-semibold text-black">Direct from Factory</h4>
                    <p className="text-gray-600 text-sm">Best prices</p>
                </div>
            </div>
            
            <div className="flex items-center   gap-4 border border-gray-200 rounded-xl py-4 px-4"> 
                <div className="w-9 h-9   bg-green-300 rounded-full p-1 ">go</div>
                <div className="flex flex-col mr-10">
                    <h4 className="font-semibold text-black">Quality Assured</h4>
                    <p className="text-gray-600 text-sm">100% authentic</p>
                </div>
            </div>
            
          </div>
     </div>


    </div>
  )
}

export default Hero
