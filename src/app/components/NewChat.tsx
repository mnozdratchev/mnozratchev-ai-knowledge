import { PlusIcon } from '@heroicons/react/24/solid'
function NewChat(){

    return(
        <div className="border-gray-700 border chatRow">
            <PlusIcon className="h-4 w-4"/>
            <p>New Knowledge Base</p>
        </div>
    )
}

export default NewChat