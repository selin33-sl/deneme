import express, { Request, Response } from "express";
import { Todo } from "../models/user_model";

const router = express.Router();

// router.get("/",(req:Request,res:Response) =>{
//     //const data=req.url
//     res.status(200).json({
//         message:"API IS ROCKING",
//     })
// });

// router.get("/about",(req:Request,res:Response) =>{
//     //const data=req.url
//     res.status(200).json({
//         message:"THIS IS ABOUT PAGE",
//     })
// });

//Post request

router.post("/add", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const dataItem = Todo.set({ title, description });
  await dataItem.save();
  return res.status(200).json({
    data: dataItem,
  });
});

//Get request

router.get("/", async (req: Request, res: Response) => {
  try {
    //const {title,description}=req.body;
    const dataItem = await Todo.find({});
    //await dataItem.save();
    return res.status(200).json({
      data: dataItem,
    });
  } catch (error) {
    console.log(error);
  }
});

//Delete request

router.delete("/delete", async (req: Request, res: Response) => {
  const filter = {
    id: req.body.id,
  };
  const dataItem = await Todo.deleteOne(filter)
    .then((data) =>
      res.json({
        data: data,
      })
    )

    .catch((error) => {
      return res.send(error);
    });
});

// Update request

router.put("/update", async (req: Request, res: Response) => {
  const filter = {
    id: req.body.id,
  };
  const updateData = {
    title: req.body.title,
    description: req.body.description,
  };
  const dataItem = await Todo.updateOne(filter, updateData, {
    new: true,
  })
    .then((data) =>
      res.json({
        data: data,
      })
    )

    .catch((error) => {
      return res.send(error);
    });
  console.log(dataItem);
});

// router.get("/profile",(req:Request,res:Response) =>{
//     //const data=req.url
//     res.status(200).json({
//         message:"THIS IS PROFILE PAGE",
//     })
// });

export { router };
