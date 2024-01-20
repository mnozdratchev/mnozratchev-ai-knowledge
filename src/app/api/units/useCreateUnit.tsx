
import { createMutation } from 'react-query-kit';
import { AxiosError } from 'axios';
import { client } from '../common/client';
import { queryClient } from '../common/ApiProvider';

type Variables = { knowledgeBaseId: string, newUnit: FormData };
type Response = Unit;



export const useCreateUnit = createMutation<Response, Variables, AxiosError>({

    mutationFn: async (variables) =>
        client({
            url: `knowledge/${variables.knowledgeBaseId}/units`,
            method: 'POST',
            data: variables.newUnit,
        }).then((response) => {
            return response.data
        }),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["units"] })
    }
});

