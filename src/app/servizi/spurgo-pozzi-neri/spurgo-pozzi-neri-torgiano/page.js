import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Torgiano",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});