'use client'
import React from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/solid'

interface IFileUploadProps {
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FileUpload = ({ handleFileChange }: IFileUploadProps) => {
    return (
        <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-96 h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <CloudArrowUpIcon className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
        </div>
    );
};

export default FileUpload;
