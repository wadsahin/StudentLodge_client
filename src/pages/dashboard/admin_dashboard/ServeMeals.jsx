/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/dashboardHeading";
import Swal from "sweetalert2";
import { MdCancelScheduleSend } from "react-icons/md";

const ServeMeals = () => {
    // const { user } = useAuth();

    const { refetch, data: all_requested_meals = [] } = useQuery({
        queryKey: ['request-meals'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/requested-meals");
            return res.data;
        }
    });

    // handle edit
    const handleEdit = (id) => {
        console.log("edit btn clicked", id)

    }

    // handle delete 
    const handleServe = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to serve this meal now.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, serve"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.patch(`http://localhost:5000/requested-meal/serve/${id}`);
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Delivered!",
                        text: "Your meal deliverd on serving..",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });

    }


    const columns = [
        {
            name: "Image",
            cell: row => (
                <>
                    <img className="w-20 h-14 rounded-md my-2 object-cover" src={row?.meal_img} alt="" />
                </>
            )
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Std Name',
            selector: row => row.user_name,
        },
        {
            name: 'Std Email',
            selector: row => row.user_email,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Serve',
            cell: row => (
                <div>
                    {
                        row.status === "delivered" ? <>
                            <button
                                disabled
                                className="btn btn-sm px-2 py-1 rounded"
                            >
                                Deliverd
                            </button>
                        </> : <>
                            <button
                                onClick={() => handleServe(row._id)}
                                className="btn btn-sm text-white px-2 py-1 rounded"
                                style={{ background: "green" }}
                            >
                                Serve
                            </button>
                        </>
                    }

                </div>
            )
        },
    ];

    return (
        <div>
            <DashboardHeading title="Serve Meals" />
            <DataTable
                columns={columns}
                data={all_requested_meals}
                highlightOnHover
                striped
            >

            </DataTable>
        </div>
    );
};

export default ServeMeals;