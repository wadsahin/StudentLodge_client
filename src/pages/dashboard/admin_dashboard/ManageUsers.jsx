import { useQuery } from "@tanstack/react-query";
import DashboardHeading from "../../../components/dashboardHeading";
import axios from "axios";
import DataTable from "react-data-table-component";

const ManageUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    });

    // handle Make_Admin
    const handleMakeAdmin = (id) =>{
        console.log("make admin btn clicked", id);
    }

    const columns = [
        {
            name: "SL",
            selector: (row, index) => index+1,
        },
        {
            name: "Username",
            selector: row => row.name,
        },
        {
            name: "Email",
            selector: row => row.email,
        },
        {
            name: "Status",
            selector: row => row.badge,
            cell: row =>(
                <div>
                    <span className="badge badge-outline border-warning">
                        {row?.badge.toUpperCase()}
                    </span>
                </div>
            )
        },
        {
            name: "Action",
            selector: row => row.badge,
            cell: row =>(
                <div>
                    <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-sm btn-warning">
                        Make Admin
                    </button>
                </div>
            )
        },
    ]

    return (
        <div>
            <DashboardHeading title="Manage Users" />
            <DataTable
             columns={columns}
             data={users}
             highlightOnHover
             striped
            >

            </DataTable>
        </div>
    );
};

export default ManageUsers;