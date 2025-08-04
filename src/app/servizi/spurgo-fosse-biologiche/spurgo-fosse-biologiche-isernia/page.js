import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Isernia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["isernia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});
