import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Deruta",
  canonical: links.servizi["pulizia-fognature"]["deruta"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});
