import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Campi Bisenzio",
  canonical: links.servizi["trasporto-acqua"]["campi-bisenzio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});