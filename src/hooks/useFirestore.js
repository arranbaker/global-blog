import { useState, useEffect } from "react";
import { db } from "../config/FirebaseConfig";
import { query, onSnapshot, collection, orderBy } from "@firebase/firestore";

const useFirestore = (input) => {

    const [files, setFiles] = useState([])
    const [imageLoading, setImageLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, input), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setFiles(documents)
        });

        setImageLoading(null)

        return unsubscribe;

    }, [input])

    return { files, imageLoading }
}

export default useFirestore;