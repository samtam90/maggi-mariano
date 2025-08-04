import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ravenna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ravenna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});
