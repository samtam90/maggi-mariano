import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Impruneta",
  canonical: links.servizi["pulizia-fognature"]["impruneta"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});
