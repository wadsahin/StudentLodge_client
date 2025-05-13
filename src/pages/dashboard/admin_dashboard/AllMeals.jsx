import { useQuery } from "@tanstack/react-query";
import DashboardHeading from "../../../components/dashboardHeading";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const AllMeals = () => {
    const { refetch, data: meals = [] } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/meals");
            return res.data;
        }
    });

    // Handle View Meal
    const handleViewMeal = (id) => {

    }

    // Handle View Meal
    const handleUpdateMeal = (id) => {
        
    }
    // Handle View Meal
    const handleMealDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this meal.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/meal/delete/${id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your meal removed successfully",
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
                    <img className="w-20 h-14 rounded-md my-2 object-cover" src={row?.image} alt="" />
                </>
            )
        },
        {
            name: "Title",
            selector: row => row.title,
        },
        {
            name: "Likes",
            selector: row => row.likes,
        },
        {
            name: "Reviews",
            selector: row => row.reviews_count,
        },
        {
            name: "Rating",
            selector: row => row.rating,
        },
        {
            name: "Distributor",
            selector: row => row.distributor,
        },
        {
            name: "View",
            cell: row => (
                <div>
                    <Link to={`/meal/${row._id}`} style={{ background: "green" }} className="btn btn-sm text-white">
                        View
                    </Link>
                </div>
            )
        },
        {
            name: "Update",
            cell: row => (
                <div>
                    <button onClick={() => handleUpdateMeal(row._id)} className="btn btn-sm bg-sky-600 text-white" style={{ background: "oranged" }}>
                        Edit
                    </button>
                </div>
            )
        },
        {
            name: "Delete",
            cell: row => (
                <div>
                    <button onClick={() => handleMealDelete(row._id)}>
                        <AiOutlineDelete color="red" size={22} />
                    </button>
                </div>
            )
        },
    ]

    return (
        <div>
            <DashboardHeading title="All Meals" />
            <div className="my-3">
                <Link to="/admin/add-meal" className="btn btn-warning">Add New Meal</Link>
            </div>
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

export default AllMeals;
