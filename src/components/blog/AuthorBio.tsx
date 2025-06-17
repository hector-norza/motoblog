import Image from 'next/image';

interface AuthorBioProps {
  name: string;
}

// Mock author data - in a real app, this would come from a database or CMS
const authorData: Record<string, { bio: string; image: string; role: string }> = {
  'Mike Rider': {
    bio: 'Mike has been riding motorcycles for over 15 years and specializes in helping beginners find their perfect first bike. He\'s tested hundreds of motorcycles and is passionate about motorcycle safety and education.',
    image: '/images/authors/mike.jpg',
    role: 'Senior Motorcycle Specialist',
  },
  'Sarah Wrench': {
    bio: 'Sarah is a certified motorcycle mechanic with 10+ years of experience working on all types of bikes. She loves empowering riders to handle their own maintenance and understand how their motorcycles work.',
    image: '/images/authors/sarah.jpg',
    role: 'Lead Motorcycle Mechanic',
  },
  'David Gear': {
    bio: 'David reviews motorcycle gear for a living, testing everything from helmets to boots in real-world conditions. His background in materials engineering gives him unique insight into gear construction and safety.',
    image: '/images/authors/david.jpg',
    role: 'Gear Review Specialist',
  },
  'Lisa Traveler': {
    bio: 'Lisa has ridden motorcycles on six continents and specializes in planning epic motorcycle journeys. She\'s completed the Trans-America Trail, toured Europe extensively, and ridden across Australia.',
    image: '/images/authors/lisa.jpg',
    role: 'Adventure Travel Writer',
  },
  'Tom Instructor': {
    bio: 'Tom is a certified motorcycle instructor who has taught thousands of new riders. He specializes in breaking down complex riding techniques into simple, easy-to-understand lessons.',
    image: '/images/authors/tom.jpg',
    role: 'Motorcycle Skills Instructor',
  },
  'Emma Tech': {
    bio: 'Emma covers the latest motorcycle technology, from electric bikes to advanced rider aids. With a background in engineering and a passion for two wheels, she bridges the gap between tech and riding.',
    image: '/images/authors/emma.jpg',
    role: 'Motorcycle Technology Writer',
  },
  // Default author for any names not specifically defined
  'default': {
    bio: 'An experienced motorcycle enthusiast and writer who contributes valuable insights to the MotoBlog community.',
    image: '/images/authors/default.jpg',
    role: 'Contributing Writer',
  },
};

export default function AuthorBio({ name }: AuthorBioProps) {
  const author = authorData[name] || authorData['default'];

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
      <div className="flex-shrink-0">
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          <Image
            src={author.image}
            alt={name}
            fill
            className="object-cover"
            unoptimized // For placeholder; remove in production with real images
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mb-2 text-sm text-primary-500">{author.role}</p>
        <p className="text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  );
}
