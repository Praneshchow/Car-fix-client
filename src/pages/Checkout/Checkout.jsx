import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Checkout = () => {
    const service = useLoaderData();
    const { title, _id, price } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price,
        }

        console.log(order);
    }

    return (
        <div>
            <h2 className="text-center text-3xl">Book Service: {title}</h2>

            <form onSubmit={handleBookService}>
                <div className="card-body gird gird-cols-1 md:gird-cols-2 gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-error' type="submit" name='submit' value="Order Confirm" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Checkout;