import { Link } from "react-router"


const ProductCard = ({ title, description, imageSrc, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
