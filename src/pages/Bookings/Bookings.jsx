import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `https://car-fix-server-six.vercel.app/bookings?email=${user?.email}`;
    // console.log("url is : ", url);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // if the token is expired then this will handle. 
                // console.log(data);
                if (!data.error){
                    setBookings(data);
                }
                else{
                    // we can logout and then navigate. but here we navigate to root path. 
                    navigate('/');
                    
                }
            })
    }, [url, navigate])


    // the handleDelete function call in the 'BookingRow' component.
    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete");
        if (proceed){
            fetch(`https://car-fix-server-six.vercel.app/bookings/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data); 
                if (data.deletedCount > 0){
                    alert('deleted successful');
                    // delete state. 
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-fix-server-six.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state. 
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                             key={booking._id}
                             booking={booking}
                             handleDelete={handleDelete}
                             handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;