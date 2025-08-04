import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sansepolcro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sansepolcro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});
