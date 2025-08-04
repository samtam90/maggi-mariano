import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Cesa in valdichiana",
  canonical: links.servizi["pulizia-fognature"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});
