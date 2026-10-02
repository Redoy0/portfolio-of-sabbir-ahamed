import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiCodeBracket,
  HiViewColumns,
  HiTrophy,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';

// `id` must match the id of the section it scrolls to
export const navData = [
  { id: 'home', name: 'home', icon: HiHome },
  { id: 'about', name: 'about', icon: HiUser },
  { id: 'experience', name: 'experience', icon: HiBriefcase },
  { id: 'skills', name: 'skills', icon: HiCodeBracket },
  { id: 'projects', name: 'projects', icon: HiViewColumns },
  { id: 'achievements', name: 'achievements', icon: HiTrophy },
  { id: 'services', name: 'services', icon: HiRectangleGroup },
  { id: 'contact', name: 'contact', icon: HiEnvelope },
];
