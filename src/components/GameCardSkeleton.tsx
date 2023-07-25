import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
      <Card borderRadius={'40px'} overflow='hidden'>
          <Skeleton height="300px" />
          <CardBody>
              <SkeletonText />
          </CardBody>
     </Card>
    )
}

export default GameCardSkeleton;