import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/dashboardHeading";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";

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
                        style={{ background: "green" }} className="btn btn-sm text-white"
                    >
                        view
                    </Link>
                </div>
            )
        },
        {
            name: 'Update',
            cell: row => (
                <div>
                    <button
                        onClick={() => handleEdit(row._id)}
                        className="btn btn-sm bg-sky-600 text-white" style={{ background: "oranged" }}
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
                    >
                        <AiOutlineDelete color="red" size={22} />
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