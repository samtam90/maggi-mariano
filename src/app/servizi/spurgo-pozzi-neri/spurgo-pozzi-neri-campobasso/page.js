import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Campobasso",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});