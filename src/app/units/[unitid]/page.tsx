'use client'
import { DocumentTextIcon, FolderIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUnits } from '../../api/units/useUnits';
import { useParams, useSearchParams } from 'next/navigation';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid';

interface VersionView {
    name: string,
    version: string
    uploadedOn: string,
    type: string
}

export default function KnowledgeBase() {
    const searchparams = useSearchParams()
    const { unitid } = useParams()
    const { isLoading: unitsAreLoading, data: units } = useUnits({ variables: { knowledgeBaseId: searchparams.get("knowledgebaseid") as string } })
    const [mappedBases, setMappedBases] = useState<VersionView[]>([])
    const [actionsOpened, setActionsOpened] = useState(false)

    useEffect(() => {
        if (!unitsAreLoading) {
            setMappedBases(mapKnowledgeBases())
        }
    }, [units])

    const mapKnowledgeBases = (): VersionView[] => {
        if (!unitsAreLoading && units) {
            const filteredUnit = units.filter((unit) => unit.id === unitid)[0]
            return filteredUnit.versions.map((version) => {
                return { name: filteredUnit.name, version: version.name, uploadedOn: filteredUnit.creation_date, type: "file" }
            }).reverse()
        }
        return []
    }

    const handleOpenActions = () => {
        setActionsOpened(!actionsOpened)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="text-gray-100 min-h-screen w-screen pr-44 pl-44 pt-10">
                <div className="py-8 px-6">
                    <h1 className="text-4xl font-semibold mb-6">Versions</h1>
                    <div className="rounded-lg shadow">
                        <table className="w-full">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded on</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800 divide-y divide-gray-700">
                                {mappedBases.map((file, index) => (
                                    <tr key={index} className={file.type === 'folder' ? 'hover:bg-gray-700 cursor-pointer' : ''}>
                                        <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                            {file.type !== 'file' ? (
                                                <Link href={`/units/${units!![index].id}`}>
                                                    <FolderIcon className="flex-shrink-0 h-5 w-5 text-gray-500" />
                                                    <span className="ml-4">{file.name}</span>
                                                </Link>) : (
                                                <>
                                                    <DocumentTextIcon className="flex-shrink-0 h-5 w-5 text-gray-500" />
                                                    <span className="ml-4">{file.name}</span>
                                                </>)}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{file.uploadedOn}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{file.version}</td>
                                        <td className="relative px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <EllipsisVerticalIcon className="flex-shrink-0 h-5 w-5 text-gray-500 hover:bg-gray-700 cursor-pointer" onClick={handleOpenActions} />
                                            {actionsOpened && (
                                                <div id="dropdownDots" className="origin-top-right border absolute right-0 mt-2 w-22 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                        <li className="flex px-4 py-2 hover:bg-gray-700 items-center justify-end space-x-2">
                                                            <div className="hover:bg-gray-700 flex items-center justify-center space-x-2 p" onClick={handleOpenActions}>
                                                                <PlusIcon className="h-4 w-4" />
                                                                <p>Neue Version</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main >
    )
}
