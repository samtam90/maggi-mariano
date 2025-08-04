import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pontassieve",
  canonical: links.servizi["pulizia-fognature"]["pontassieve"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"}  
});
