"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { getImagePath } from '@/lib/image-utils';

interface AuthorBioProps {
  name: string;
}

// Enhanced author data with social links and article count
const authorData: Record<string, { 
  bio: string; 
  image: string; 
  role: string;
  articleCount: number;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    email?: string;
  }
}> = {
  'Mike Rider': {
    bio: 'Mike has been riding motorcycles for over 15 years and specializes in helping beginners find their perfect first bike. He\'s tested hundreds of motorcycles and is passionate about motorcycle safety and education.',
    image: '/images/authors/mike.jpg',
    role: 'Senior Motorcycle Specialist',
    articleCount: 24,
    social: {
      twitter: 'mikerider',
      instagram: 'mike_rider',
      email: 'mike@motoblog.com'
    }
  },
  'Sarah Wrench': {
    bio: 'Sarah is a certified motorcycle mechanic with 10+ years of experience working on all types of bikes. She loves empowering riders to handle their own maintenance and understand how their motorcycles work.',
    image: '/images/authors/sarah.jpg',
    role: 'Lead Motorcycle Mechanic',
    articleCount: 18,
    social: {
      instagram: 'sarah_wrench',
      youtube: 'SarahWrenchMechanic',
      email: 'sarah@motoblog.com'
    }
  },
  'David Gear': {
    bio: 'David reviews motorcycle gear for a living, testing everything from helmets to boots in real-world conditions. His background in materials engineering gives him unique insight into gear construction and safety.',
    image: '/images/authors/david.jpg',
    role: 'Gear Review Specialist',
    articleCount: 32,
    social: {
      twitter: 'davidgearreviews',
      youtube: 'DavidGearReviews',
      email: 'david@motoblog.com'
    }
  },
  'Lisa Traveler': {
    bio: 'Lisa has ridden motorcycles on six continents and specializes in planning epic motorcycle journeys. She\'s completed the Trans-America Trail, toured Europe extensively, and ridden across Australia.',
    image: '/images/authors/lisa.jpg',
    role: 'Adventure Travel Writer',
    articleCount: 15,
    social: {
      instagram: 'lisa_moto_traveler',
      youtube: 'LisaTravelerMoto',
      twitter: 'lisatraveler'
    }
  },
  'Tom Instructor': {
    bio: 'Tom is a certified motorcycle instructor who has taught thousands of new riders. He specializes in breaking down complex riding techniques into simple, easy-to-understand lessons.',
    image: '/images/authors/tom.jpg',
    role: 'Motorcycle Skills Instructor',
    articleCount: 21,
    social: {
      youtube: 'TomRidingSchool',
      email: 'tom@motoblog.com'
    }
  },
  'Emma Tech': {
    bio: 'Emma covers the latest motorcycle technology, from electric bikes to advanced rider aids. With a background in engineering and a passion for two wheels, she bridges the gap between tech and riding.',
    image: '/images/authors/emma.jpg',
    role: 'Motorcycle Technology Writer',
    articleCount: 16,
    social: {
      twitter: 'emmatechbikes',
      linkedin: 'emmatech',
      email: 'emma@motoblog.com'
    }
  },
  // Default author for any names not specifically defined
  'default': {
    bio: 'An experienced motorcycle enthusiast and writer who contributes valuable insights to the MotoBlog community.',
    image: '/images/authors/default.jpg',
    role: 'Contributing Writer',
    articleCount: 5,
    social: {
      email: 'contact@motoblog.com'
    }
  },
};

export default function AuthorBio({ name }: AuthorBioProps) {
  const [showFullBio, setShowFullBio] = useState(false);
  const author = authorData[name] || authorData['default'];

  const socialIcons = {
    twitter: FaTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
    email: FaEnvelope
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div className="flex-shrink-0">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary-500/30"
          >
            <Image
              src={getImagePath(author.image, '/images/authors/default.jpg')}
              alt={name}
              fill
              className="object-cover"
              unoptimized // For placeholder; remove in production with real images
            />
          </motion.div>
          <div className="mt-2 text-center text-xs text-muted-foreground">
            {author.articleCount} articles
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm text-primary-500">{author.role}</p>
            </div>
            <div className="flex space-x-2">
              {Object.entries(author.social).map(([platform, username]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={platform}
                    href={platform === 'email' ? `mailto:${username}` : `https://${platform}.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500 hover:text-white dark:bg-slate-800 dark:text-slate-300"
                    aria-label={`${name}'s ${platform}`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          <p className="mt-2 text-muted-foreground">
            {showFullBio ? author.bio : `${author.bio.substring(0, 120)}...`}
          </p>
          
          <button 
            onClick={() => setShowFullBio(!showFullBio)}
            className="mt-2 text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            {showFullBio ? 'Show less' : 'Read more'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}