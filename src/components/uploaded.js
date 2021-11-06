import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const Upload = ({ file, setFile }) => {

    const { url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <>
            {file && <div>Complete</div>}
        </>
    );
}

export default Upload;