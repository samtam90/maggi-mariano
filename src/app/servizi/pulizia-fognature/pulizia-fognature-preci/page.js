import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Preci",
  canonical: links.servizi["pulizia-fognature"]["preci"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});
