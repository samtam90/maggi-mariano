import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Valtopina",
  canonical: links.servizi["pulizia-fognature"]["valtopina"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});
