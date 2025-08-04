import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Badia Tedalda",
  canonical: links.servizi["pulizia-fognature"]["badia-tedalda"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});
