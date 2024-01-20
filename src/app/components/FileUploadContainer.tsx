'use client'
import React, { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/solid'
import FileUpload from './FileUpload';

const FileUploadContainer = () => {
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }
    return (
        <FileUpload handleFileChange={handleFileChange} />
    );
};

export default FileUploadContainer;
