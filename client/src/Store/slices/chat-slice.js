// export const createChatSlice = (set, get) => ({
//     selectedChatType:undefined,
//     selectedChatData:undefined,


//     selectedChatMessages:[],
//     setSelectedChatType: (selectedChatType) => set({selectedChatType }),
//     setSelectedChatData: (selectedChatData )=> set({selectedChatData}),
    
//     setSelectedChatMessages:(selectedChatMessages) =>
//        set({selectedChatMessages}),
//     closeChat:()=>
//          set({
//          selectedChatData:undefined ,
//          selectedChatType:undefined,
//          selectedChatMessages:[],
        
//         }),
//         addMessage:(message)=>{
//             const selectedChatMessages = get().selectedChatMessages;
//             const selectedChatType = get().selectedChatType;


            
//             set({
//                 selectedChatMessages: [
//                   ...selectedChatMessages,
//                   {
//                     ...message,
//                     recipient:
//                       selectedChatType === "channel"
//                         ? message.recipient
//                         : message.recipient._id,
//                     sender:
//                       selectedChatType === "channel"
//                         ? message.sender
//                         : message.sender._id,
//                   },
//                 ],
//               });

//         }

// }); 






// export const createChatSlice = (set, get) => ({
//   selectedChatType: undefined,
//   selectedChatData: undefined,
//   selectedChatMessages: [],
//   directMessagesContacts: [],

//   setSelectedChatType: (selectedChatType) => set({ selectedChatType }),

//   setSelectedChatData: (selectedChatData) => set({ selectedChatData }),

//   setSelectedChatMessages: (selectedChatMessages) => set({ selectedChatMessages }),

//   setDirectMessagesContacts: (directMessagesContacts) => set({ directMessagesContacts }),

//   closeChat: () => set({
//       selectedChatData: undefined,
//       selectedChatType: undefined,
//       selectedChatMessages: [],
//   }),

//   addMessage: (message) => {
//       const { selectedChatMessages, selectedChatType } = get();

//       const formattedMessage = {
//           ...message,
//           recipient: selectedChatType === "channel" ? message.recipient : message.recipient?._id,
//           sender: selectedChatType === "channel" ? message.sender : message.sender?._id,
//       };

//       set({
//           selectedChatMessages: [...selectedChatMessages, formattedMessage],
//       });
//   },
// });


export const createChatSlice = (set, get) => ({
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessages: [],
  directMessagesContacts: [],

  setSelectedChatType: (selectedChatType) => set({ selectedChatType }),

  setSelectedChatData: (selectedChatData) => set({ selectedChatData }),

  setSelectedChatMessages: (selectedChatMessages) => set({ selectedChatMessages }),

  setDirectMessagesContacts: (directMessagesContacts) => set({ directMessagesContacts }),

  closeChat: () => set({
    selectedChatData: undefined,
    selectedChatType: undefined,
    selectedChatMessages: [],
  }),

  addMessage: (message) => {
    const { selectedChatMessages, selectedChatType } = get();

    const formattedMessage = {
      ...message,
      recipient: selectedChatType === "channel" ? message.recipient : message.recipient?._id,
      sender: selectedChatType === "channel" ? message.sender : message.sender?._id,
    };

    // Optional: Log the formatted message for debugging
    console.log('Formatted Message:', formattedMessage);

    set({
      selectedChatMessages: [...selectedChatMessages, formattedMessage],
    });
  },
});
