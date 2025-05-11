import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/dashboardHeading";
import Swal from "sweetalert2";

const AllReviews = () => {
    // const { user } = useAuth();

    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['my-reviews'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/reviews");
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
            text: "You want to remove permanently.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/review-delete/${id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Removed!",
                        text: "Your review deleted successfully",
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
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Likes',
            selector: row => row.likes,
        },
        {
            name: 'Review',
            selector: row => row.review,
        },
        {
            name: 'View',
            cell: row => (
                <div>
                    <Link
                        // onClick={() => handleViewMeal(row._id)}
                        to={`/meal/${row.meal_id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                        view
                    </Link>
                </div>
            )
        },
        {
            name: 'Edit',
            cell: row => (
                <div>
                    <button
                        onClick={() => handleEdit(row._id)}
                        className="btn btn-sm btn-warning text-black hover:bg-blue-600 px-3 py-1 rounded"
                    >
                    update
                    </button>
                </div>
            )
        },
        {
            name: 'Delete',
            cell: row => (
                <div>
                    <button
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-sm btn-error hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                        X
                    </button>
                </div>
            )
        },
    ];

    return (
        <div>
            <DashboardHeading title="All Reviews" />
            <DataTable
                columns={columns}
                data={reviews}
                highlightOnHover
                striped
            >

            </DataTable>
        </div>
    );
};

export default AllReviews;