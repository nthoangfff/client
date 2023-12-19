import "./product.scss"
import {useState} from "react"

const ProductForm = () => {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);

    return (
<div
  className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 bg-no-repeat bg-cover relative items-center">
  <div className="absolute bg-white opacity-60 inset-0 z-0" />
  <div className="sm:max-w-xl w-full p-10 bg-white rounded-xl z-10">
    <div className="text-center">
      <h2 className="mt-5 text-3xl font-bold text-gray-900">Product's Details</h2>
      <p className="mt-2 text-sm text-gray-400">
        Fill your product's information
      </p>
    </div>


    <form className="mt-8 space-y-3" action="#" method="POST">
      <div className="grid grid-cols-1 space-y-2">
        <label className="text-sm font-bold text-gray-500 tracking-wide">
          Product Name
        </label>
        <input
          className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
          type=""
          placeholder=""
        />
      </div>

      <div className="grid grid-cols-1 space-y-2">
        <label className="text-sm font-bold text-gray-500 tracking-wide">
          Product Description
        </label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 " placeholder="Write a description..."></textarea>
      </div>

      <div className="grid grid-cols-2">
        <div>
            <label className="text-sm font-bold text-gray-500 tracking-wide">
            Category
            </label>
            <select className="text-base h-10 p-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12">
              <option>All Type</option>
              <option value="accessories">Accessories</option>
              <option value="audio">Audio</option>
              <option value="beauty_picks">Beauty Picks</option>
              <option value="cameras">Cameras</option>
              <option value="computers">Computers</option>
              <option value="electronics">Electronics</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="watches">Watches</option>
              <option value="headphone">Headphone</option>
            </select>
        </div>

        <div className="ml-3 -mr-5">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
            Color&nbsp;&nbsp;
            </label>
            <input
            className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
            type=""
            placeholder="black"
            />
        </div>
      </div>

      <div className="grid grid-cols-2 ">
        <div>
            <label className="text-sm font-bold text-gray-500 tracking-wide">
            Price (USD)
            </label>
            <input
            className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
            type=""
            placeholder="0"
            />
        </div>

        <div className="ml-3 -mr-5">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
            Total in Stock
            </label>
            <input
            className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
            type=""
            placeholder="0"
            />
            </div>
      </div>

      <div className="grid grid-cols-1 space-y-2 ">
        <label className="text-sm font-bold text-gray-500 tracking-wide">
          Product Image
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col rounded-lg border-2 border-dashed w-full h-40 p-10 group text-center">
            <div className="cursor-pointer h-full w-full text-center flex flex-col items-center justify-center items-center  ">
              <div className="flex flex-auto max-h-48 w-2/5 mx-auto ">
                
                <svg
                    className="mx-auto h-14 w-14 text-gray-400 cursor-pointer"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="True"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
              </div>
              <p className="pointer-none text-gray-500 ">
                <span className="text-sm">Drag & drop an image or </span>
                <span className="text-blue-600 hover:underline">
                  select a file
                </span>{" "}
              </p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>


      <p className="text-sm text-gray-300">
        <span>File type: png, jpg and jpeg</span>
      </p>
      <div>
        <button
          type="submit" 
          className="bg-gray-700 my-5 w-full flex justify-center text-gray-100 p-4 rounded-md tracking-wide
                              font-semibold  focus:outline-none focus:shadow-outline hover:bg-gray-900 shadow-lg cursor-pointer transition ease-in duration-300"
        >
          Upload
        </button>
      </div>
    </form>
  </div>
</div>


  )}

export default ProductForm