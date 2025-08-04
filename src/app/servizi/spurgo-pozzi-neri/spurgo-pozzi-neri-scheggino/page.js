import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Scheggino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});