// src/useStore.js

import {create} from 'zustand';

const useComponentStore = create((set) => ({
  selectedComponent: '',
  addedComponents: [],
  editing:false,
  selectedCardType: '',
  editComponentIndex: -1,
  pageTitleData: {
    title: '',
    subtitle: '',
    titleColor: '#000000',
    subtitleColor: '#000000',
    titleFont: 'Arial',
    subtitleFont: 'Arial',
    titleFontSize: 'text-4xl',
    subtitleFontSize: 'text-xl',
    titleAlign: 'left',
    subtitleAlign: 'left'
  },
imageData: {
    imageSrc:null,
    width: '',
    height: '',
    shadow: false,
  },
  setImageData: (data) => set((state) => ({
    imageData: { ...state.imageData, ...data },
  })),
  contactCardData: {
    text: '',
    description: '',
    Phno: '',
    backgroundColor: 'orange',
    textColor: 'white',
    fontSize: 16,
    descriptionSize: 10 
  },
  callToAskData: {
    name: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    questions: '',
    icons: [],
    address: '',
    preferredContactTime: '',
    additionalNotes: '',
    attachment: null,
  },
  buttonData: {
    buttonText: '',
    buttonColor: '#007BFF',
    fontSize: 16,
    fontColor: '#FFFFFF',
    borderRadius: 5,
  },
  registeredCardData: {
    title: '',
    titleAlign:'left',
    description: '',
    buttonText: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    titleSize: 16,
    discriptionAndButtonSize : 20,
    buttonColor: '#ff7f00',
  },
  mapData: {
    lat: 17.4932,
    lng: 78.3997,
    zoom: 13,
    height: '400px',
    width: '100%',
    markerText: 'Hello!',
  },
  paragraphData: {
    content: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontSize: 16,
  },
  serviceCardData: {
    title: '',
    description: '',
    icon: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
  },
  serviceListData: [{ text: '', icon: 'reply' }],

  setSelectedComponent: (component) => set({ selectedComponent: component }),
  setAddedComponents: (component) => set((state) => ({
    addedComponents: [...state.addedComponents, component]
  })),
  setSelectedCardType: (cardType) => set({ selectedCardType: cardType }),
  setPageTitleData: (data) => set((state) => ({ pageTitleData: { ...state.pageTitleData, ...data } })),
  setEditComponentIndex : (index) => set({ editComponentIndex: index }),
  
  setContactCardData: (data) => set((state) => ({ contactCardData: { ...state.contactCardData, ...data } })),
  setCallToAskData: (data) => set((state) => ({ callToAskData: { ...state.callToAskData, ...data } })),
  setButtonData: (data) => set((state) => ({ buttonData: { ...state.buttonData, ...data } })),
  setRegisteredCardData: (data) => set((state) => ({ registeredCardData: { ...state.registeredCardData, ...data } })),
  setMapData: (data) => set((state) => ({ mapData: { ...state.mapData, ...data } })),
  setParagraphData: (data) => set((state) => ({ paragraphData: { ...state.paragraphData, ...data } })),
  setServiceCardData: (data) => set((state) => ({ serviceCardData: { ...state.serviceCardData, ...data } })),
  setServiceListData: (data) => set((state) => ({ serviceListData: data })),
  resetStore: () => set({
    selectedComponent: '',
    addedComponents: [],
    selectedCardType: '',
    pageTitleData: {
      title: '',
      subtitle: '',
      titleColor: '#000000',
      subtitleColor: '#000000',
      titleFont: 'Arial',
      subtitleFont: 'Arial',
      titleFontSize: 'text-4xl',
      subtitleFontSize: 'text-xl',
      titleAlign: 'left',
      subtitleAlign: 'left'
    },
    imageData: {
      imageSrc:null,
      width: '',
      height: '',
      shadow: false,
    },
    contactCardData: {
      text: '',
      description: '',
      Phno: '',
      backgroundColor: 'orange',
      textColor: 'white',
      fontSize: 16,
      descriptionSize: 10 
    },
    callToAskData: {
      name: '',
      email: '',
      phoneNumber: '',
      inquiryType: '',
      questions: '',
      icons: [],
      address: '',
      preferredContactTime: '',
      additionalNotes: '',
      attachment: null,
    },
    buttonData: {
      buttonText: '',
      buttonColor: '#007BFF',
      fontSize: 16,
      fontColor: '#FFFFFF',
      borderRadius: 5,
    },
    registeredCardData: {
      title: '',
      titleAlign:'left',
      description: '',
      buttonText: '',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      titleSize: 16,
      discriptionAndButtonSize : 20,
      buttonColor: '#ff7f00',
    },
    mapData: {
      lat: 17.4932,
      lng: 78.3997,
      zoom: 13,
      height: '400px',
      width: '100%',
      markerText: 'Hello!',
    },
    paragraphData: {
      content: '',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      fontSize: 16,
    },
    serviceCardData: {
      title: '',
      description: '',
      icon: '',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    serviceListData: [{ text: '', icon: 'reply' }],
  }),
}));

export default useComponentStore;
