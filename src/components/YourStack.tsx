import React from 'react';
import { X, Trash2, Layers } from 'lucide-react';
import { Technology } from '../types/technology';

interface YourStackProps {
  selectedStack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onClearStack: () => void;
}

export const YourStack: React.FC<YourStackProps> = ({
  selectedStack,
  onRemoveFromStack,
  onClearStack,
}) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>Your Stack</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {count > 0
              ? `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`
              : 'No technologies selected yet.'}
          </p>
        </div>
        {count > 0 && (
          <button
            onClick={onClearStack}
            type="button"
            className="text-xs text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1 hover:underline transition-colors"
            title="Clear all selected items"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Remove All</span>
          </button>
        )}
      </div>

      {/* Empty State vs Selected List */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-12 px-4 text-center bg-slate-50/50">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <Layers className="w-5 h-5" />
          </div>
          <p className="text-slate-400 text-xs font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {selectedStack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-white p-1.5 flex items-center justify-center border border-slate-200/60 shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 truncate">
                    {tech.name}
                  </h4>
                  <span className="inline-block px-1.5 py-0.5 bg-slate-200/70 text-slate-600 text-[10px] font-medium rounded mt-0.5">
                    {tech.category}
                  </span>
                </div>
              </div>

              {/* Remove item button */}
              <button
                onClick={() => onRemoveFromStack(tech.id)}
                type="button"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all shrink-0"
                title={`Remove ${tech.name} from stack`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
