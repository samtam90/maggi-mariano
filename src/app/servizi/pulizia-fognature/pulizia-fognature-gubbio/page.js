import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Gubbio",
  canonical: links.servizi["pulizia-fognature"]["gubbio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});
