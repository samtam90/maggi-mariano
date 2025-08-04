import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Fossato di Vico",
  canonical: links.servizi["pulizia-fognature"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});
