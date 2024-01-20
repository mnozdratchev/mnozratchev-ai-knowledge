
import { createMutation } from 'react-query-kit';
import { AxiosError } from 'axios';
import { client } from '../common/client';
import { queryClient } from '../common/ApiProvider';

type Variables = { knowledgeBaseId: string, unitId: string, newVersion: FormData };
type Response = Unit;



export const useAddNewUnitVersion = createMutation<Response, Variables, AxiosError>({

    mutationFn: async (variables) =>
        client({
            url: `knowledge/${variables.knowledgeBaseId}/units/${variables.unitId}`,
            method: 'PUT',
            data: variables.newVersion,
        }).then((response) => {
            return response.data
        }),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["units"] })
    }
});

