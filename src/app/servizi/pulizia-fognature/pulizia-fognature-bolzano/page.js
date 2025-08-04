import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bolzano",
  canonical: links.servizi["pulizia-fognature"]["bolzano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});
