import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Targets"));
    const Targets = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return Targets;
  } catch (error) {
    console.error("Error fetching Targets: ", error);
    return [];
  }
};
