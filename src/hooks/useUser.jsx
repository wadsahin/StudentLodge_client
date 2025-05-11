import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUser = () => {
    const { user: loginUser } = useAuth();
    const { data  = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/user?email=${loginUser?.email}`);
            return res.data;
        }
    });


    return [data]
};

export default useUser;