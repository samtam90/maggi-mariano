import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sansepolcro",
  canonical: links.servizi["pulizia-fognature"]["sansepolcro"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});
