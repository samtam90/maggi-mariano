import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Taranto",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});