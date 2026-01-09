'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, increment, updateDoc } from 'firebase/firestore';
import { Eye } from 'lucide-react';

export default function ViewCounter({ slug, increment: shouldIncrement = true }: { slug: string; increment?: boolean }) {
     const [views, setViews] = useState<number | null>(null);

     useEffect(() => {
          const handleViews = async () => {
               try {
                    const viewRef = doc(db, 'views', slug);

                    if (shouldIncrement) {
                         // Increment view count
                         // setDoc with merge: true creates the document if it doesn't exist
                         await setDoc(viewRef, { count: increment(1) }, { merge: true });
                    }

                    // Fetch the updated count
                    const viewSnap = await getDoc(viewRef);

                    if (viewSnap.exists()) {
                         setViews(viewSnap.data().count);
                    } else {
                         setViews(0);
                    }
               } catch (err) {
                    console.error('Error handling views:', err);
                    // Fallback to 0 or previous views on error
                    if (views === null) setViews(0);
               }
          };

          handleViews();
     }, [slug, shouldIncrement]);

     if (views === null) {
          return (
               <span className="flex items-center gap-2 text-white/50 text-sm">
                    <Eye size={16} />
                    <span>...</span>
               </span>
          );
     }

     return (
          <span className="flex items-center gap-2 text-white/50 text-sm">
               <Eye size={16} />
               <span>{views.toLocaleString()} views</span>
          </span>
     );
}
