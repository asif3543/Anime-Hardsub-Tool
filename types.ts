
export enum ThumbnailPosition {
  TOP_LEFT = 'Top Left',
  TOP_RIGHT = 'Top Right',
  BOTTOM_LEFT = 'Bottom Left',
  BOTTOM_RIGHT = 'Bottom Right'
}

export interface FileState {
  file: File | null;
  name: string;
}

export interface ProcessingState {
  isProcessing: boolean;
  progress: number;
  log: string[];
}
