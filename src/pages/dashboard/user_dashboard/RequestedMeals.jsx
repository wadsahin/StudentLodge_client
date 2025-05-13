/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/dashboardHeading";
import Swal from "sweetalert2";
import { MdCancelScheduleSend } from "react-icons/md";

const RequestedMeals = () => {
    const { user } = useAuth();

    const { refetch, data: meals = [] } = useQuery({
        queryKey: ['request-meals-by-user'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/requested-meals/${user?.email}`);
            return res.data;
        }
    });

    // handle edit
    const handleEdit = (id) => {
        console.log("edit btn clicked", id)

    }

    // handle delete 
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel meal request.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/requested-meals/delete/${id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Cancelled!",
                        text: "Your request cancelled successfully",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });

        // console.log("delete btn clicked", id);

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
            name: 'Likes',
            selector: row => row.likes,
        },
        {
            name: 'Review',
            selector: row => row.reviews_count,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Cancel',
            cell: row => (
                <div>
                    <button
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-sm text-white px-2 py-1 rounded"
                    >
                        <MdCancelScheduleSend color="red" size={22} />
                    </button>
                </div>
            )
        },
    ];

    return (
        <div>
            <DashboardHeading title="Request Meals" />
            <DataTable
                columns={columns}
                data={meals}
                highlightOnHover
                striped
            >

            </DataTable>
        </div>
    );
};

export default RequestedMeals;