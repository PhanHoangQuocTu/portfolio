import React, { type FC } from 'react';

interface Props {
  id: string;
}

const ContactSection: FC<Props> = ({ id }) => {
  return (
    <div id={id} className="min-h-screen">
      ContactSection
    </div>
  );
};

export default ContactSection;
