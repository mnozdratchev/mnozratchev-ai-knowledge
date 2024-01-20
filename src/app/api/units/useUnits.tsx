import { AxiosError } from "axios";
import { createQuery } from "react-query-kit";
import { client } from "../common/client";

type Response = Unit[];
type Variables = { knowledgeBaseId: string };

export const useUnits = createQuery<Response, Variables, AxiosError>({
    queryKey: ["units"],
    fetcher: (variables: Variables) => {
        return client.get(`knowledge/${variables.knowledgeBaseId}/units`).then((res) => {
            return res.data
        });
    },
});