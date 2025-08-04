import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pistoia",
  canonical: links.servizi["pulizia-fognature"]["pistoia"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});
