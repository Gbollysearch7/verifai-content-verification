"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "VerifAI revolutionized our content workflow. We catch inaccuracies instantly and publish with complete confidence.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b436?w=100&h=100&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Content Director",
  },
  {
    text: "The AI-powered fact-checking is incredible. It saves us hours of manual research and ensures our content is always accurate.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "Michael Rodriguez",
    role: "Marketing Manager",
  },
  {
    text: "VerifAI's source verification feature gives us the credibility we need. Our audience trusts our content more than ever.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Emily Watson",
    role: "Communications Lead",
  },
  {
    text: "The one-click corrections feature is a game-changer. We can fix inaccuracies instantly without disrupting our workflow.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "David Park",
    role: "Product Manager",
  },
  {
    text: "Our compliance team loves VerifAI. It ensures all our regulatory content meets accuracy standards before publication.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Compliance Officer",
  },
  {
    text: "VerifAI transformed how we create educational content. Students and parents trust our materials completely now.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    name: "James Mitchell",
    role: "Education Director",
  },
  {
    text: "The real-time source verification is outstanding. We can fact-check any claim against current web data instantly.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    name: "Rachel Kumar",
    role: "Research Analyst",
  },
  {
    text: "VerifAI's accuracy detection saved our campaign from potential misinformation. It's an essential tool for any content team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    name: "Alex Johnson",
    role: "Campaign Manager",
  },
  {
    text: "The healthcare content we create is now 100% accurate thanks to VerifAI. Patient safety is our priority.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    name: "Dr. Maria Garcia",
    role: "Medical Communications",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration: props.duration || 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div className="p-6 rounded-lg border shadow-sm bg-white max-w-xs w-full" key={i}>
                <div className="text-sm text-gray-600 mb-4">{text}</div>
                <div className="flex items-center gap-3">
                  <img width={40} height={40} src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <div className="font-medium text-gray-900 text-sm">{name}</div>
                    <div className="text-xs text-gray-500">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
