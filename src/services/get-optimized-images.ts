import noImagePlaceholder from '../assets/no-image-placeholder.webp'

export function getOptimizedImages(imageUrl: string): string {
  if (!imageUrl) return noImagePlaceholder ;

  const target: string = "media/";
  let index: number = imageUrl.indexOf(target) + target.length;
  const optimizedImage: string =
    imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
  return optimizedImage;
}


 
