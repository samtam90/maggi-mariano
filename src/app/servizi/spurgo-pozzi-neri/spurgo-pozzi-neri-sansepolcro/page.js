import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sansepolcro",
  canonical: links.servizi["spurgo-pozzi-neri"]["sansepolcro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});