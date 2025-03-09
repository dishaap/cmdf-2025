import { verifyIdToken } from "@/lib/firebaseAdmin";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const decodedToken = await verifyIdToken(token);
  if (!decodedToken) return res.status(401).json({ error: "Invalid Token" });

  req.user = decodedToken;
  next();
};
