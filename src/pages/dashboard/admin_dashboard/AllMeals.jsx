import { useQuery } from "@tanstack/react-query";
import DashboardHeading from "../../../components/dashboardHeading";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const AllMeals = () => {
    const { data: meals = [] } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/meals");
            return res.data;
        }
    });

    // handle Make_Admin
    const handleMakeAdmin = (id) => {
        console.log("make admin btn clicked", id);
    }

    const columns = [
        {
            name: "SL",
            selector: (row, index) => index + 1,
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
                    <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-sm btn-primary">
                        View
                    </button>
                </div>
            )
        },
        {
            name: "Update",
            cell: row => (
                <div>
                    <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-sm btn-warning">
                        Update
                    </button>
                </div>
            )
        },
        {
            name: "Delete",
            cell: row => (
                <div>
                    <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-sm btn-error text-white ">
                        X
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
