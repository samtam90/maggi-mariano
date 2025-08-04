import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Como",
  canonical: links.servizi["spurgo-fosse-biologiche"]["como"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Como", 
    locationNames: {label: "Como", href: "como"}  
});
