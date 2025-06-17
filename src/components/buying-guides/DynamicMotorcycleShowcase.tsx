"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaInfoCircle, FaRegHeart, FaHeart } from 'react-icons/fa';
import { getImagePath } from '@/lib/image-utils';

interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  engineSize: string;
  power: string;
  weight: string;
  seatHeight: string;
  image: string;
  description: string;
  rating: number;
  beginner: boolean;
}

interface DynamicMotorcycleShowcaseProps {
  initialMotorcycles: Motorcycle[];
  title?: string;
}

export default function DynamicMotorcycleShowcase({ 
  initialMotorcycles,
  title = "Featured Motorcycles" 
}: DynamicMotorcycleShowcaseProps) {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>(initialMotorcycles);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<Motorcycle | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isComparing, setIsComparing] = useState(false);
  const [compareList, setCompareList] = useState<Motorcycle[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteMotorcycles');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Error parsing favorites:', e);
      }
    }
  }, []);

  // Get unique categories from motorcycles
  const categories = ["all", ...Array.from(new Set(motorcycles.map(m => m.category)))];

  // Filter motorcycles by category
  const filteredMotorcycles = activeCategory === "all" 
    ? motorcycles 
    : motorcycles.filter(m => m.category === activeCategory);

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('favoriteMotorcycles', JSON.stringify(newFavorites));
  };

  // Toggle compare selection
  const toggleCompare = (motorcycle: Motorcycle) => {
    if (compareList.some(m => m.id === motorcycle.id)) {
      setCompareList(compareList.filter(m => m.id !== motorcycle.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, motorcycle]);
    }
  };

  return (
    <div className="py-8">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-3xl font-bold">{title}</h2>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Compare mode toggle */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => {
              setIsComparing(!isComparing);
              if (!isComparing) {
                setCompareList([]);
              }
            }}
            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              isComparing
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {isComparing ? 'Cancel Comparison' : 'Compare Motorcycles'}
          </button>
          {isComparing && (
            <span className="ml-3 text-sm text-muted-foreground">
              Select up to 3 motorcycles to compare
            </span>
          )}
        </div>
        
        {isComparing && compareList.length >= 2 && (
          <button
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
          >
            Compare ({compareList.length})
          </button>
        )}
      </div>

      {/* Motorcycle grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredMotorcycles.map((motorcycle) => (
            <motion.div
              key={motorcycle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`group glass-card overflow-hidden rounded-xl ${
                isComparing && compareList.some(m => m.id === motorcycle.id)
                  ? 'ring-2 ring-primary-500'
                  : ''
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={getImagePath(motorcycle.image)}
                  alt={motorcycle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Favorite button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(motorcycle.id);
                  }}
                  className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-red-500 shadow-md backdrop-blur-sm transition-transform hover:scale-110 dark:bg-slate-900/80"
                >
                  {favorites.includes(motorcycle.id) ? (
                    <FaHeart className="h-4 w-4" />
                  ) : (
                    <FaRegHeart className="h-4 w-4" />
                  )}
                </button>
                
                {/* Beginner friendly badge */}
                {motorcycle.beginner && (
                  <div className="absolute left-3 top-3 rounded-full bg-green-500/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    Beginner Friendly
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-500">{motorcycle.brand}</span>
                  <span className="text-xs font-medium text-muted-foreground">{motorcycle.category}</span>
                </div>
                
                <h3 className="mb-1 text-xl font-bold">{motorcycle.name}</h3>
                <p className="mb-3 text-lg font-semibold text-primary-500">{motorcycle.price}</p>
                
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-xs text-muted-foreground">Engine</span>
                    <p>{motorcycle.engineSize}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Power</span>
                    <p>{motorcycle.power}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Weight</span>
                    <p>{motorcycle.weight}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Seat Height</span>
                    <p>{motorcycle.seatHeight}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMotorcycle(motorcycle)}
                    className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    <FaInfoCircle className="mr-1.5 h-3.5 w-3.5" />
                    More Details
                  </button>
                  
                  {isComparing && (
                    <button
                      onClick={() => toggleCompare(motorcycle)}
                      className={`rounded-lg px-3 py-1 text-xs font-medium ${
                        compareList.some(m => m.id === motorcycle.id)
                          ? 'bg-primary-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                      disabled={!compareList.some(m => m.id === motorcycle.id) && compareList.length >= 3}
                    >
                      {compareList.some(m => m.id === motorcycle.id) ? 'Selected' : 'Select'}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Motorcycle detail modal */}
      <AnimatePresence>
        {selectedMotorcycle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl bg-white p-6 shadow-xl dark:bg-slate-900"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedMotorcycle.name}</h2>
                  <p className="text-primary-500">{selectedMotorcycle.brand} · {selectedMotorcycle.category}</p>
                </div>
                <button
                  onClick={() => setSelectedMotorcycle(null)}
                  className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={getImagePath(selectedMotorcycle.image)}
                  alt={selectedMotorcycle.name}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Specifications</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-slate-100 pb-1 dark:border-slate-800">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-medium">{selectedMotorcycle.price}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1 dark:border-slate-800">
                      <span className="text-muted-foreground">Engine</span>
                      <span className="font-medium">{selectedMotorcycle.engineSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1 dark:border-slate-800">
                      <span className="text-muted-foreground">Power</span>
                      <span className="font-medium">{selectedMotorcycle.power}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1 dark:border-slate-800">
                      <span className="text-muted-foreground">Weight</span>
                      <span className="font-medium">{selectedMotorcycle.weight}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1 dark:border-slate-800">
                      <span className="text-muted-foreground">Seat Height</span>
                      <span className="font-medium">{selectedMotorcycle.seatHeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Beginner Friendly</span>
                      <span className="font-medium">{selectedMotorcycle.beginner ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Description</h3>
                  <p className="text-muted-foreground">{selectedMotorcycle.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="mb-2 text-lg font-semibold">Rating</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-5 w-5 ${
                              star <= selectedMotorcycle.rating
                                ? 'text-yellow-500'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {selectedMotorcycle.rating} out of 5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => toggleFavorite(selectedMotorcycle.id)}
                  className={`flex items-center rounded-lg px-4 py-2 ${
                    favorites.includes(selectedMotorcycle.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {favorites.includes(selectedMotorcycle.id) ? (
                    <>
                      <FaHeart className="mr-2 h-4 w-4" /> Saved
                    </>
                  ) : (
                    <>
                      <FaRegHeart className="mr-2 h-4 w-4" /> Save
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedMotorcycle(null)}
                  className="rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Comparison modal */}
      <AnimatePresence>
        {showModal && compareList.length >= 2 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-xl bg-white p-6 shadow-xl dark:bg-slate-900"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold">Motorcycle Comparison</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-200 pb-2 text-left dark:border-slate-700"></th>
                      {compareList.map((motorcycle) => (
                        <th key={motorcycle.id} className="border-b border-slate-200 pb-2 text-center dark:border-slate-700">
                          <div className="relative mx-auto h-24 w-32 overflow-hidden rounded-lg">
                            <Image
                              src={getImagePath(motorcycle.image)}
                              alt={motorcycle.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="mt-2 text-base font-semibold">{motorcycle.name}</h3>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Brand</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.brand}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Category</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.category}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Price</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center font-semibold text-primary-500 dark:border-slate-700">
                          {motorcycle.price}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Engine</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.engineSize}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Power</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.power}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Weight</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.weight}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Seat Height</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.seatHeight}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 py-3 font-medium dark:border-slate-700">Beginner Friendly</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="border-b border-slate-200 py-3 text-center dark:border-slate-700">
                          {motorcycle.beginner ? (
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Yes
                            </span>
                          ) : (
                            <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                              No
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Rating</td>
                      {compareList.map((motorcycle) => (
                        <td key={motorcycle.id} className="py-3 text-center">
                          <div className="flex justify-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= motorcycle.rating
                                    ? 'text-yellow-500'
                                    : 'text-slate-300 dark:text-slate-600'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}