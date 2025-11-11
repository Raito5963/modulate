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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-start z-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
                    {profile.name}
                  </h2>
                  {isTeamMember(profile) && (
                    <div className="space-y-1">
                      <p className="text-emerald-500 font-semibold">{profile.role}</p>
                      <p className="text-gray-500 dark:text-gray-400">{profile.country}</p>
                    </div>
                  )}
                  {isAdvisor(profile) && (
                    <div className="space-y-1">
                      <p className="text-emerald-500 font-semibold">{profile.title}</p>
                      <p className="text-gray-500 dark:text-gray-400">{profile.affiliation}</p>
                    </div>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="text-2xl text-gray-500 dark:text-gray-400" />
                </button>
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

                {/* Advisor Expertise */}
                {isAdvisor(profile) && profile.expertise && profile.expertise.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {lang === 'ja' ? '専門分野' : 'Expertise'}
                    </h3>
                    <ul className="space-y-2">
                      {profile.expertise.map((exp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advisor Publications */}
                {isAdvisor(profile) && profile.publications && profile.publications.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {lang === 'ja' ? '主な業績・著作' : 'Publications'}
                    </h3>
                    <ul className="space-y-2">
                      {profile.publications.map((pub, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advisor Comment */}
                {isAdvisor(profile) && profile.comment && (
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-200 dark:border-emerald-500/20">
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {lang === 'ja' ? 'コメント' : 'Comment'}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{profile.comment}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
