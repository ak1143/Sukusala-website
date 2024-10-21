import React, { useEffect } from 'react';
import useComponentStore from '../../store/useComponentStore';

const PageTitleForm = () => {

  const pageTitleData  = useComponentStore( state => state.pageTitleData );
  const setPageTitleData = useComponentStore( state => state.setPageTitleData);
  

  useEffect (()=>{
    console.log(pageTitleData)
  },[pageTitleData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPageTitleData({ ...pageTitleData, [name]: value }); // Updating the store with the new form values
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleEdit("pageTitle",pageTitleData);
  }



  return (
    <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      name="title"
      value={pageTitleData.title}
      onChange={handleChange}
      placeholder="Enter title"
      className="border p-2 mb-4 w-full"
    />

    <label>Subtitle</label>
    <input
      name="subtitle"
      value={pageTitleData.subtitle}
      onChange={handleChange}
      placeholder="Enter subtitle"
      className="border p-2 mb-4 w-full"
    />

    <label className='mb-4'>Title Color</label>
    <br />
    <input
      name="titleColor"
      type="color"
      value={pageTitleData.titleColor}
      onChange={handleChange}
      className="border mb-4"
    />
    <br />

    <label>Subtitle Color</label>
    <br />
    <input
      name="subtitleColor"
      type="color"
      value={pageTitleData.subtitleColor}
      onChange={handleChange}
      className="border mb-4"
    />
     <br />

    <label>Title Text Size</label>
    <select
      name="titleFontSize"
      value={pageTitleData.titleFontSize}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    >
      <option value="text-4xl">Large</option>
      <option value="text-3xl">Medium</option>
      <option value="text-2xl">Small</option>
    </select>

    <label>Subtitle Text Size</label>
    <select
      name="subtitleFontSize"
      value={pageTitleData.subtitleFontSize}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    >
      <option value="text-xl">Large</option>
      <option value="text-lg">Medium</option>
      <option value="text-md">Small</option>
    </select>

    {/* Alignment Field */}
    <label>Title Alignment</label>
    <select
      name="titleAlign"
      value={pageTitleData.titleAlign}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    >
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>
    <label>Subtitle Alignment</label>
    <select
      name="subtitleAlign"
      value={pageTitleData.subtitleAlign}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    >
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>
  </form>
);
};

export default PageTitleForm;
