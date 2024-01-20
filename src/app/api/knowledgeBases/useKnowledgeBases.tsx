import { AxiosError } from "axios";
import { createQuery } from "react-query-kit";
import { client } from "../common/client";

type Response = KnowledgeBase[];
type Variables = {};

export const useKnowledgeBases = createQuery<Response, Variables, AxiosError>({
    queryKey: ["knowledgeBases"],
    fetcher: () => {
        return client.get(`knowledge/`).then((res) => {
            return res.data
        });
    },
});