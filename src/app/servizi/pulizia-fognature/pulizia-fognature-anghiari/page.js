import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Anghiari",
  canonical: links.servizi["pulizia-fognature"]["anghiari"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});
