import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montespertoli",
  canonical: links.servizi["trasporto-rifiuti"]["montespertoli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});