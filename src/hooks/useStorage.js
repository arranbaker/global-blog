import { useState, useEffect } from "react";
import { storage, db } from "../config/FirebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../contexts/authContext";


const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const { userId } = useAuth();


    useEffect(() => {

        const storageRef = ref(storage, 'images/' + file.name);
        const collectionRef = doc(collection(db, `${userId}/folder/images`));
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(url);
            const createdAt = serverTimestamp();
            await setDoc(collectionRef, { url, createdAt });
        });

    }, [file, userId]);

    return { progress, url, error }
}

export default useStorage;