import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sondrio",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});