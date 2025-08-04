import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Impruneta",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});