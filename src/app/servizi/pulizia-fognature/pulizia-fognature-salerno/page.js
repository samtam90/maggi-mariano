import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Salerno",
  canonical: links.servizi["pulizia-fognature"]["salerno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});
