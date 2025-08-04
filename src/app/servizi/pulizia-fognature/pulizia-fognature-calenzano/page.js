import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Calenzano",
  canonical: links.servizi["pulizia-fognature"]["calenzano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
