import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montaione",
  canonical: links.servizi["pulizia-fognature"]["montaione"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});
