import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Como",
  canonical: links.servizi["pulizia-fognature"]["como"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Como", 
    locationNames: {label: "Como", href: "como"}  
});
