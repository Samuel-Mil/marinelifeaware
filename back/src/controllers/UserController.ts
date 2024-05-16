import { Request, Response } from "express";
import {UserModel, IUser} from "../models/UserModel";

class UserController {
  public async list(){

  }
  
  public async create(req: Request, res: Response){
    const {name, email,password}: IUser = req.body;
    const model = new UserModel();
    const user = await model.create({name, email, password});
    
    return res.json({user});
  }
}

export default UserController;
