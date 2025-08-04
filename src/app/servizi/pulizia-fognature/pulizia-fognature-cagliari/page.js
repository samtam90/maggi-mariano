import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cagliari",
  canonical: links.servizi["pulizia-fognature"]["cagliari"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});
