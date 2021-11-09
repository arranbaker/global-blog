import { storage } from "../config/FirebaseConfig";
import { deleteObject, ref } from "@firebase/storage";
import { db } from "../config/FirebaseConfig";
import { doc, deleteDoc } from "@firebase/firestore";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

const useRemove = (url, id) => {

    const { userId } = useAuth();
    const fileId = id
    const fileUrl = url

    useEffect(() => {
        if (fileUrl !== '') {
            const storeRef = ref(storage, `${fileUrl}`);

            const unsubscribe = deleteObject(storeRef).then(async () => {
                await deleteDoc(doc(db, `${userId}`, 'folder', 'images', `${fileId}`));
            })

            return unsubscribe;

        }

    }, [fileId, fileUrl, userId])
}

export default useRemove;