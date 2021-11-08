import React, { useState } from 'react';

const Add = ({addTodo}) => {
    const [form, setForm] = useState({
        name: "",
        period: "",
        done: false
    })
    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name]:e.target.value 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(form)
    }
    return (
        <>
        <form class="w-full max-w-sm mt-6 ml-6" onSubmit={handleSubmit}>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Todo Name
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="text"
                name="name" 
                value={form.name}
                onChange={handleChange}
                />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Todo Period
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-period" 
                type="text" 
                name="period"
                value={form.period}
                onChange={handleChange}
                 />
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                type="submit"
                >
                    Save Todo
                </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Add;