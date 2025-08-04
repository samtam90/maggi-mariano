import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montespertoli",
  canonical: links.servizi["pulizia-fognature"]["montespertoli"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});
