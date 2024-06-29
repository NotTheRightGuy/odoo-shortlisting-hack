import { exampleAtom } from "../atoms/example";
import { useRecoilState } from "recoil";
/*
 * Custom hook to use the exampleAtom.
 * @returns A tuple containing the current value and a function to update the value.
 */
export const useExample = () => {
  const [exampleValue, setExampleValue] = useRecoilState(exampleAtom);

  return [exampleValue, setExampleValue];
};
