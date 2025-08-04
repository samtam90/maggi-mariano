import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Poppi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});