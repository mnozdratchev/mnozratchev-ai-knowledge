'use client'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { KnowledgeBaseTableData } from "./KnowledgeBases";
import { useRouter } from "next/navigation";


interface IBasicTableProps {
    knowledgeBaseTableData: KnowledgeBaseTableData[]
}
function KnowledgeBasesTable({ knowledgeBaseTableData }: IBasicTableProps) {
    const router = useRouter()

    const fileStructure = [
        { id: 2, name: 'Documents', type: 'folder', lastModified: '1 day ago' },
        { id: 3, name: 'Freistellung_Nozdratchev.pdf', type: 'file', lastModified: '4 minutes ago' },
        // ... weitere Dateien und Ordner
    ];

    const handleFolderClick = (id: string) => {
        router.push(`knowledgebase/${id}`)
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Knowledge Bases
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Erstellungsdatum</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {knowledgeBaseTableData.map((item) => (
                            <TableRow key={item.id} hover>
                                <TableCell className="hover:cursor-pointer" component="th" onClick={() => item.type === 'folder' && handleFolderClick(item.id)} scope="row">
                                    <div className="flex items-center">
                                        {item.type === 'folder' ? <FolderIcon /> : <InsertDriveFileIcon />}
                                        <span style={{ marginLeft: '4px' }}>{item.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{item.uploadedOn}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="more">
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};



export default KnowledgeBasesTable;