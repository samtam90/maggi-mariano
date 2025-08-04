import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gubbio",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});