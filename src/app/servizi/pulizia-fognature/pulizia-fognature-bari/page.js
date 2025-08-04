import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bari",
  canonical: links.servizi["pulizia-fognature"]["bari"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});
