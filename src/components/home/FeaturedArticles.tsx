"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Mock featured articles data
// In a real application, this would be fetched from your CMS or API
const featuredArticles = [
	{
		id: 1,
		title: 'The Ultimate Guide to Choosing Your First Motorcycle',
		excerpt: "Find the perfect bike to start your two-wheeled journey with our comprehensive beginner's guide.",
		slug: 'choosing-first-motorcycle',
		category: 'Buying Guides',
		date: 'June 12, 2025',
		author: 'Mike Rider',
		image: '/images/first-motorcycle.jpg',
	},
	{
		id: 2,
		title: 'Essential Motorcycle Maintenance You Can Do at Home',
		excerpt: 'Learn the basic maintenance tasks every rider should know to keep their bike running smoothly.',
		slug: 'essential-motorcycle-maintenance',
		category: 'Maintenance & DIY',
		date: 'June 5, 2025',
		author: 'Sarah Wrench',
		image: '/images/maintenance-diy.jpg',
	},
	{
		id: 3,
		title: 'Top 10 Motorcycle Helmets for 2025',
		excerpt: 'Our experts tested dozens of helmets to find the best options for safety, comfort, and style.',
		slug: 'top-motorcycle-helmets-2025',
		category: 'Gear Reviews',
		date: 'May 28, 2025',
		author: 'David Gear',
		image: '/images/helmets.jpg',
	},
	{
		id: 4,
		title: 'Riding Through the Rocky Mountains: A 7-Day Journey',
		excerpt: "Follow along on an epic motorcycle adventure through some of America's most breathtaking landscapes.",
		slug: 'rocky-mountains-journey',
		category: 'Road Life',
		date: 'May 20, 2025',
		author: 'Lisa Traveler',
		image: '/images/rocky-mountains.jpg',
	},
	{
		id: 5,
		title: 'How to Master Slow-Speed Maneuvers',
		excerpt: 'Improve your low-speed control with these expert techniques and practice exercises.',
		slug: 'master-slow-speed-maneuvers',
		category: 'Learn to Ride',
		date: 'May 15, 2025',
		author: 'Tom Instructor',
		image: '/images/slow-speed.jpg',
	},
	{
		id: 6,
		title: 'The Rise of Electric Motorcycles: Are They Worth It?',
		excerpt: 'We explore the pros, cons, and future of electric motorcycles in an evolving industry.',
		slug: 'electric-motorcycles-worth-it',
		category: 'Blog',
		date: 'May 8, 2025',
		author: 'Emma Tech',
		image: '/images/electric-motorcycle.jpg',
	},
];

export default function FeaturedArticles() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const articlesPerPage = 3;

	const totalPages = Math.ceil(featuredArticles.length / articlesPerPage);
	const currentArticles = featuredArticles.slice(
		currentIndex * articlesPerPage,
		(currentIndex + 1) * articlesPerPage
	);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
	};

	const handleArticleClick = (slug: string) => {
		startTransition(() => {
			router.push(`/blog/${slug}`);
		});
	};

	return (
		<div className="relative animate-fade-in py-8">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{currentArticles.map((article, index) => (
					<button
						key={article.id}
						onClick={() => handleArticleClick(article.slug)}
						className={`group glass-card hover-lift flex flex-col overflow-hidden text-left animate-scale-in ${
							isPending ? 'opacity-70 pointer-events-none' : ''
						}`}
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<div className="relative aspect-[16/9] overflow-hidden smooth-corners">
							<Image
								src={article.image}
								alt={article.title}
								fill
								quality={85}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
						</div>
						<div className="flex flex-1 flex-col p-6">
							<div className="mb-3 flex items-center space-x-3 text-xs">
								<span className="hover-scale shimmer flex items-center rounded-full bg-primary-50/80 backdrop-blur-sm px-2.5 py-1 text-primary-600 transition-colors dark:bg-primary-900/20 dark:text-primary-400">
									{article.category}
								</span>
								<span className="flex items-center text-muted-foreground">
									{article.date}
								</span>
							</div>
							<h3 className="mb-2 line-clamp-2 text-xl font-bold leading-tight transition-colors group-hover:text-primary-500">
								{article.title}
							</h3>
							<p className="mb-4 flex-1 text-sm text-muted-foreground/90 line-clamp-2">
								{article.excerpt}
							</p>
							<div className="flex items-center justify-between text-sm text-muted-foreground">
								<span className="font-medium">By {article.author}</span>
								<span className="text-primary-600 dark:text-primary-400 group-hover:underline">Read more</span>
							</div>
						</div>
					</button>
				))}
			</div>

			<div className="mt-8 flex justify-center space-x-4">
				<button
					onClick={goToPrevious}
					disabled={isPending}
					className={`hover-scale glass-effect rounded-full p-2 text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 ${
						isPending ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					aria-label="Previous articles"
				>
					<FaChevronLeft className="h-6 w-6" />
				</button>
				<button
					onClick={goToNext}
					disabled={isPending}
					className={`hover-scale glass-effect rounded-full p-2 text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 ${
						isPending ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					aria-label="Next articles"
				>
					<FaChevronRight className="h-6 w-6" />
				</button>
			</div>
		</div>
	);
}
