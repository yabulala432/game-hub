import { Badge } from "@chakra-ui/react";

interface CriticScoreProps{
    value: number;
}
const CriticScore = ({ value }: CriticScoreProps) => {
    let color= value >= 85 ? 'green' : value > 65?'yellow':'';
  return (
      <Badge colorScheme={color} borderRadius={10} fontSize={"15"} padding={2}>{value}</Badge>
  )
}

export default CriticScore