import React from 'react';
import { Star, Check } from 'lucide-react';
import { Technology } from '../types/technology';

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (technology: Technology) => void;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  technology,
  isAdded,
  onAddToStack,
}) => {
  const getBadgeStyle = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'popular':
        return 'bg-sky-50 text-sky-600 border border-sky-100';
      case 'versatile':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
      case 'fast':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      case 'standard':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
      case 'top sql':
      case 'essential':
      case 'containers':
        return 'bg-sky-50 text-sky-600 border border-sky-100';
      case 'cache':
        return 'bg-rose-50 text-rose-600 border border-rose-100';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      case 'robust':
        return 'bg-cyan-50 text-cyan-600 border border-cyan-100';
      case 'modern':
        return 'bg-teal-50 text-teal-600 border border-teal-100';
      default:
        return 'bg-slate-50 text-slate-600 border border-slate-100';
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full group ${
        isAdded
          ? 'border-pink-500 ring-2 ring-pink-500/20 shadow-pink-500/5'
          : 'border-slate-100'
      }`}
    >
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 p-2 flex items-center justify-center border border-slate-100/80 group-hover:scale-105 transition-transform duration-200">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                // Fallback icon if URL fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${getBadgeStyle(technology.badge)}`}>
            {technology.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {technology.name}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {technology.description}
        </p>
      </div>

      <div>
        {/* Chips: Category, Difficulty, Rating */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-5 gap-2 flex-wrap">
          <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium text-[11px]">
            {technology.category}
          </span>
          <span className="text-slate-400 font-normal text-[11px]">
            {technology.difficulty}
          </span>
          <div className="flex items-center gap-1 text-slate-700 font-bold text-[11px]">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{technology.rating}</span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          type="button"
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-pink-50 text-pink-700 border border-pink-200/80 cursor-not-allowed'
              : 'bg-gradient-brand text-white hover-gradient-brand active:scale-[0.98] shadow-sm hover:shadow-md'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
              <span>Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};
