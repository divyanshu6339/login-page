'use client';

import LoginCard from '@/components/LoginCard';

// This line is added to force update

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <LoginCard />
    </div>
  );
}
