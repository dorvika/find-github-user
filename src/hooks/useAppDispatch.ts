import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

/**
 * @description Redux dispatch with types added
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
