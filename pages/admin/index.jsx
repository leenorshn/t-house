import axios from "axios";

 const Admin = ({message,contact}) => {
    return (
        <div>
           
    <div className="flex items-start space-x-10 divide-y divide-gray-200 mx-auto max-w-6xl">
   
    <div className="flex flex-col ">

<h2 className="my-5 text-lg font-semibold text-blue-600">Liste de personnes suscrit</h2>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              
              <th scope="col" className="px-6 py-3 text-xs bg-blue-600 text-white font-medium tracking-wider text-left uppercase">
                phone
              </th>
              
              
            </tr>
          </thead>
          <tbody>


         
            {contact.map(c=>(<tr className="bg-white">
              
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {c.phone}
              </td>
              
              
            </tr>))}
           
           

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
</div>
<div className="flex flex-col flex-1 ">
<h2 className="my-5 text-xl font-semibold text-blue-600">Messages des utilisateurs</h2>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 bg-black text-xs font-medium tracking-wider text-left text-gray-50 uppercase">
                nom
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider bg-black text-left text-gray-50 uppercase">
                phone
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider bg-black text-left text-gray-50 uppercase">
                message
              </th>
              
            </tr>
          </thead>
          <tbody>


            {message.map(m=>(<tr className="bg-white">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                {m.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
             {m.phone}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
             {m.message}
              </td>
              
            </tr>))}
            
           

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  


    </div>

  {/* <form className="flex min-h-screen rounded-md flex-col space-y-4 bg-blue-100 py-10 items-center justify-center" method="post" action="" id="login_form">
  <h1 className="text-3xl text-blue-600">Login</h1>
 
  <input className="px-4 text-center lg:max-w-lg w-80 py-2 shadow rounded-md" type="password" name="pass" placeholder="****">
  <button className="px-8 py-2 rounded-md shadow text-white bg-blue-600" type="submit" name="submit_pass" value="DO SUBMIT">Connexion</button>
  
  <p><font style="color:red;"><?php echo $error;?></font></p>
 </form> */}
 


        </div>
    )
}

export async function getStaticProps(context) {
   const tt= await axios.get("http://localhost:3000/api/contact"); 
   console.log(">>>>>"+tt);
   const ss= await axios.get("http://localhost:3000/api/suscription"); 

   const contacts=await tt.data
   const subscription=await ss.data;
    return {
      props: {
          contact:subscription,
          message:contacts

      }, // will be passed to the page component as props
    }
  }

export default Admin;
