import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'

export default function Feed() {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/get');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);

    return (

        <div className="grid gap-16 mx-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

            {blogPosts.map((post) => (
                <motion.div

                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black w-full shadow-lg h-fit rounded-lg overflow-hidden"
                >
                    <img
                        src={post.Image}
                        alt="Blog Post"
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <AiOutlineCalendar className="mr-2" />
                            {post.date}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                            <FiUser className="mr-2" />
                            {post.Author}
                        </div>
                        <p className="text-gray-700 mt-4"></p>
                        <button className="bg-[#FF6701] text-white px-4 py-2 rounded-md mt-4">
                            Read More
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

    )
}