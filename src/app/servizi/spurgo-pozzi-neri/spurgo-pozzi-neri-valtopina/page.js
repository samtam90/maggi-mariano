import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Valtopina",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});