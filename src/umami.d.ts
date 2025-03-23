declare global {
  interface Window {
    umami?: {
      track: (eventName: string) => void;
    };
  }

  const umami: {
    track: (eventName: string) => void;
  };
}

export {};
