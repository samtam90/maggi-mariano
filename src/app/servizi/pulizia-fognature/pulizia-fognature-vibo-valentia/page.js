import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Vibo Valentia",
  canonical: links.servizi["pulizia-fognature"]["vibo-valentia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"}  
});
