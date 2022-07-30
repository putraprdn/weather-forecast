import React from "react";
import Image from "next/image";

import DepokImage from "../public/images/depoccc.jpg";
import SurabayaImage from "../public/images/surabaya.jpg";
import MagelangImage from "../public/images/magelang.jpg";
import JakartaImage from "../public/images/jakarta.jpg";
import Link from "next/link";

const places = [
	{
		name: "Depoc 🥵",
		image: DepokImage,
		url: "/location/depok-1645518",
	},
	{
		name: "Jakarta",
		image: JakartaImage,
		url: "/location/jakarta-1642911",
	},
	{
		name: "Surabaya",
		image: SurabayaImage,
		url: "/location/surabaya-8018250",
	},
	{
		name: "Magelang",
		image: MagelangImage,
		url: "/location/magelang-1636884",
	},
];

export default function FamousPlaces() {
	return (
		<div className="places">
			<div className="places__row">
				{places.length > 0 &&
					places.map((place, index) => (
						<div className="places__box" key={index}>
							<Link href={place.url}>
								<a>
									<div className="places__image-wrapper">
										<Image
											src={place.image}
											alt={`${place.name} Image`}
											layout="fill"
											objectFit="cover"
										/>
									</div>

									<span>{place.name}</span>
								</a>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
}
