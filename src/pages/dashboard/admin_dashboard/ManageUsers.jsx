import { useQuery } from "@tanstack/react-query";
import DashboardHeading from "../../../components/dashboardHeading";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    });

    // handle Make_Admin
    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you confirm?",
            text: "You want to make admin.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.patch(`http://localhost:5000/user-make-admin/${id}`);
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Your user converted to admin successfully",
                        // text: "Your meal deliverd on serving..",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }
    // handle Make_Admin
    const handleMakeUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to demotion admin to user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.patch(`http://localhost:5000/admin-make-user/${id}`);
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Your admin converted to user successfully",
                        // text: "Your meal deliverd on serving..",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }

    const columns = [
        {
            name: "SL",
            selector: (row, index) => index + 1,
        },
        {
            name: "Username",
            // selector: row => row.name,
            cell: row => (
                <>
                    <div>
                        <h4 className="font-semibold text-base">{row.name}</h4>
                        <span className="badge bg-blue-600 text-white font-semibold">{row.role}</span>
                    </div>
                </>
            )
        },
        {
            name: "Email",
            selector: row => row.email,
        },
        {
            name: "Status",
            selector: row => row.badge,
            cell: row => (
                <div>
                    <span className="badge badge-outline text-xs font-bold border-warning">
                        {row?.badge.toUpperCase()}
                    </span>
                </div>
            )
        },
        {
            name: "Action",
            selector: row => row.badge,
            cell: row => (
                <div>
                    {
                        row.role === "admin" ? <>
                            <button
                                onClick={() => handleMakeUser(row._id)}
                                className="btn btn-xs bg-orange-600 text-white">
                                Make User
                            </button>
                        </> : <>
                            <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-xs bg-blue-600 text-white">
                                Make Admin
                            </button>
                        </>
                    }

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