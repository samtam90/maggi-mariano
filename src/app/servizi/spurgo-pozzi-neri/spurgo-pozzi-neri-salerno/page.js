import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Salerno",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});