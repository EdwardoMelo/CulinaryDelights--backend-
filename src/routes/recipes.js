import  express  from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get('/', async(req, res)=>{
    try {
        const response = await RecipeModel.find({})
        res.json(response);
    } catch (error) {
        res.json(error)
    }
});

router.get("/savedRecipes/:userID", async(req, res)=>{ //return the entire recipe
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json({savedRecipes});
    } catch (error) {
        res.json(error);
    }
});

router.get("/savedRecipes/ids/:userID", async(req, res)=>{ //returns only the id's, not the entire recipeOBJ
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });

        res.json(savedRecipes.map((item)=>(item._id)));
    } catch (error) {
        res.json(error);
    }
});

router.post("/", verifyToken, async(req, res)=>{

    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error)
    }
});

router.put("/",verifyToken, async(req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.body.recipeID);
        const user = await UserModel.findById(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({ savedRecipes: user.savedRecipes });
        
    } catch (error) {
        res.json(error)
    }
});
router.delete("/savedRecipes/:userID", verifyToken, async(req, res) =>{
    try {
        const user = await UserModel.findById(req.params.userID);
        const index = user.savedRecipes.indexOf(req.body.recipeID);
        user.savedRecipes.splice(index, 1);
        await user.save();
        res.json({savedRecipes: user.savedRecipes});
    } catch (error) {
        res.json(error)
    }
});




export{ router as RecipeRouter };
