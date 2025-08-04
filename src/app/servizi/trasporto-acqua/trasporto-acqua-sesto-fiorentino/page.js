import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sesto Fiorentino",
  canonical: links.servizi["trasporto-acqua"]["sesto-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});