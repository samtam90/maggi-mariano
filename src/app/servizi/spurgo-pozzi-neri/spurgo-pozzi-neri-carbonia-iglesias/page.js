import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Carbonia Iglesias",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});