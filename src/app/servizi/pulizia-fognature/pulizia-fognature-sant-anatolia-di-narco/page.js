import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sant'Anatolia di Narco",
  canonical: links.servizi["pulizia-fognature"]["sant-anatolia-di-narco"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});
