import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bastia Umbra",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"}  
});