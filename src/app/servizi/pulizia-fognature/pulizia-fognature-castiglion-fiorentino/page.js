import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglion Fiorentino",
  canonical: links.servizi["pulizia-fognature"]["castiglion-fiorentino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
