import { useAppStore } from "@/Store";
import { HOST } from "@/utils/constants";
import { getColor } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const ContactList = ({ contacts, isChannel = false }) => {
  const {
    selectedChatData,
    setSelectedChatData,
    setSelectedChatType,
    setSelectedChatMessages,
  } = useAppStore();

  const handleClick = (contact) => {
    if (isChannel) setSelectedChatType("channel");
    else setSelectedChatType("contact");
    setSelectedChatData(contact); 

    if (selectedChatData && selectedChatData._id !== contact._id) {
      setSelectedChatMessages([]);
    }

  };

  return (
    <div className="mt-5">
      {contacts.map((contact) => {
        console.log(`${HOST}/${contact.image}`); // Moved outside JSX
        
  

        return (
          <div
            key={contact._id}
            className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${
              selectedChatData &&( selectedChatData._id === contact._id)
                ? "bg-[#8417ff] hover:bg-[#8417ff]"
                : "hover:bg-[#f1f1f111]"
            }`}
            onClick={() => handleClick(contact)}
          >
            <div className="flex gap-5 items-center justify-start text-neutral-300">
              {
              !isChannel && (
                <Avatar className="h-10 w-10 rounded-full overflow-hidden">
                  {contact.image ? (
                 <AvatarImage
                 src={`${HOST}/${contact.image}`}
                 alt="profile"
                
                 className="object-cover w-12 h-12 bg-black rounded-full"
               />
                 
                  ) : (
                    <div
                      className={`
                         ${selectedChatData && selectedChatData._id === contact._id ? "bg-[#ffffff22] border-2 border-white/70" :getColor(contact.color)}
                        uppercase h-10 w-10 text-lg border-[1px] flex items-center justify-center rounded-full `}
                    >
                      {contact.firstName
                        ? contact.firstName.split("").shift()
                        : contact.email.split("").shift("")
                        }
                    </div>
                  )}
                </Avatar>
              )}

              {/* <div className="flex flex-row items-center gap-5">
               
                <span>
                  {contact.firstName && contact.lastName
                    ? `${contact.firstName} ${contact.lastName}`
                    : contact.email}
                </span>
              </div> */}

              {
                isChannel && <div className="bg-[#ffffff22] h-10 w-10 flex item-center justify-center rounded-full"> </div>
              }
              {
                isChannel ? <span>{contact.name}</span> : <span>{`${contact.firstName} ${contact.lastName}` }</span>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;


// import { useAppStore } from "@/Store";
// import { HOST } from "@/utils/constants";
// import { getColor } from "@/lib/utils";

// const ContactList = ({ contacts, isChannel = false }) => {
//   const {
//     selectedChatData,
//     setSelectedChatData,
//     setSelectedChatType,
//     setSelectedChatMessages,
//   } = useAppStore();

//   const handleClick = (contact) => {
//     if (isChannel) setSelectedChatType("channel");
//     else setSelectedChatType("contact");

//     if (selectedChatData && selectedChatData._id !== contact._id) {
//       setSelectedChatMessages([]);
//     }
//     setSelectedChatData(contact);
//   };

//   return (
//     <div className="mt-5">
//       {contacts.map((contact) => {
//         const imageUrl = `${HOST}/${contact.image}`;
        
//         // Log contact data for debugging
//         console.log("Image URL:", imageUrl);
//         console.log("Contact Data:", contact);

//         return (
//           <div
//             key={contact._id}
//             className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${
//               selectedChatData && selectedChatData._id === contact._id
//                 ? "bg-[#8417ff] hover:bg-[#8417ff]"
//                 : "hover:bg-[#f1f1f111]"
//             }`}
//             onClick={() => handleClick(contact)}
//           >
//             <div className="flex gap-5 items-center justify-start text-neutral-300">
//               {isChannel && (
//                 <div className="h-10 w-10 rounded-full overflow-hidden">
//                   {contact.image ? (
//                     <img
//                       src={imageUrl}
//                       alt="profile"
//                       onError={(e) => {
//                         console.error("Image failed to load, using fallback:", e.target.src);
//                         e.target.src = "/default-avatar.png"; // Fallback image
//                       }}
//                       className="w-12 h-12 bg-black rounded-full"
//                     />
//                   ) : (
//                     <div
//                       className={`uppercase h-10 w-10 text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(
//                         contact.color
//                       )}`}
//                     >
//                       {contact.firstName
//                         ? contact.firstName.charAt(0)
//                         : contact.email.charAt(0)}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="flex flex-row items-center gap-">
          
//                 <span>
//                   {contact.firstName && contact.lastName
//                     ? `${contact.firstName} ${contact.lastName}`
//                     : contact.email}
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ContactList;

