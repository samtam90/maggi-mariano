import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sansepolcro",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});