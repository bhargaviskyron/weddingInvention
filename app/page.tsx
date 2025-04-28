import Link from "next/link"
import { Calendar, Clock, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import Gallery from "@/components/gallery"
import RsvpForm from "@/components/rsvp-form"
import { MainNav } from "@/components/navigation-menu"

export default function Home() {
  // Wedding date - May 08,2025
  const weddingDate = new Date('2025-05-08T22:27:00')

  return (
    <main className="min-h-screen">
      <MainNav />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://th.bing.com/th/id/R.1f2b0e5cbe610e69c6d2434d1b0df81b?rik=hVcZQX5DZEWefg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fKpD2oo0.jpg&ehk=HwS8tmQ4NRxwvG2gPF9kG9x1nn%2fTZrke0hjfNejJ7%2bs%3d&risl=&pid=ImgRaw&r=0?height=1080&width=1920')",
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <div className="mb-6 animate-fade-in">
            <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">Together with their families</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4">
              Bhargavi
              <span className="inline-block mx-4 text-3xl md:text-3xl cursive">Weds</span>


              <span className="italic">Praveen</span>
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mt-6">
              Request the pleasure of your company as they celebrate their marriage
            </p>
          </div>
          <div className="mt-12">
            <p className="text-xl md:text-2xl font-light">
              {weddingDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary/90 hover:bg-primary text-white rounded-full px-8 py-6 text-lg"
            >
              <Link href="#rsvp">RSVP</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link href="#countdown" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Counting Down to Our Special Day</h2>
          <CountdownTimer targetDate={weddingDate} />
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="/image1.jpg?height=600&width=500"
                alt="Couple"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every love story is beautiful, but ours is my favorite. Our journey began with a chance encounter that
                blossomed into a deep connection. Through laughter and tears, adventures and quiet moments, we found in
                each other a love worth celebrating for a lifetime.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we prepare to begin this new chapter together, we are filled with gratitude for the love and support
                of our family and friends. We can't wait to celebrate this special day with all of you.
              </p>
              <div className="mt-8 flex justify-center">
                <Heart className="text-rose-400 h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Event Details</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Date</h3>
              <p className="text-gray-700">
                {weddingDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Time</h3>
              <p className="text-gray-700">Reception: 7:30 PM</p>
              <p className="text-gray-700">Ceremony: 10:27 PM</p>
              
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
  <div className="mb-4 flex justify-center">
    <MapPin className="h-10 w-10 text-primary" />
  </div>
  <h3 className="text-xl font-semibold mb-2">The Venue</h3>
  <p className="text-gray-700">Sitharampuram (village),</p>
  <p className="text-gray-700">Reddygudem (Mandal),</p>
  <p className="text-gray-700 mb-4">NTR District</p>
  
</div>
<div>
  <h3 className="text-xl font-semibold mb-2">Location On Maps:</h3>
  <div className="w-[1000px] h-[450px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3817.6376441036973!2d80.76434707515378!3d16.893810283911723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUzJzM3LjciTiA4MMKwNDYnMDAuOSJF!5e0!3m2!1sen!2sin!4v1745732091450!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>



          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Gallery</h2>
          <Gallery />
        </div>
      </section>

      {/*  Video Section */}
      <section id="video" className="py-20 bg-neutral-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Pre-Wedding Video</h2>
    <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://drive.google.com/file/d/19pwUg6QgiEGgVzIDZwMaGtCghZs7RNxY/preview"
        title="Pre-Wedding Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
</section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">RSVP</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-700 mb-8">
              We look forward to celebrating with you! Please let us know if you'll be joining us by filling out the
              form below.
            </p>
            <RsvpForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif mb-4">Bhargavi & Praveen</h2>
          <p className="mb-6">
            {weddingDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-neutral-400">With love and gratitude</p>
        </div>
      </footer>
    </main>
  )
}

