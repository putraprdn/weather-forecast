import Link from "next/link";
import React, { useEffect, useState } from "react";
import cities from "../lib/city.list.json";
import Router from "next/router";

export default function SearchBox({ placeholder }) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		const clearQuery = () => setQuery("");

		Router.events.on("routeChangeComplete", clearQuery);

		return () => {
			Router.events.off("routeChangeComplete", clearQuery);
		};
	}, []);

	const onChange = (event) => {
		const { value } = event.target;
		setQuery(value);

		let matchingCities = [];

		if (value.length > 3) {
			for (const city of cities) {
				if (matchingCities.length >= 5) {
					break;
				}

				const match = city.name
					.toLowerCase()
					.startsWith(value.toLowerCase());

				if (match) {
					const cityData = {
						...city,
						slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${
							city.id
						}`,
					};

					matchingCities.push(cityData);
				}
			}
		}

		return setResults(matchingCities);
	};

	return (
		<div className="search">
			<input
				type="text"
				value={query}
				onChange={onChange}
				placeholder={placeholder ? placeholder : ""}
			/>

			{query.length > 3 && (
				<ul>
					{results.length > 0 ? (
						results.map((city) => (
							<li key={city.slug}>
								<Link href={`/location/${city.slug}`}>
									<a>
										{city.name}
										{city.state ? `, ${city.state}` : ""}{" "}
										<span>({city.country})</span>
									</a>
								</Link>
							</li>
						))
					) : (
						<li className="search__no-results">No result</li>
					)}
				</ul>
			)}
		</div>
	);
}
