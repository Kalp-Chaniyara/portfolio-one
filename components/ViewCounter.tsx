'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Eye } from 'lucide-react';

export default function ViewCounter({ slug, increment = true }: { slug: string; increment?: boolean }) {
     const [views, setViews] = useState<number | null>(null);

     useEffect(() => {
          const handleViews = async () => {
               try {
                    if (increment) {
                         // Call the RPC function to safely increment the view count
                         const { error } = await supabase.rpc('increment_view_count', {
                              slug_input: slug,
                         });

                         if (error) {
                              console.error('Error incrementing view count:', error);
                         }
                    }

                    // Fetch the updated count
                    const { data: viewData, error: viewError } = await supabase
                         .from('views')
                         .select('count')
                         .eq('slug', slug)
                         .single();

                    if (viewError) {
                         // If error is PGRST116 (no rows), it means 0 views.
                         // But for now let's just log it.
                         // console.error('Error fetching view count:', viewError);
                    } else if (viewData) {
                         setViews(viewData.count);
                    } else {
                         setViews(0);
                    }
               } catch (err) {
                    console.error('Unexpected error:', err);
               }
          };

          handleViews();
     }, [slug, increment]);

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
