'use client'
import { DocumentTextIcon, EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/16/solid';
import FolderIcon from '@mui/icons-material/Folder';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useUnits } from '../../api/units/useUnits';
import { useParams, useRouter } from 'next/navigation';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NewVersionModal from '@/app/components/NewVesionModal';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NewUnitModal from '@/app/components/NewUnitModal';

interface UnitView {
  id:string
  name: string,
  uploadedOn: string,
  type: string
}

export default function KnowledgeBase() {
  const { knowledgebaseid } = useParams()
  const { isLoading: unitsAreLoading, data: units } = useUnits({ variables: { knowledgeBaseId: knowledgebaseid as string } })
  const [mappedBases, setMappedBases] = useState<UnitView[]>([])
  const [actionsOpened, setActionsOpened] = useState(-1)
  const [isAddVersionModalOpen, setAddVersionModalOpen] = useState(false);
  const [isNewUnitModalOpen, setNewUnitModalOpen] = useState(false);
  const [unitId, setUnitId] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (!unitsAreLoading) {
      setMappedBases(mapKnowledgeBases())
    }
  }, [units])

  const mapKnowledgeBases = (): UnitView[] => {
    if (!unitsAreLoading && units) {
      return units?.map((unit) => {
        return { id:unit.id,name: unit.name, uploadedOn: unit.creation_date, type: "folder" }
      })
    }
    return []
  }


  const handleOpenActions = (index: number) => {
    if (index === actionsOpened) setActionsOpened(-1)
    else setActionsOpened(index)
  }

  const handleNewVersionClick = (index: number) => {
    handleOpenActions(index)
    setAddVersionModalOpen(true)
    setUnitId(units!![index].id)
  }

  const handleFolderClick = (id: string) => {
    router.push(`/units/${id}?knowledgebaseid=${knowledgebaseid}`)
  };

  return (
    <>
      <div className="flex items-center mb-2 space-x-2">
        <Button onClick={()=>setNewUnitModalOpen(true)} className='bg-green-500 hover:bg-green-700 text-white' startIcon={<AddIcon />}>New</Button>
        <Typography variant="h4" component="div" >
          Units
        </Typography>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Uploaded on</TableCell>
              <TableCell>Last Version</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedBases.map((item, index) => (
              <TableRow key={index} hover>
                <TableCell className="hover:cursor-pointer" component="th" onClick={() => item.type === 'folder' && handleFolderClick(units!![index].id)} scope="row">
                  <div className="flex items-center">
                    {item.type === 'folder' ? <FolderIcon /> : <InsertDriveFileIcon />}
                    <span style={{ marginLeft: '4px' }}>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell>{item.uploadedOn}</TableCell>
                <TableCell>{units?.filter((unit)=>unit.id==item.id)[0].versions[units?.filter((unit)=>unit.id==item.id)[0].versions.length-1].name}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="more" onClick={() => handleOpenActions(index)}>
                    <MoreVertIcon />
                  </IconButton>
                  {actionsOpened === index && (
                    <div id="dropdownDots" className="z-40 origin-top-right border absolute right-0 mt-2 w-22 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                      <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                        <li className="flex px-4 py-2 hover:bg-gray-100 items-center justify-end space-x-2">
                          <div className="hover:bg-gray-100 flex items-center justify-center space-x-2 p" onClick={() => handleNewVersionClick(index)}>
                            <PlusIcon className="h-4 w-4 text-gray-700" />
                            <Typography>Neue Version</Typography>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <NewVersionModal isModalOpen={isAddVersionModalOpen} setIsModalOpen={setAddVersionModalOpen} unitId={unitId} knowledgeBaseId={knowledgebaseid as string} />
      <NewUnitModal isModalOpen={isNewUnitModalOpen} setIsModalOpen={setNewUnitModalOpen} unitId={unitId} knowledgeBaseId={knowledgebaseid as string} />
    </>
  )
}
