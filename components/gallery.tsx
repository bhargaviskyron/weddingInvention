export default function Gallery() {
  // Array of placeholder images
  const images = [
    { src: "/image2.jpg?height=800&width=600", alt: "Couple Image 2" },
    { src: "/image1.jpg?height=800&width=600", alt: "Couple Image 1" },
    
    { src: "/image3.jpg?height=800&width=600", alt: "Couple Image 3" }, 
    { src: "/image4.jpeg?height=800&width=600", alt: "Couple Image 3" }, 
    { src: "/image5.jpeg?height=800&width=600", alt: "Couple Image 3" }, 
    { src: "/image6.jpeg?height=800&width=600", alt: "Couple Image 3" }, 
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img src={image.src || "/image1.jpg"} alt={image.alt} className="w-full h-64 object-contain" />
        </div>
      ))}
    </div>
  )
}

