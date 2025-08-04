import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Certaldo",
  canonical: links.servizi["pulizia-fognature"]["certaldo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
