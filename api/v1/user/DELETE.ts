import { Request, Response } from "express";

export default function (req:Request,res:Response){
    res.json("THIS IS A DELETE REQUEST HANDLER !")
}