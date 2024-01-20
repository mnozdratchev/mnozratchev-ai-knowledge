import { useEffect, useState } from "react"
import { useKnowledgeBases } from "../api/knowledgeBases/useKnowledgeBases"
import KnowledgeBasesTable from "./KnowledgeBasesTable"
export interface KnowledgeBaseTableData {
    id: string,
    name: string,
    uploadedOn: string,
    type: string
}

const KnowledgeBases = () => {
    const { isLoading: knowledgeBasesAreLoading, data: knowledgeBases } = useKnowledgeBases()
    const [mappedBases, setMappedBases] = useState<KnowledgeBaseTableData[]>([])
    useEffect(() => {
        if (!knowledgeBasesAreLoading) {
            setMappedBases(mapKnowledgeBases())
        }
    }, [knowledgeBases])

    const mapKnowledgeBases = (): KnowledgeBaseTableData[] => {
        if (!knowledgeBasesAreLoading && knowledgeBases) {
            return knowledgeBases?.map((base) => {
                return { id: base.id, name: base.name, uploadedOn: base.creation_date, type: "folder" }
            })
        }
        return []
    }

    return (
        <KnowledgeBasesTable knowledgeBaseTableData={mappedBases} />
    )
}
export default KnowledgeBases