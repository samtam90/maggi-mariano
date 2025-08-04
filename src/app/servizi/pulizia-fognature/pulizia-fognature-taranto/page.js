import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Taranto",
  canonical: links.servizi["pulizia-fognature"]["taranto"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});
