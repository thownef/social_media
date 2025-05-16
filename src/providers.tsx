import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider placement="top-right" toastProps={{ timeout: 1000 }} />
      {children}
    </HeroUIProvider>
  );
}
