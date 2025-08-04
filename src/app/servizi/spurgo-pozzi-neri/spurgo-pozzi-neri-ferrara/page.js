import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ferrara",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});