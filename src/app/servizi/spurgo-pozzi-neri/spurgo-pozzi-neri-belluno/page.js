import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Belluno",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});