import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Capraia e Limite",
  canonical: links.servizi["trasporto-rifiuti"]["capraia-e-limite"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});