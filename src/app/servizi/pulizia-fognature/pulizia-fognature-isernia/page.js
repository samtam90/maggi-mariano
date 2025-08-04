import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Isernia",
  canonical: links.servizi["pulizia-fognature"]["isernia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});
