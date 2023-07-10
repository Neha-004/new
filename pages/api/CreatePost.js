import ConnectDB from '../../Utils/ConnectDB';
import Post from '../../models/Post';



ConnectDB();
export default async function (req, res) {
   if (req.method === 'POST') {
      const { title, Image, header, description, Author, Date } = req.body
      try {
         const post = new Post({
            title,
            Image,
            header,
            description,
            Author,
            Date,

         });
         await post.save();
         res.status(201).json({ success: true, data: post });

      } catch (error) {
         res.status(400).json({ success: false });
         console.log(error)
      }
   }
}