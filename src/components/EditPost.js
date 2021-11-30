import axios from 'axios';
import React, { useRef, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const EditPost = ({id}) => {
    
    const titleref = useRef(null);
    const descriptionref = useRef(null);
    const imageref = useRef(null);
    

    async function onSubmit(e) {
        e.preventDefault();
        const titleedit = titleref.current.value;
        const descriptionedit = descriptionref.current.value;
        const imageedit =  imageref.current.value;

        if (descriptionedit === '' && titleedit === '' && imageedit === '') return alert('Llena el titulo y la descripcion');

        console.log(descriptionedit);

        const res = await axios.put(`https://posts-pw2021.herokuapp.com/api/v1/post/update/${id}`, 
        { title : titleedit, description : descriptionedit, image : imageedit }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

    }

    return (
        <form id="form" onSubmit={onSubmit} className="bg-white bg-opacity-30 mt-4 rounded-2xl p-4 text-white font-bold space-y-3">
            <div className="flex flex-col text-sm">
                <label htmlFor="title">Titulo</label>
                <input className="text-gray-800 rounded-full px-2 py-1 my-1" type="text" name="title" id="title" ref ={titleref} />
            </div>
            <div className="flex flex-col text-sm">
                <label htmlFor="description">Descripcion</label>
                <input className="text-gray-800 rounded-full px-2 py-1 my-1" type="text" name="description" id="description" ref = {descriptionref}/>
            </div>
            <div className="flex flex-col text-sm">
                <label htmlFor="image">Imagen</label>
                <input className="text-gray-800 rounded-full px-2 py-1 my-1" type="text" name="image" id="image" ref = {imageref}/>
            </div>
            <div className="flex flex-row text-sm items-center justify-center">
                <button type="submit" className="bg-blue-500 w-2/3 rounded-2xl text-center flex py-1 justify-center items-center font-bold">
                    <CheckCircleIcon className="mr-2 h-5 w-5" />
                    Editar
                </button>
            </div>
        </form>
    );
};

export default EditPost;