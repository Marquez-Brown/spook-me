import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllSightings.css";
import Wrapper from "../../Components/Wrapper/Wrapper";

const AllSightings = () => {
	const [sightings, setSightings] = useState([]);

	useEffect(() => {
		axios
			.get("/api/sightings")
			.then((response) => {
				setSightings(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<div className="container">
				<section className="section is-small">
					<h1 className="page-title">All The Spooks...</h1>
				</section>
				<Wrapper>
				{/* <div className="columns mt-5 is-multiline"> */}
					{sightings.map((sighting) => (
						<div className="column is-one-fifth sight" key={sighting._id}>
							<div className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<img src={sighting.imageUrl} alt={sighting.title} />
									</figure>
								</div>
								<div className="card-content">
									<div className="media">
										<div className="media-content is-centered mb-1">
											<p className="title is-4 spookName">{sighting.title}</p>
											<p className="subtitle is-6 spookSubName">{sighting.username}</p>
										</div>
									</div>

									<div className="content">
										{sighting.address} <br></br>
										{sighting.city}, {sighting.state}
										<br></br>
										<Link to={`/sightings/${sighting._id}`}>Spook Me More</Link>
									</div>
								</div>
							</div>
						</div>

					))}
				{/* </div> */}
				</Wrapper>
			</div>
			{/* <section class="section is-medium"></section> */}
		</div>
	);
};

export default AllSightings;
