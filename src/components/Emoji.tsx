import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

    const emojiMap: { [key: number]: { [key: string]: string } } = {
      3: { src: meh, alt: "meh", boxSize: "25px" },
      4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
      5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
    };
    return <>
        <Image {...emojiMap[rating]}/>
    </>;
};  

export default Emoji;
