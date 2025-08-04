import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Camucia",
  canonical: links.servizi["pulizia-fognature"]["camucia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});
