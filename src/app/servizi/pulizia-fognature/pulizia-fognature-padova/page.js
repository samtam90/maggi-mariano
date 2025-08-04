import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Padova",
  canonical: links.servizi["pulizia-fognature"]["padova"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});
