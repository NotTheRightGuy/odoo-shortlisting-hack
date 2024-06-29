import { atom } from "recoil";

/*
 * Example atom
 *
 * This atom represents an example state in your application.
 * It can be used to store and update a specific value.
 */

export const exampleAtom = atom<string>({
  key: "exampleAtom",
  default: "",
});
