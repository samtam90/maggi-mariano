import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lodi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});