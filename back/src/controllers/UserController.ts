import { Request, Response } from "express";

class UserController {
  public helloworld(req: Request, res: Response) {
    return res.json("Hello world");
  }
}

export default UserController;
