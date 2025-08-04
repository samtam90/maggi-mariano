import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pietralunga",
  canonical: links.servizi["pulizia-fognature"]["pietralunga"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});
