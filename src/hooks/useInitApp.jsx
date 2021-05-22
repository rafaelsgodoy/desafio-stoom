import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPizzaDoDia, getSabores, getMassas, getTamanhos } from "../store/slices/itemsSlice";

const useInitApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzaDoDia());
    dispatch(getSabores());
    dispatch(getMassas());
    dispatch(getTamanhos());
  })
}
export default useInitApp;