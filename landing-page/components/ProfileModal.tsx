'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { TeamMember, Advisor } from '@/lib/dictionaries';

type ProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  profile: TeamMember | Advisor | null;
  type: 'team' | 'advisor';
  lang: string;
};

export default function ProfileModal({ isOpen, onClose, profile, type, lang }: ProfileModalProps) {
  if (!profile) return null;

  const isTeamMember = (profile: TeamMember | Advisor): profile is TeamMember => {
    return 'role' in profile && 'country' in profile;
  };

  const isAdvisor = (profile: TeamMember | Advisor): profile is Advisor => {
    return 'title' in profile && 'affiliation' in profile;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <FiX className="text-2xl text-gray-700 dark:text-gray-300" />
              </button>

              {/* Two Column Layout */}
              <div className="flex flex-col md:flex-row max-h-[90vh]">
                {/* Left Half - Profile Image */}
                <div className="md:w-1/2 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10 flex items-center justify-center">
                  {profile.image ? (
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-6xl text-gray-400 dark:text-gray-500">
                        {profile.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Half - Profile Information */}
                <div className="md:w-1/2 overflow-y-auto">
                  {/* Header */}
                  <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3">
                      {profile.name}
                    </h2>
                    {isTeamMember(profile) && (
                      <div className="space-y-1">
                        <p className="text-emerald-500 font-semibold text-lg">{profile.role}</p>
                        <p className="text-gray-500 dark:text-gray-400">{profile.country}</p>
                      </div>
                    )}
                    {isAdvisor(profile) && (
                      <div className="space-y-1">
                        <p className="text-emerald-500 font-semibold text-lg">{profile.title}</p>
                        <p className="text-gray-500 dark:text-gray-400">{profile.affiliation}</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                {/* Bio */}
                {profile.bio && (
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {lang === 'ja' ? '経歴' : 'Biography'}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {profile.bio}
                    </p>
                  </div>
                )}

                {/* Team Member Experience */}
                {isTeamMember(profile) && profile.experience && profile.experience.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {lang === 'ja' ? '経験' : 'Experience'}
                    </h3>
                    <ul className="space-y-2">
                      {profile.experience.map((exp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Team Member Education */}
                {isTeamMember(profile) && profile.education && profile.education.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {lang === 'ja' ? '学歴' : 'Education'}
                    </h3>
                    <ul className="space-y-2">
                      {profile.education.map((edu, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
