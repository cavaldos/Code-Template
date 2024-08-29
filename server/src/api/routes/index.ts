import { Router } from "express";
import { Response } from "express";
const router = Router();
router.get("/auth", (res: Response) => {
  try {
    res.send("Hello World");
  } catch (err) {
    console.error(err);
  }
});
export default router;
