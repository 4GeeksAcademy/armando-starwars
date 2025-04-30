import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDeleteFavorite = (deletedFavorite) => {
		actions.removeFavorite(deletedFavorite);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand">
				<Link to="/">
					<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" />
				</Link>
			</span>

			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle "
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.map((favoriteItem, index) => (
						<li key={index}>
							<div className="d-flex justify-content-between">
								<span className="dropdown-item">{favoriteItem}</span>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => handleDeleteFavorite(favoriteItem)}
								>
									delete
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};