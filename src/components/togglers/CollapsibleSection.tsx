import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa";
import { BaseEnum } from '../../entities/components.enum';

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className='section'>
      <div className='sectionTitle' onClick={toggleSection}>
        <div className='sectionTitleText'>
          {icon}
          <span>{title}</span>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: BaseEnum.TRANSITION_DURATION }}
          style={{ marginLeft: '0.5rem' }}
        >
          <FaArrowUp size={18} />
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: BaseEnum.TRANSITION_DURATION }}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default CollapsibleSection;