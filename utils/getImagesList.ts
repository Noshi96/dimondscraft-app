import { importAll } from './importAll';

export interface TemplateListObjectType {
  Auction1: any[];
  Auction2: any[];
  Auction3: any[];
  Auction4: any[];
  Auction5: any[];
  Auction6: any[];
  Auction7: any[];
}

export const getImagesList: TemplateListObjectType = {
  Auction1: importAll(
    require.context('/public/images/gallery/Auction1/', false, /\.(webp)$/)
  ) as any[],
  Auction2: importAll(
    require.context('/public/images/gallery/Auction2/', false, /\.(webp)$/)
  ) as any[],
  Auction3: importAll(
    require.context('/public/images/gallery/Auction3/', false, /\.(webp)$/)
  ) as any[],
  Auction4: importAll(
    require.context('/public/images/gallery/Auction4/', false, /\.(webp)$/)
  ) as any[],
  Auction5: importAll(
    require.context('/public/images/gallery/Auction5/', false, /\.(webp)$/)
  ) as any[],
  Auction6: importAll(
    require.context('/public/images/gallery/Auction6/', false, /\.(webp)$/)
  ) as any[],
  Auction7: importAll(
    require.context('/public/images/gallery/Auction7/', false, /\.(webp)$/)
  ) as any[],
};
