'use client';

import React from 'react';
import { Modal, ModalContent } from '@nextui-org/modal';
import ReactPlayer from 'react-player';

import { cn } from '@/lib/utils';

interface Props {
  url?: string;
  children: React.ReactNode;
}

const VideoModal = ({ url, children }: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef<React.ElementRef<typeof ReactPlayer>>(null);
  return (
    <>
      {React.cloneElement(children as React.ReactElement, {
        onClick: () => {
          setOpen(true);
        },
      })}

      <Modal backdrop="blur" classNames={{ closeButton: 'hidden' }} size="3xl" isOpen={isOpen} onOpenChange={setOpen}>
        <ModalContent>
          <div className={cn('relative h-full min-h-[500px] w-full overflow-hidden p-4')}>
            <ReactPlayer
              style={{ position: 'absolute', inset: 0 }}
              ref={ref}
              width="100%"
              controls
              height="100%"
              url={url}
            />
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoModal;
