import React, { useState } from "react";
import Upload from "./uploaded";

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];


    const handleChange = (event) => {
        let selected = event.target.files[0];
        console.log(selected)

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Select an image file.')
        }
    }

    return (
        <div className='upload-form-container'>
            <form>
                <label htmlFor='file' onChange={handleChange}>
                    +
                    <input type='file' id='file'></input>
                </label>
                <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {file && <div className='file'>File Selected</div>}
                    {file && <Upload file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    );


}

export default UploadForm;