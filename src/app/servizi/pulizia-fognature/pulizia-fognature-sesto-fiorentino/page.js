import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Sesto Fiorentino",
  canonical: links.servizi["pulizia-fognature"]["sesto-fiorentino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});
