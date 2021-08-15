import { Request, Response } from "express";

import Video from "./../models/video";

const courseCtrl = {

    /**
     * pegar videos
     */
    getVideos: async(req: Request, res: Response) =>{
        try {
            const video = await Video.find();
            if(!video) return res.status(500).json({msg:"video does not exist"})
    
            res.json(video)

        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },



    /**
     * pegar video id
     */
    getVideoById: async(req: Request, res: Response) =>{
        try {
            const { id } = req.body;

            const video = await Video.findById({user: id});
            if(!video) return res.status(500).json({msg:"video does not exist"});
    
            res.json(video);

        } catch (error) {
            return res.status(500).json({msg:error.message});
        }
    },



}

export default courseCtrl;