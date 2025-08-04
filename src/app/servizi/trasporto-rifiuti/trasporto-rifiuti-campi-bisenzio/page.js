import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Campi Bisenzio",
  canonical: links.servizi["trasporto-rifiuti"]["campi-bisenzio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});