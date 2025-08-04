import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castelfranco Piandiscò",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});