import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bibbiena",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});