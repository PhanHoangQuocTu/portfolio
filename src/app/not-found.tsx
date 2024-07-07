import Link from 'next/link';

import { StyledButton, VStack } from '@/components/ui';

export default function NotFound() {
  return (
    <VStack align={'center'} justify={'center'} className="min-h-screen">
      <VStack spacing={16}>
        <h1 className="text-2xl font-bold lg:text-4xl">Not Found</h1>
        <p className="text-lg font-medium lg:text-xl">Could not find requested resource</p>
        <Link href="/">
          <StyledButton>Return Home</StyledButton>
        </Link>
      </VStack>
    </VStack>
  );
}
