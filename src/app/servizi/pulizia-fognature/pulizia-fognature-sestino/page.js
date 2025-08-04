import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sestino",
  canonical: links.servizi["pulizia-fognature"]["sestino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sestino", 
    locationNames: {label: "Sestino", href: "sestino"}  
});
