import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Umbertide",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});