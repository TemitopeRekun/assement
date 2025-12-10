import FeatureItem from "./FeatureItem";
import food1 from "../assets/food 1.jpg";
import food2 from "../assets/pet-bowl 1.png";
import food3 from "../assets/pet-food 1.png";
import food4 from "../assets/Frame 1171276495.png";
import food5 from "../assets/vet 1.png";

const Homepage = () => {
	return (
		<section className="sectionWrapper">
			<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
				What makes us different makes them stronger
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
				<div className="space-y-8">
					<FeatureItem
						icon={food1}
						title="Real Food"
						description="Wholesome recipes for dogs with real meat and veggies."
					/>
					<FeatureItem
						icon={food2}
						title="Premium Ingredients"
						description="Elevating pet care with unmatched safety and quality."
					/>
				</div>

				<div className="flex justify-center">
					<img
						src={food4}
						alt="Product showcase"
						className="w-72 h-auto object-contain"
					/>
				</div>

				<div className="space-y-8">
					<FeatureItem
						icon={food3}
						title="Made Fresh"
						description="We prioritize maintaining the integrity of whole foods and nutrition."
					/>
					<FeatureItem
						icon={food5}
						title="Vet Developed"
						description="We raise the bar for dog nutrition, surpassing industry expectations."
					/>
				</div>
			</div>
			<div className="bg-[#EE6F4B] rounded-lg w-xl mt-8 py-2 px-6 md:px-8 text-center">
				<h3 className="text-white tracking-tight">
					Get your dog's healthy meal today!
				</h3>
			</div>
		</section>
	);
};

export default Homepage;
