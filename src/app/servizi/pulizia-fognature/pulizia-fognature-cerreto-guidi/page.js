import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cerreto Guidi",
  canonical: links.servizi["pulizia-fognature"]["cerreto-guidi"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});
