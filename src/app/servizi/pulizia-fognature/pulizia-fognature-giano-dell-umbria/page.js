import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Giano dell'Umbria",
  canonical: links.servizi["pulizia-fognature"]["giano-dell-umbria"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});
