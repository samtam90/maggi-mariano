import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Asti",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});