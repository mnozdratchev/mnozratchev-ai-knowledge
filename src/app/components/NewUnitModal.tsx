import { Dispatch, SetStateAction, useState } from "react"
import { useAddNewUnitVersion } from "../api/units/useAddNewUnitVersion"
import { useCreateUnit } from "../api/units/useCreateUnit"

interface INewVersionModalProps {
    isModalOpen: boolean
    unitId: string,
    knowledgeBaseId: string,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
function NewUnitModal({ isModalOpen, unitId, knowledgeBaseId, setIsModalOpen }: INewVersionModalProps) {
    const { mutate } = useCreateUnit()
    const [unitName, setUnitName] = useState("")
    const [description, setDescription] = useState("")
    const [version, setVersion] = useState("")
    const [versionDescription, setVersionDescription] = useState("")
    const [file, setFile] = useState<File>()

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append("doc", file!!)
        formData.append("kunit_name", unitName)
        formData.append("kunit_desc", description)
        formData.append("kunit_vers_name", version)
        formData.append("kunit_vers_desc", versionDescription)
        formData.append("user_id", "igor")
        mutate({
            knowledgeBaseId: knowledgeBaseId,
            newUnit: formData
        })
    }

    return (<>
        {isModalOpen && (
            <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center p-4">
                <div className="border border-black bg-white rounded-lg p-4 max-w-lg w-full">
                    <h2 className="text-lg text-gray-700">Neue Unit hinzufügen</h2>
                    <form>
                    <label htmlFor="unitName" className="block text-sm font-medium text-gray-500">
                            Unitname</label>
                        <input
                            type="text"
                            name="unitName"
                            id="unitName"
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            placeholder="Geben Sie den Unitnamen ein"
                            onChange={(e) => setUnitName(e.target.value)}
                        />
                        <label htmlFor="versionDescription" className="block text-sm font-medium text-gray-500">Beschreibung</label>
                        <textarea
                            name="versionDescription"
                            id="versionDescription"
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            placeholder="Beschreibung der Unit"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                           <label htmlFor="unitName" className="block text-sm font-medium text-gray-500">
                            Versionname</label>
                        <input
                            type="text"
                            name="unitName"
                            id="unitName"
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            placeholder="Geben Sie den Versionsnamen ein"
                            onChange={(e) => setVersion(e.target.value)}
                        />
                        <label htmlFor="versionDescription" className="block text-sm font-medium text-gray-500">Versionbeschreibung</label>
                        <textarea
                            name="versionDescription"
                            id="versionDescription"
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            placeholder="Beschreibung der Version"
                            onChange={(e) => setVersionDescription(e.target.value)}
                        />

                        <label htmlFor="pdfUpload" className="block text-sm font-medium text-gray-500">PDF hochladen</label>
                        <input
                            type="file"
                            name="pdfUpload"
                            id="pdfUpload"
                            accept=".pdf"
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            onChange={(e) => setFile(e.target.files!![0])}
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Abbrechen
                            </button>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                onClick={handleSubmit}
                            >
                                Speichern
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        )}
    </>
    )
}

export default NewUnitModal