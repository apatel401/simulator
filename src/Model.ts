export interface Magnification {
    title: string;
    thumbnail: string;
    thumbnailAlt: string;
    img: string;
    imgAlt: string;
  }
  
  export interface Slide {
    magnifications: Magnification[];
    slideDetails: string;
  }
  
  export interface MicroscopeData {
    title: string;
    instructions: string;
    department: string;
    scaleColor: string;
    basePath: string;
    slides: Slide[];
  }

  export interface ContextProps {
      id: number;
      currentSlide: number;
      currentMagnification: number;
      showProcedure: boolean;
      scale: boolean;
      light: boolean;
      brightness: number;
      blur: number;
      moveX: number;
      moveY: number;
      rotation: number;
      announcementInfo: string;
      updateContext: (contextUpdates: Partial<ContextProps>) => void;
  }
  