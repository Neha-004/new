
import ConnectDB from '@/Utils/ConnectDB';

ConnectDB();
export default  async function (req, res){
    if (req.method === 'POST') {
 const { name, categoryimage,  } = req.body
 try{
    const category= new Category ({
        name,
        categoryimage,
        
        

    });
    await category.save();
    req.status(201).json({success:true,data:category});

 }catch(error){
    res.status(400).json({success: false});
 }
    }
}