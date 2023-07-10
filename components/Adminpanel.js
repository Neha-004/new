import { useEffect, useState } from 'react';

const Adminpanel = () => {
 const [title, setTitle] = useState('');
 const [Image, setImage] = useState('');
 const [header, setHeader] = useState('');
 const [description, setDescription] = useState('');
 const [Author, setAuthor] = useState('');
 const [Date, setDate] = useState('');
 const [blogPosts, setBlogPosts] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            Image,
            header,
            description,
            Author,
            Date,
        };
        try {
            const response = await fetch('/api/CreatePost', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Blog post created successfully');
            } else {
                console.error('Failed to create blog post');
            }
        } catch (error) {
            console.error(error);
        }
    };
      return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto  p-4">
            <div className="mb-4">
                <label htmlFor="title" className="block text-lg mb-1">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="headerImage" className="block text-lg mb-1">
                    Header Image URL
                </label>
                <input
                    type="text"
                    id="headerImage"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Header Image URL"
                    value={Image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="header" className="block text-lg mb-1">
                    Header
                </label>
                <textarea
                    id="header"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Header"
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-lg mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="author" className="block text-lg mb-1">
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Author"
                    value={Author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block text-lg mb-1">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Date"
                    value={Date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Publish
            </button>
           
        </form>
    );
};

export default Adminpanel;