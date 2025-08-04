import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fossato di Vico",
  canonical: links.servizi["spurgo-fosse-biologiche"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});
