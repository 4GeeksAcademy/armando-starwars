import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleDeleteFavorite = (favName) => {
		actions.removeFavorite(favName);
	};

	return (
		<nav className="navbar navbar-light bg-light px-3">
			<span className="navbar-brand">
				<Link to="/">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
						alt="Star Wars"
						style={{ height: "40px" }}
					/>
				</Link>
			</span>

			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites <span className="badge bg-dark">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length === 0 ? (
						<li className="dropdown-item text-muted">No favorites yet</li>
					) : (
						store.favorites.map((item, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
								<Link to={item.url} className="text-decoration-none text-dark flex-grow-1">
									{item.name}
								</Link>
								<button
									className="btn btn-sm btn-outline-danger ms-2"
									onClick={() => handleDeleteFavorite(item.name)}
								>
									❌
								</button>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};