import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sesto Fiorentino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sesto-fiorentino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});
