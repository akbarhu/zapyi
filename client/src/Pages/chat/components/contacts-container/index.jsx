
// import { useEffect } from 'react'

// import Zapyilogo from '@/assets/Zapyi.png'
// import ProfileInfo from './components/profile_into'
// import NewDm from './components/new-dm'
// import { apiClient } from '@/lib/api-client'
// import { GET_DM_CONTACTS_ROUTES } from '@/utils/constants'
// import { useAppStore } from '@/Store'
// import ContactList from '@/components/contact-list'



// const ContactsContainer = () => {

 
//    const {setDirectMessagesContacts, directMessagesContacts} = useAppStore()
    
//   useEffect(() => {
//     const getContacts = async () =>{
//       const response = await apiClient.get(GET_DM_CONTACTS_ROUTES,
//         {withCredentials:true,


//         });
      
//         if(response.data.contacts){
//         setDirectMessagesContacts(response.data.contacts)
//         }
       
//     }

//     getContacts()
  
//   }, [])

//   return (
//     <div className="relative md:w-[35vw] lg:[30vw] xl:w-[20vw] bg-[#1b1c24]  border-r-2 border-[#2f303b] w-full">
        
//         <div className="pt-3">

//          <div className="logo flex items-center gap-2">
//             <div className='w-[60px]'>
//            <img src={Zapyilogo} alt="" className='object-cover ' />
//           </div>
//          <h1 className='text-3xl text-[#]'>
//             Zapyi

//          </h1>
//          </div>

//         </div>


//         <div className="my-5">
//           <div className='flex items-center justify-between pr-10'>

//                   <Title  text="Direct messages" />
//                   <NewDm />
//           </div>

//           <div className='max-h-[30vh] overflow-y-auto scrollbar-hidden'>
//             <ContactList    contacts={directMessagesContacts} />
             
//           </div>
         
//         </div> 
//         <div className="my-5">
//           <div className='flex items-center justify-between pr-10'>

//                   <Title  text="Channels" />
//           </div>
         
//         </div> 
        

//         <ProfileInfo/>
       

//     </div>
//   )
// }

// export default ContactsContainer


  
// // //   export default Logo;

// const Title = ({text}) => {
//   return (
//    <h6 className='uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>
    
//    {text}
   
//    </h6>
//   )
// }

import { useEffect } from 'react';
import Zapyilogo from '@/assets/Zapyi.png';
import ProfileInfo from './components/profile_into';
import NewDm from './components/new-dm';
import { apiClient } from '@/lib/api-client';
import { GET_DM_CONTACTS_ROUTES } from '@/utils/constants';
import { useAppStore } from '@/Store';
import ContactList from '@/components/contact-list';

const ContactsContainer = () => {
  const { setDirectMessagesContacts, directMessagesContacts } = useAppStore();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await apiClient.get(GET_DM_CONTACTS_ROUTES, { withCredentials: true });

        if (response.data.contacts) {
          setDirectMessagesContacts(response.data.contacts);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        // Handle the error accordingly (e.g., set an error state or display a message)
      }
    };

    getContacts();
  }, [setDirectMessagesContacts]); // Add dependencies if needed

  return (
    <div className="relative md:w-[35vw] lg:[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full">
      <div className="pt-3">
        <div className="logo flex items-center gap-2">
          <div className='w-[60px]'>
            <img src={Zapyilogo} alt="Zapyi Logo" className='object-cover' />
          </div>
          <h1 className='text-3xl text-white'> {/* Assuming text color should be white */}
            Zapyi
          </h1>
        </div>
      </div>

      <div className="my-5">
        <div className='flex items-center justify-between pr-10'>
          <Title text="Direct messages" />
          <NewDm />
        </div>

        <div className='max-h-[30vh] overflow-y-auto scrollbar-hidden'>
          <ContactList contacts={directMessagesContacts} />
        </div>
      </div>

      <div className="my-5">
        <div className='flex items-center justify-between pr-10'>
          <Title text="Channels" />
        </div>
      </div>

      <ProfileInfo />
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <h6 className='uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>
      {text}
    </h6>
  );
};

export default ContactsContainer;
