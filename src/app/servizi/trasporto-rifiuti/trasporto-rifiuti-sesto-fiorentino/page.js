import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sesto Fiorentino",
  canonical: links.servizi["trasporto-rifiuti"]["sesto-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});