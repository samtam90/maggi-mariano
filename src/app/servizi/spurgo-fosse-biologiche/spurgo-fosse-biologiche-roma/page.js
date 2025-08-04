import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Roma",
  canonical: links.servizi["spurgo-fosse-biologiche"]["roma"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});
