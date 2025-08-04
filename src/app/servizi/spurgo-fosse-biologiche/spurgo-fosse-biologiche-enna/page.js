import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Enna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["enna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});
