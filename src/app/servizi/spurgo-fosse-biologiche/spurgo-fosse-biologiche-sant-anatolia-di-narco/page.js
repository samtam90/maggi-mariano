import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sant'Anatolia di Narco",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sant-anatolia-di-narco"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});
