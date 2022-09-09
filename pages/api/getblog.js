import * as fs from 'fs'

export default function handler(req, res){
   fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
      if(err){
         res.status(500).json({error: 'The blog you are looking for was not found.'})
      }else{
         // console.log(req.qeury.slug)
         res.status(200).json(JSON.parse(data));
      }
   })
}