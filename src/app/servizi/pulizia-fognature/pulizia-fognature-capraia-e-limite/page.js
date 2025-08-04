import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Capraia e Limite",
  canonical: links.servizi["pulizia-fognature"]["capraia-e-limite"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});
