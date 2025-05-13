import { Link } from "react-router-dom";
import DashboardHeading from "../../../components/dashboardHeading";
import Swal from "sweetalert2";
import AddUpcomingMeal from "../../../components/AddUpcomingMeal";
import axios from "axios";
import DataTable from "react-data-table-component";
import useUpcomingMeals from "../../../hooks/useUpcomingMeals";

const UpcomingMeals = () => {
    const [data, refetch] = useUpcomingMeals();

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
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Price',
            selector: row => `${row.price} Tk`,
        },
        {
            name: 'Likes',
            selector: row => row.Likes,
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <button
                        onClick={() => handlePublish(row._id)}
                        className="btn btn-sm text-white px-2 py-1 rounded"
                        style={{ background: "green" }}

                    >
                        Publish
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
                        className="btn btn-sm text-white px-2 py-1 rounded"
                        style={{ background: "red" }}
                    >
                        X
                    </button>
                </div>
            )
        },
    ];

    // handle delete 
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this meal.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/upcoming-meal/delete/${id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your upcoming meal removed successfully",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });

    }

    // handle Publish 
    const handlePublish = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to publish this meal now.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const meal = data.find(meal => meal._id
                     === id);
                const {_id, ...newMeal } = meal;

                // console.log("from publish meal:", meal)
                // console.log("from publish meal:", newMeal)

                const res = await axios.post("http://localhost:5000/add-meal", newMeal);
                // console.log(res.data);
                if (res.data.insertedId) {
                    // clear from upcoming meals 
                    const res = await axios.delete(`http://localhost:5000/upcoming-meal/delete/${id}`);
                    // console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Published",
                            text: "Your meal added into all meals collection.",
                            icon: "success"
                        });
                        refetch();
                    }
                }
            }
        });

    }


    return (
        <div>
            <DashboardHeading title="Upcoming Meals" />
            {/* upcoming meals data table */}
            <div className="my-5">
                <DataTable
                    columns={columns}
                    data={data}
                    highlightOnHover
                    striped
                >

                </DataTable>
            </div>
            <div>
                <button className="btn btn-warning block mx-auto " onClick={() => document.getElementById('my_modal_4').showModal()}>Add an Upcoming Meal</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-4xl">
                        <AddUpcomingMeal refetch={refetch} />
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default UpcomingMeals;