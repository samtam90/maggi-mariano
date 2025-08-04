import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castelfiorentino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});