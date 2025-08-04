import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sigillo",
  canonical: links.servizi["pulizia-fognature"]["sigillo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
