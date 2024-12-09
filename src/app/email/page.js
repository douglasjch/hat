// "use client"
// import FormComp from "./components/formComp"
import React from 'react'

export default function EmailPage() {
  return (
    <section>
      <div>
        <h1>Email Page</h1>

      </div>

    </section>
  )
}








// export default function EmailPage() {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target["email"].value);
//     console.log(e.target["message"].value);
//   }



//   return (
//     <section>
//       <div>
//         <h1>Email Page</h1>
//       </div>
//         <div>
//           <h2>Send Email</h2>
//         </div>

//         <div>
//           <form onSubmit={onSubmit}>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="text-sm leading-7 text-gray-600">
//                   Email
//               </label>

//               <input 
//               type="email" 
//               name="email"
//               id="email"
//               className="w-full m-4 bg-white" />
//             </div>
//             <br />
//             <div className="relative mb-4">
//               <label className="text-sm leading-7"
//                htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="w-full m-4 bg-white">
//               </textarea>
//             </div>
//             <button
//             className="bg-blue-400">
// click here
//             </button>



//           </form>
//         </div> 
    
//     </section>
//   )
// }
