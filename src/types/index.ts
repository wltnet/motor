export interface LoadableState<T> {
  data: T;
  error: string | null;
  isLoading: boolean;
}

export interface ImageInfo {
  id: number;
  url: string;
  large_url: string;
  source_id: number | null;
  copyright: string;
  site: string;
}

export interface ImageData {
  images: ImageInfo[];
}

export type ImageInfoState = LoadableState<ImageData>;
