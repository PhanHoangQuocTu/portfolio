import React from 'react';

interface Props {
  id: string;
}

const ContactSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ContactSection
    </div>
  );
};

export default ContactSection;
