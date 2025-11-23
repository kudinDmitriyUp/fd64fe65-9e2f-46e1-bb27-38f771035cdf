"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Mountain, Sparkles, Home, Star, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Alpine Retreat"
          navItems={[
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Alpine Luxury Awaits"
          description="Experience world-class hospitality nestled in the heart of the Swiss Alps. Discover pristine mountain landscapes, exceptional dining, and unparalleled comfort."
          tag="Premium Mountain Resort"
          tagIcon={Mountain}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925505070-zn838f9m.jpg",
              imageAlt: "Luxury Swiss Alps hotel with mountain backdrop"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925505872-2eso8cgc.jpg",
              imageAlt: "Premium alpine resort surrounded by snow-covered peaks"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925506616-slx2wwxb.jpg",
              imageAlt: "Elegant alpine lodge exterior architecture"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925507382-afbvbyhm.jpg",
              imageAlt: "Luxurious alpine hotel interior with modern elegance"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            { text: "Book Now", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Us"
          title="Luxury Meets Nature"
          description="Established in 2010, Alpine Retreat has been setting the standard for luxury hospitality in the Swiss Alps. Our commitment to excellence, sustainability, and personalized service creates unforgettable mountain experiences. Every detail is carefully crafted to ensure your stay exceeds expectations."
          tagIcon={Sparkles}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925508092-09flg0z5.jpg",
            imageAlt: "Luxury spa and wellness center"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925508930-uzfsgg5g.jpg",
            imageAlt: "Fine dining restaurant with alpine views"
          }}
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeatureCardThree
          title="Our Room Collection"
          description="Each room is an sanctuary of comfort, combining modern luxury with alpine charm"
          tag="Accommodations"
          tagIcon={Home}
          features={[
            {
              id: "01",
              title: "Premium Suites",
              description: "Spacious suites with panoramic mountain views, heated floors, and private balconies overlooking pristine Alpine landscapes",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925509653-1dudld09.jpg",
              imageAlt: "Luxury hotel room suite alpine aesthetic"
            },
            {
              id: "02",
              title: "Wellness Facilities",
              description: "Full-service spa with sauna, steam rooms, and therapeutic treatments designed to rejuvenate and restore",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925508092-09flg0z5.jpg",
              imageAlt: "Luxury spa wellness alpine setting"
            },
            {
              id: "03",
              title: "Mountain Dining",
              description: "Michelin-inspired cuisine featuring local Alpine ingredients with breathtaking peak views",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925508930-uzfsgg5g.jpg",
              imageAlt: "Fine dining restaurant mountain views"
            },
            {
              id: "04",
              title: "Scenic Experiences",
              description: "Direct access to hiking trails, ski slopes, and outdoor activities throughout the year",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925510335-kziq8347.jpg",
              imageAlt: "Scenic mountain landscape Swiss Alps vista"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          buttons={[
            { text: "View Amenities", href: "amenities" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Stories"
          description="Discover what our distinguished guests say about their Alpine Retreat experience"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sophie Müller",
              role: "Travel Enthusiast",
              testimonial: "An absolutely magnificent stay. The attention to detail is extraordinary, and the views from our suite were simply breathtaking. We'll definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925511042-8426t631.png",
              imageAlt: "Sophie Müller"
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Business Executive",
              testimonial: "The perfect blend of luxury and tranquility. The spa treatments and fine dining exceeded all expectations. Highly recommended for discerning travelers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925511766-5yngec7e.jpg",
              imageAlt: "James Richardson"
            },
            {
              id: "3",
              name: "Elena Rossi",
              role: "Luxury Travel Blogger",
              testimonial: "Alpine Retreat sets a new benchmark for mountain luxury. Every moment felt curated, from the seamless check-in to the personalized service throughout our stay.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925512722-inuc07uu.jpg",
              imageAlt: "Elena Rossi"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Corporate Director",
              testimonial: "We hosted our executive retreat here and couldn't have asked for better facilities or service. The team went above and beyond to make our event memorable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925513400-a2jnt78k.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "5",
              name: "Victoria Laurent",
              role: "Art Collector",
              testimonial: "The resort's dedication to sustainability and elegance is remarkable. We felt completely immersed in nature while enjoying five-star comfort.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925514191-c5wbdw9k.jpg",
              imageAlt: "Victoria Laurent"
            },
            {
              id: "6",
              name: "David Schneider",
              role: "Entrepreneur",
              testimonial: "Outstanding in every way. The mountain views, the cuisine, the hospitality—everything was perfect. Already planning our next visit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763925515031-pr08jk3x.jpg",
              imageAlt: "David Schneider"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Plan Your Alpine Escape"
          description="Get in touch with our team to book your luxury mountain retreat or inquire about our exclusive packages and experiences."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "dates", type: "text", placeholder: "Preferred Dates", required: true },
            { name: "guests", type: "text", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your preferences and special requests...",
            rows: 5,
            required: false
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alpine Retreat"
          copyrightText="© Alpine Retreat, 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Guest Info",
              items: [
                { label: "Room Booking", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Packages", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}