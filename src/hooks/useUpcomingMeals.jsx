import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUpcomingMeals = () => {
    const { refetch, data } = useQuery({
        queryKey: ['upcoming-meals'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/upcoming-meals");
            return res.data;
        }
    });
    return [data, refetch];
};

export default useUpcomingMeals;