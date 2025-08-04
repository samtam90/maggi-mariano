import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Carbonia Iglesias",
  canonical: links.servizi["pulizia-fognature"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});
