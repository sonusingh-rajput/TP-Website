

const CertificationBadge = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="relative h-24 w-24 mx-auto mb-4">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="object-contain h-24 w-24" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default CertificationBadge
