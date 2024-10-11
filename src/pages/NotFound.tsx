import { PlaceholderContainer } from "../components/common";
import notFound from "../assets/animations/notFound.json";

export const NotFound = () => {
  return (
    <>
      <PlaceholderContainer
        animationData={notFound}
        description="404 NOT FOUND"
        title="h2"
        top="30%"
        color="#808080"
      />
    </>
  );
};
