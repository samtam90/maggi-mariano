import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Norcia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});